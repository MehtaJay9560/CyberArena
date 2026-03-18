import React,{useState} from "react";
import axios from "axios";

const OSINTRecon=()=>{

const [username,setUsername]=useState("");
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);

const scan=async()=>{

if(!username) return;

setLoading(true);
setData(null);

try{

const res=await axios.post(
"https://cyberarena-9ddl.onrender.com/osint",
{username}
);

setTimeout(()=>{

setData(res.data);
setLoading(false);

},800);

}catch{

setLoading(false);

}

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-blue-500">

<h2 className="text-blue-400 text-xl mb-4">

OSINT Username Finder

</h2>

<input

placeholder="Enter username"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>

<button

onClick={scan}

className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-500"

>

Scan Username

</button>


{/* Loading */}

{loading &&(

<div className="mt-4 text-yellow-400">

Searching public profiles...

</div>

)}


{/* Results */}

{data &&(

<div className="mt-6 bg-black p-4 rounded text-green-400 font-mono">

<div>

Username: {data.username}

</div>


<div className="mt-4 text-blue-400">

Found Profiles

</div>

{data.profiles?.map((p,i)=>(

<div key={i}>

<a

href={p}

target="_blank"

rel="noreferrer"

className="text-green-400 hover:text-green-200"

>

{p}

</a>

</div>

))}

</div>

)}

</div>

);

};

export default OSINTRecon;