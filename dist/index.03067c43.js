const e=document.querySelector(".slider-container"),t=Array.from(document.querySelectorAll(".slide"));let n=!1,a=0,i=0,o=0,s=0,l=0;function r(){n=!1,cancelAnimationFrame(s);const e=a-i;e<100&&l<t.length-1&&(l+=1),e>100&&l>0&&(l-=1),a=l*-window.innerWidth,i=a,d()}function c(e){if(n){const t=u(e);a=i+t-o}}function d(){e.style.transform=`translateX(${a}px`}function u(e){return e.touches[0].clientX}function p(){d(),n&&requestAnimationFrame(p)}t.forEach(((e,t)=>{e.addEventListener("touchstart",function(e){return function(t){n=!0,o=u(t),l=e,s=requestAnimationFrame(p)}}(t),{passive:!0}),e.addEventListener("touchend",r),e.addEventListener("touchmove",c,{passive:!0}),e.addEventListener("dragging",(e=>{e.preventDefault(),e.stopPropagation()}))}));const h=document.getElementById("canvas"),g=h.getContext("2d");h.width="800",h.height="600";const f={positionX:h.width/4-100,positionY:h.height/4-100,translate:0,translateX:1},m={positionX:450,positionY:50,translate:0,translateY:1},y={positionX:600,positionY:450,angle:0,angleSpeed:.01*Math.PI,radius:120},v={positionX:200,positionY:450,angle:0,angleSpeed:.01*-Math.PI,radius:150,dAngle:2*Math.PI/3};!function(e){const{clear:t,update:n,render:a}=e;let i=0;requestAnimationFrame((function e(o){requestAnimationFrame(e);const s=o-i;i=o;const l={time:o,prevTime:i,diff:s};n(l),t(),a(l)}))}({clear(){g.clearRect(0,0,h.width,h.height)},update(){v.angle+=v.angleSpeed,y.angle+=y.angleSpeed,f.translate+=f.translateX,m.translate+=m.translateY},render(){g.shadowColor="#000000",g.shadowOffsetX=1,g.shadowOffsetY=1,g.shadowBlur=5,g.fillStyle="#FFFF00",g.fillRect(f.positionX+f.translate,f.positionY,200,200),50===f.translate&&(f.translateX-=1),0===f.translate&&(f.translateX+=1),g.fillStyle="#FF0000",g.fillRect(m.positionX,m.positionY+m.translate,300,200),30===m.translate&&(m.translateY-=1),-30===m.translate&&(m.translateY+=1),g.beginPath(),g.moveTo(v.positionX+v.radius*Math.cos(v.angle),v.positionY+v.radius*Math.sin(v.angle)),g.lineTo(v.positionX+v.radius*Math.cos(v.angle+v.dAngle),v.positionY+v.radius*Math.sin(v.angle+v.dAngle)),g.lineTo(v.positionX+v.radius*Math.cos(v.angle+2*v.dAngle),v.positionY+v.radius*Math.sin(v.angle+2*v.dAngle)),g.closePath(),g.fillStyle="#0000FF",g.fill(),g.beginPath(),g.arc(550+30*Math.cos(y.angle),440+30*Math.sin(y.angle),y.radius,0,2*Math.PI),g.fillStyle="#008000",g.fill()}});const S=document.querySelector("video");S.addEventListener("click",(()=>{S.paused?S.play():S.pause()})),S.addEventListener("ended",(()=>S.currentTime=0));document.getElementById("btn").addEventListener("click",(async function(){if(X)return;try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();X=!0;const n=document.getElementById("list"),a=t.map((e=>`<li>${e.name} (${e.email}) ${e.phone}</li>`)).join(" ");n.insertAdjacentHTML("afterbegin",a)}catch(e){alert(e)}}));let X=!1;document.getElementById("button").addEventListener("click",(function(){if(w)return;const e=new WebSocket("ws://localhost:3000");e.onopen=()=>{alert("Соединение установлено")},e.onmessage=e=>{const t=JSON.parse(e.data),n=document.querySelector(".user-list"),a=t.map((e=>`<li class='user-item'>${e.id}) ${e.name} (${e.website})</li>`)).join(" ");n.insertAdjacentHTML("beforeend",a)},w=!0,e.onclose=()=>{alert("Соединение прервано")},e.onerror=e=>{alert(e.message)}}));let w=!1;const A=document.querySelector(".box-1"),M=document.querySelector(".box-inner-1");A.style.position="relative",M.style.position="absolute",M.style.left=A.clientWidth/2-M.offsetWidth/2+"px",M.style.top=A.clientHeight/2-M.offsetHeight/2+"px";
//# sourceMappingURL=index.03067c43.js.map
