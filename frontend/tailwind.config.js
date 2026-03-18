/** @type {import('tailwindcss').Config} */

module.exports = {

darkMode:["class"],

content:[

"./src/**/*.{js,jsx,ts,tsx}",

"./public/index.html"

],

theme:{

extend:{

colors:{
  
  border:'#1f2937',
  
  input:'#1f2937',
  
  ring:'#00f0ff',

'neon-green':'#00ff41',

'cyber-cyan':'#00f0ff',

'glitch-red':'#ff0055',

'hacker-yellow':'#ffff00',

'terminal-bg':'#050505',

'terminal-surface':'#0a0a0a'

},

boxShadow:{

'neon-green':'0 0 10px #00ff41,0 0 20px #00ff4150',

'neon-cyan':'0 0 10px #00f0ff,0 0 20px #00f0ff50',

'neon-red':'0 0 10px #ff0055,0 0 20px #ff005550'

},

animation:{

'glitch':'glitch .5s infinite',

'blink':'blink 1s infinite',

'scan':'scan 8s linear infinite'

},

keyframes:{

glitch:{
'0%':{transform:'translate(0)'},
'20%':{transform:'translate(-2px,2px)'},
'40%':{transform:'translate(-2px,-2px)'},
'60%':{transform:'translate(2px,2px)'},
'80%':{transform:'translate(2px,-2px)'},
'100%':{transform:'translate(0)'}
},

blink:{
'0%,100%':{opacity:'1'},
'50%':{opacity:'0'}
},

scan:{
'0%':{transform:'translateY(-100%)'},
'100%':{transform:'translateY(100%)'}
}

}

}

},

plugins:[require("tailwindcss-animate")]

};