import React,{useState} from "react";
import axios from "axios";

const EmailOSINT=({setResult})=>{

const [email,setEmail]=useState("");
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);

const scan=async()=>{

if(!email) return;

setLoading(true);
setData(null);

try{

const res=await axios.post(
"https://cyberarena-9ddl.onrender.com/email-osint",
{email}
);

setData(res.data);

setResult({
value: email,
domain: res.data.domain,
risk: res.data.breachRisk
});

setLoading(false);

}catch{

setLoading(false);

}

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-purple-500">

<h2 className="text-purple-400 text-xl mb-4">

Email OSINT Tool

</h2>

<input

placeholder="Enter email"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<button

onClick={scan}

className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-500"

>

Scan Email

</button>


{loading &&(

<div className="mt-4 text-yellow-400">
Scanning email intelligence...
</div>

)}


{data &&(

<div className="mt-6 bg-black p-4 rounded text-green-400 font-mono">

<div>
Username: {data.username}
</div>

<div>
Domain: {data.domain}
</div>

<div className="mt-3">

MX Records:

{data.mx?.map((m,i)=>(

<div key={i}>
{m}
</div>

))}

</div>

<div className="mt-3">

Breach Risk:

<div className="text-yellow-400">

{data.breachRisk}

</div>

</div>

<div className="mt-3">

Gravatar:

<a
href={data.gravatar}
target="_blank"
rel="noreferrer"
className="text-blue-400"
>

Open Profile

</a>

</div>

</div>

)}

</div>

);

};

export default EmailOSINT;