import React,{useState} from "react";
import axios from "axios";

const WebsiteRecon=()=>{

const [domain,setDomain]=useState("");
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);
const [progress,setProgress]=useState(0);

const scan=async()=>{

if(!domain) return;

setLoading(true);
setData(null);
setProgress(0);

let percent=0;

const timer=setInterval(()=>{

percent+=5;

if(percent<=95){
setProgress(percent);
}

},150);

try{

const res=await axios.post(
"http://localhost:5000/recon",
{domain}
);

clearInterval(timer);

setProgress(100);

setTimeout(()=>{

setData(res.data);
setLoading(false);

},800);

}catch(err){

console.log(err);

setLoading(false);

}

};

const riskColor=(level)=>{

if(level==="HIGH") return "text-red-500";

if(level==="MEDIUM") return "text-yellow-400";

return "text-green-400";

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-red-500 max-h-[700px] overflow-auto">

<h2 className="text-red-400 text-xl mb-4">
Website Recon Tool
</h2>

<input

placeholder="Enter domain (example.com)"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={domain}

onChange={(e)=>setDomain(e.target.value)}

/>

<button

onClick={scan}

className="bg-red-600 px-6 py-2 rounded hover:bg-red-500"

>

Start Recon

</button>


{/* Loading */}

{loading &&(

<div className="mt-6">

<div className="text-yellow-400 mb-2">

{progress < 20 && "Initializing scan..."}

{progress >=20 && progress <40 && "Collecting DNS records..."}

{progress >=40 && progress <60 && "Scanning ports..."}

{progress >=60 && progress <80 && "Detecting technologies..."}

{progress >=80 && progress <100 && "Calculating risk..."}

{progress ===100 && "Scan complete"}

</div>


<div className="bg-gray-800 rounded h-4">

<div

className="bg-yellow-500 h-4 rounded transition-all duration-500"

style={{width:progress+"%"}}

/>

</div>

<div className="mt-2 text-gray-400">

Progress: {progress}%

</div>

</div>

)}


{/* Results */}

{data &&(

<div className="mt-6 bg-black p-4 rounded text-green-400 font-mono text-sm">

<div className="mb-2">

Target: {data.domain}

</div>

<div>

IP: {data.ip || "N/A"}

</div>


{/* Subdomains */}

<div className="mt-4">

<div className="text-red-400">
Subdomains
</div>

{data.subdomains?.length ?

data.subdomains.map((s,i)=>(

<div key={i}>
{s}
</div>

))

:

<div>No subdomains found</div>

}

</div>


{/* Ports */}

<div className="mt-4">

<div className="text-red-400">
Open Ports
</div>

{data.ports?.length ?

data.ports.map((p,i)=>(

<div key={i}>
Port {p}
</div>

))

:

<div>No open ports</div>

}

</div>


{/* WHOIS */}

<div className="mt-4">

<div className="text-red-400">
WHOIS
</div>

<div>
Registrar: {data.whois?.registrar}
</div>

<div>
Country: {data.whois?.country}
</div>

<div>
Created: {data.whois?.created}
</div>

</div>


{/* DNS */}

<div className="mt-4">

<div className="text-red-400">
DNS MX
</div>

{data.dns?.mx?.map((m,i)=>(

<div key={i}>
{m}
</div>

))}

</div>


<div className="mt-4">

<div className="text-red-400">
DNS TXT
</div>

{data.dns?.txt?.map((t,i)=>(

<div key={i}>
{t}
</div>

))}

</div>


{/* Tech */}

<div className="mt-4">

<div className="text-red-400">
Technologies
</div>

{data.tech?.map((t,i)=>(

<div key={i}>
{t}
</div>

))}

</div>


{/* Security */}

<div className="mt-4">

<div className="text-red-400">
Security Headers Found
</div>

{data.security?.found?.map((h,i)=>(

<div key={i} className="text-green-500">

{h}

</div>

))}

</div>


<div className="mt-4">

<div className="text-red-400">
Missing Security Headers
</div>

{data.security?.missing?.map((h,i)=>(

<div key={i} className="text-red-500">

{h}

</div>

))}

</div>


{/* Risk */}

<div className="mt-4">

<div className="text-red-400">
Risk Assessment
</div>

<div className={riskColor(data.risk?.level)}>

Level: {data.risk?.level}

</div>

<div>

Score: {data.risk?.score}

</div>

</div>


{/* Vulnerabilities */}

<div className="mt-4">

<div className="text-red-400">
Possible Vulnerabilities
</div>

{data.vulnerabilities?.map((v,i)=>(

<div key={i} className="text-yellow-400">

{v}

</div>

))}

</div>

</div>

)}

</div>

);

};

export default WebsiteRecon;