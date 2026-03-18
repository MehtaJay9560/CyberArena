import React,{useState} from "react";
import axios from "axios";

const PhoneLookup=({setResult})=>{

const [phone,setPhone]=useState("");
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);

const scan=async()=>{

if(!phone) return;

setLoading(true);

try{

const res=await axios.post(
"https://cyberarena-9ddl.onrender.com/phone",
{phone}
);

setData(res.data);

setResult({
valid: res.data.valid ? "Valid" : "Invalid",
country: res.data.country || "Unknown"
});

}catch{

setData({
error:"Lookup failed"
});

}

setLoading(false);

};

return(

<div className="bg-gray-900 p-6 rounded-xl border border-blue-500">

<h2 className="text-blue-400 text-xl mb-4">
Phone Lookup
</h2>

<input

placeholder="+91XXXXXXXXXX"

className="bg-gray-950 p-3 rounded w-full mb-4"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

/>

<button

onClick={scan}

className="bg-blue-600 px-6 py-2 rounded"

>

Lookup

</button>


{loading &&(

<div className="mt-4 text-yellow-400">
Scanning number...
</div>

)}


{data &&(

<div className="mt-4 text-green-400 font-mono">

<div>
Number: {phone}
</div>

<div>
Country: {data.country}
</div>

<div>
Valid: {data.valid}
</div>

<div>
Type: {data.type}
</div>

</div>

)}

</div>

);

};

export default PhoneLookup;