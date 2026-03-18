import React from "react";

const OSINTSummary = ({ email, phone, breach, ip, domain }) => {

return (

<div className="grid grid-cols-1 md:grid-cols-5 gap-4">

{/* Email */}
<div className="bg-[#050505] border border-neon-green/30 p-4 rounded">
<p className="text-xs text-gray-500">EMAIL</p>

<p className="text-neon-green font-mono">
{email?.value || "No data"}
</p>

</div>

{/* Phone */}
<div className="bg-[#050505] border border-cyber-cyan/30 p-4 rounded">

<p className="text-xs text-gray-500">PHONE</p>

<p className="text-cyber-cyan font-mono">
{phone?.valid || "Unknown"}
</p>

</div>

{/* Breach */}
<div className="bg-[#050505] border border-glitch-red/30 p-4 rounded">

<p className="text-xs text-gray-500">
BREACH RISK
</p>

<p className="text-glitch-red font-mono">

{breach?.risk || "No scan"}

</p>

</div>

{/* IP */}

<div className="bg-[#050505] border border-hacker-yellow/30 p-4 rounded">

<p className="text-xs text-gray-500">
IP STATUS
</p>

<p className="text-hacker-yellow font-mono">

{ip?.risk || "No scan"}

</p>

</div>

{/* Domain */}

<div className="bg-[#050505] border border-neon-green/30 p-4 rounded">

<p className="text-xs text-gray-500">
DOMAIN
</p>

<p className="text-neon-green font-mono">

{domain?.registrar || "No data"}

</p>

</div>

</div>

);

};

export default OSINTSummary;