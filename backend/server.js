const express = require("express");
const cors = require("cors");
const axios = require("axios");
const net = require("net");
const dns = require("dns");
const whois = require("whois-json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{

res.json({
status:"CyberArena API Running"
});

});


// DNS records
const getDNSRecords = async(domain)=>{

return new Promise((resolve)=>{

dns.resolveMx(domain,(err,mx)=>{

dns.resolveTxt(domain,(err2,txt)=>{

resolve({

mx: mx ? mx.map(m=>m.exchange) : [],
txt: txt ? txt.flat() : []

});

});

});

});

};


// Port scanner
const scanPort = (host,port)=>{

return new Promise((resolve)=>{

const socket = new net.Socket();

socket.setTimeout(1500);

socket.on("connect",()=>{

socket.destroy();
resolve(port);

});

socket.on("timeout",()=>{

socket.destroy();
resolve(null);

});

socket.on("error",()=>{

resolve(null);

});

socket.connect(port,host);

});

};


// Technology detection
const detectTech = async(domain)=>{

try{

const response = await axios.get(
`https://${domain}`,
{timeout:4000}
);

const headers = response.headers;

const tech = [];

if(headers.server){

tech.push(headers.server);

}

if(headers["x-powered-by"]){

tech.push(headers["x-powered-by"]);

}

if(headers["cf-ray"]){

tech.push("Cloudflare");

}

if(headers["x-amz-cf-id"]){

tech.push("AWS CloudFront");

}

if(headers["x-vercel-cache"]){

tech.push("Vercel");

}

return tech.length ? tech : ["Unknown"];

}catch{

return ["Detection failed"];

}

};


// Security headers scanner
const checkSecurityHeaders = async(domain)=>{

try{

const response = await axios.get(
`https://${domain}`,
{timeout:4000}
);

const headers = response.headers;

const required = [

"x-frame-options",
"x-xss-protection",
"x-content-type-options",
"strict-transport-security",
"content-security-policy"

];

const found = [];
const missing = [];

required.forEach(h=>{

if(headers[h]){

found.push(h);

}else{

missing.push(h);

}

});

return {

found,
missing

};

}catch{

return{

found:[],
missing:["Scan failed"]

};

}

};


// Risk score calculator (STEP 33)
const calculateRisk = (securityData,openPorts)=>{

let score = 0;

score += securityData.missing.length;

if(openPorts.length > 5){

score += 2;

}

let level="LOW";

if(score >=3){

level="MEDIUM";

}

if(score >=6){

level="HIGH";

}

return{

score:score,
level:level

};

};

// OSINT username search

const checkUsername = async(username)=>{

const sites=[

"https://github.com/",
"https://reddit.com/user/",
"https://medium.com/@",
"https://dev.to/",
"https://keybase.io/"

];

const results=[];

for(const site of sites){

try{

const url=site+username;

const res=await axios.get(url);

if(res.status===200){

results.push(url);

}

}catch{

}

}

return results;

};

// Recon API
app.post("/recon", async(req,res)=>{

const {domain} = req.body;

try{
    

// Subdomains
const response = await axios.get(
`https://crt.sh/?q=%25.${domain}&output=json`
);

const subdomains = [];

response.data.forEach(cert=>{

if(cert.name_value){

const names = cert.name_value.split("\n");

names.forEach(n=>{

if(!subdomains.includes(n)){

subdomains.push(n);

}

});

}

});


// DNS lookup
dns.lookup(domain, async(err,address)=>{

if(err){

return res.json({

domain:domain,
subdomains:subdomains.slice(0,20),
ports:[],
tech:["DNS lookup failed"]

});

}


// WHOIS + DNS + TECH + SECURITY
const whoisData = await whois(domain);

const dnsData = await getDNSRecords(domain);

const techData = await detectTech(domain);

const securityData = await checkSecurityHeaders(domain);


// Port scan
const commonPorts = [

21,22,25,53,
80,110,143,
443,3306,8080

];

const results = await Promise.all(

commonPorts.map(port=>
scanPort(address,port))

);

const openPorts = results.filter(p=>p);


// Risk calculation
const risk = calculateRisk(
securityData,
openPorts
);

const detectVulnerabilities = async(techData)=>{

const vulns=[];

techData.forEach(t=>{

const tech=t.toLowerCase();

if(tech.includes("apache")){

vulns.push("Apache Path Traversal CVE-2021-41773");

}

if(tech.includes("nginx")){

vulns.push("Nginx Resolver DoS CVE-2021-23017");

}

if(tech.includes("php")){

vulns.push("PHP RCE CVE-2019-11043");

}

if(tech.includes("cloudflare")){

vulns.push("Cloudflare misconfig risk");

}

});

return vulns.length ? vulns : ["No known CVE mapped"];

};

// Final response
res.json({

domain:domain,

ip:address,

subdomains:subdomains.slice(0,20),

ports:openPorts,

whois:{
registrar:whoisData.registrar || "N/A",
country:whoisData.country || "N/A",
created:whoisData.creationDate || "N/A"
},

dns:dnsData,

tech:techData,

security:securityData,

risk:risk

});

});

}catch(err){

res.json({

domain:domain,
subdomains:["Error fetching data"],
ports:[],
tech:["Error"]

});

}

});

// Email OSINT

const emailOSINT = async(email)=>{

const result={};

try{

const parts=email.split("@");

result.username=parts[0] || "N/A";

result.domain=parts[1] || "N/A";


// MX records check
try{

const mx=await dns.promises.resolveMx(result.domain);

result.mx=mx.map(m=>m.exchange);

}catch{

result.mx=["No MX found"];

}


// Gravatar check
const crypto=require("crypto");

const hash=crypto
.createHash("md5")
.update(email.trim().toLowerCase())
.digest("hex");

result.gravatar=
`https://www.gravatar.com/avatar/${hash}`;



// Basic breach pattern check
if(email.includes("123") || email.includes("test")){

result.breachRisk="Possible weak email pattern";

}else{

result.breachRisk="No obvious pattern risk";

}


return result;

}catch{

return{

error:"Email scan failed"

};

}

};

// OSINT API

app.post("/osint", async(req,res)=>{

const {username}=req.body;

try{

const profiles=await checkUsername(username);

res.json({

username:username,

profiles:profiles.length ? profiles : ["No profiles found"]

});

}catch{

res.json({

username:username,

profiles:["Scan failed"]

});

}

});

// Email OSINT API

app.post("/emailosint", async(req,res)=>{

const {email}=req.body;

try{

const data=await emailOSINT(email);

res.json(data);

}catch{

res.json({

error:"Scan failed"

});

}

});

// Phone lookup

app.post("/phone",(req,res)=>{

const {phone}=req.body;

let country="Unknown";

if(phone.startsWith("+91"))
country="India";

res.json({

country:country,
valid:phone.length>=10 ? "Yes":"No",
type:"Mobile"

});

});


// Breach checker

app.post("/breach",(req,res)=>{

const {email}=req.body;

let risk="Low";
let breaches="None";

if(email.includes("test") || email.includes("123")){

risk="Medium";
breaches="Example breach dataset";

}

res.json({

risk:risk,
breaches:breaches

});

});

// IP Lookup

app.post("/ip",(req,res)=>{

const {ip}=req.body;

res.json({

ip:ip,
country:"Unknown",
isp:"Example ISP",
risk:"Low"

});

});



// WHOIS domain lookup

app.post("/whois",(req,res)=>{

const {domain}=req.body;

res.json({

domain:domain,
registrar:"Example Registrar",
country:"Unknown",
created:"Unknown"

});

});

app.listen(5000,()=>{

console.log("Server running on port 5000");

});