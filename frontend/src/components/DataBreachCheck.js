import React,{useState} from "react";
import axios from "axios";

const DataBreachCheck=({setResult})=>{

const [email,setEmail]=useState("");
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);

const scan=async()=>{

if(!email) return;

setLoading(true);

try{

const res=await axios.post(
"https://cyberarena-9ddl.onrender.com/breach",
{email}
);

setData(res.data);

setResult({
risk: res.data.breaches?.length ? "High" : "Safe",
count: res.data.breaches?.length || 0
});

}catch{

setData({
risk:"Scan failed"
});

}

setLoading(false);

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-red-500">

<h2 className="text-red-400 text-xl mb-4">
Data Breach Checker
</h2>

<input

placeholder="Enter email"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<button

onClick={scan}

className="bg-red-600 px-6 py-2 rounded"

>

Check

</button>


{loading &&(

<div className="mt-4 text-yellow-400">
Checking breaches...
</div>

)}


{data &&(

<div className="mt-4 text-green-400 font-mono">

<div>
Email: {email}
</div>

<div className="text-red-400">

Risk: {data.risk}

</div>

<div>
Breaches: {data.breaches}
</div>

</div>

)}

</div>

);

};

export default DataBreachCheck;