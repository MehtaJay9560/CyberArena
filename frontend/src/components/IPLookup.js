import React,{useState} from "react";
import axios from "axios";

const IPLookup=({setResult})=>{

const [ip,setIP]=useState("");
const [data,setData]=useState(null);

const scan=async()=>{

const res=await axios.post(
"http://localhost:5000/ip",
{ip}
);

setData(res.data);

setResult({
risk:"Scanned",
country:res.data.country,
isp:res.data.isp
});

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-yellow-500">

<h2 className="text-yellow-400 text-xl mb-4">
IP Lookup
</h2>

<input

placeholder="Enter IP"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={ip}

onChange={(e)=>setIP(e.target.value)}

/>

<button

onClick={scan}

className="bg-yellow-600 px-6 py-2 rounded"

>

Lookup

</button>


{data &&(

<div className="mt-4 text-green-400 font-mono">

<div>IP: {data.ip}</div>

<div>Country: {data.country}</div>

<div>ISP: {data.isp}</div>

<div>Risk: {data.risk}</div>

</div>

)}

</div>

);

};

export default IPLookup;