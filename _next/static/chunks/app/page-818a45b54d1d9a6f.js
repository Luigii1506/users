(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7204:(e,t,s)=>{Promise.resolve().then(s.bind(s,9006))},9006:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var l=s(7437);s(6648);var c=s(2265);let r=e=>{let{interval:t,isPaused:s,onTimerEnds:r,currentExercise:a,setCurrentExercise:i,exercises:n,setIsStarted:x,setIsPaused:d}=e,[o,u]=(0,c.useState)({minutes:"00",seconds:"00"}),[m,f]=(0,c.useState)(1e4),[h,p]=(0,c.useState)(!1),b=(0,c.useCallback)(()=>{a<n.length-1?i(a+1):d(!0)},[a,n.length,i]);return(0,c.useEffect)(()=>{let e;return!s&&m>0&&(e=setInterval(()=>{f(t=>{if(t<=1e3)return clearInterval(e),u({minutes:"00",seconds:"00"}),p(!0),1e4;{p(!1);let e=t-1e3;return u({minutes:String(Math.floor(e%36e5/6e4)).padStart(2,"0"),seconds:String(Math.floor(e%6e4/1e3)).padStart(2,"0")}),e}})},1e3)),()=>clearInterval(e)},[s,m,b]),(0,c.useEffect)(()=>{h&&b()},[m,h]),(0,l.jsx)("div",{className:"bg-[#191A24]",children:(0,l.jsx)("div",{className:"flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16",children:(0,l.jsxs)("div",{className:"flex justify-center gap-3 sm:gap-8",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-5 relative",children:[(0,l.jsx)("div",{className:"h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg",children:(0,l.jsx)("span",{className:"lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] w-full text-center",children:o.minutes})}),(0,l.jsx)("span",{className:"text-[#8486A9] text-xs sm:text-2xl text-center capitalize",children:1==o.minutes?"Minute":"Minutes"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-5 relative",children:[(0,l.jsx)("div",{className:"h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg",children:(0,l.jsx)("span",{className:"lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc] w-full text-center",children:o.seconds})}),(0,l.jsx)("span",{className:"text-[#8486A9] text-xs sm:text-2xl text-center capitalize",children:1==o.seconds?"Second":"Seconds"})]})]})})})};function a(){let[e,t]=(0,c.useState)(!1),[s,a]=(0,c.useState)(!1),[i,n]=(0,c.useState)(2),[x,d]=(0,c.useState)(0),[o,u]=(0,c.useState)([{title:"Ejercicio 1",description:"El usuario comenta: Voy a cambiar estos $150 d\xf3lares a pesos.",received:150,currency:"USD"},{title:"Ejercicio 2",description:"El usuario indica: Quiero recibir $1,960 pesos y tengo d\xf3lares para el cambio.",received:1960,currency:"MXN"},{title:"Ejercicio 3",description:"El usuario dice: Voy a llevarme $200 d\xf3lares; traigo pesos para cubrirlo.",received:3940,currency:"MXN"}]),m=()=>{x<o.length-1?d(x+1):(t(!1),d(0))};return(0,l.jsx)("div",{className:"flex justify-center items-center h-screen w-screen",children:e?(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"bg-white p-5 border rounded-md shadow-md mb-[30px] max-w-[900px] w-full",children:[(0,l.jsx)("div",{className:"text-black font-bold text-[50px] text-center mb-2 leading-[55px]",children:o[x].title}),(0,l.jsxs)("div",{className:"text-black  text-[45px] text-center mb-2",children:["Descripci\xf3n: ",o[x].description]}),(0,l.jsxs)("div",{className:"text-black  text-[50px] text-center",children:["Monto:"," ",(0,l.jsxs)("span",{className:"font-bold",children:[o[x].received.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})," ",o[x].currency]})]})]}),(0,l.jsx)("div",{className:"mb-5",children:(0,l.jsx)(r,{interval:i,isPaused:s,onTimerEnds:()=>m(),setCurrentExercise:d,currentExercise:x,exercises:o,setIsStarted:t,setIsPaused:a})}),(0,l.jsx)("button",{className:"m-auto w-[200px] text-2xl rounded-lg text-white px-4 py-3 font-bold ".concat(s?"bg-green-400":"bg-red-400 "),onClick:()=>{s?a(!1):a(!0)},children:s?"Reanudar":"Pausar"})]}):(0,l.jsxs)("div",{className:"flex justify-center items-center flex-col text-center",children:[(0,l.jsx)("p",{className:"text-[60px] font-bold mb-5",children:"Simulador de clientes"}),(0,l.jsx)("button",{className:"bg-green-400 text-2xl rounded-lg text-white px-4 py-3 font-bold",onClick:()=>{t(!0)},children:"Empezar"})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[648,130,215,744],()=>t(7204)),_N_E=e.O()}]);