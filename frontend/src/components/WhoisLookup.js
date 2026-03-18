import React,{useState} from "react";
import axios from "axios";

const WhoisLookup=({setResult})=>{

const [domain,setDomain]=useState("");
const [data,setData]=useState(null);

const scan=async()=>{

const res=await axios.post(
"http://localhost:5000/whois",
{domain}
);

setData(res.data);

setResult({
registrar:res.data.registrar || "Unknown",
country:res.data.country || "Unknown"
});

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-purple-500">

<h2 className="text-purple-400 text-xl mb-4">
Domain WHOIS
</h2>

<input

placeholder="example.com"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={domain}

onChange={(e)=>setDomain(e.target.value)}

/>

<button

onClick={scan}

className="bg-purple-600 px-6 py-2 rounded"

>

Lookup

</button>


{data &&(

<div className="mt-4 text-green-400 font-mono">

<div>Domain: {data.domain}</div>

<div>Registrar: {data.registrar}</div>

<div>Country: {data.country}</div>

<div>Created: {data.created}</div>

</div>

)}

</div>

);

};

export default WhoisLookup;