const link = {
wa:"https://llbzxr.matchfllame.com/?utm_source=da57dc555e50572d&ban=fb&j1=1&s1=246957&s2=2237944&s3=LANDINGJOS&s5=LANDINGJOS&click_id=LANDINGJOS",
tg:"https://llbzxr.matchfllame.com/?utm_source=da57dc555e50572d&ban=fb&j1=1&s1=246957&s2=2237944&s3=LANDINGJOS&s5=LANDINGJOS&click_id=LANDINGJOS",
ms:"https://llbzxr.matchfllame.com/?utm_source=da57dc555e50572d&ban=fb&j1=1&s1=246957&s2=2237944&s3=LANDINGJOS&s5=LANDINGJOS&click_id=LANDINGJOS"
};

function go(type){
window.location.href = link[type];
}

setInterval(()=>{
let num = Math.floor(Math.random()*400)+1000;
document.getElementById("online").innerText="● "+num+" online";
},4000);

let t = 120;
setInterval(()=>{
t--;
let m = Math.floor(t/60);
let s = t%60;
if(s<10) s="0"+s;
document.getElementById("timer").innerText="Only "+m+":"+s+" left";
},1000);

let text = ["Hi 😘","Where are you from?","I'm alone...","Click WhatsApp ❤️"];
let i=0;
setInterval(()=>{
if(i<text.length){
let d=document.createElement("div");
d.className="msg";
d.innerText=text[i];
document.getElementById("chatbox").appendChild(d);
document.getElementById("notif").play();
i++;
}
},2500);

setInterval(()=>{
let p=document.getElementById("popup");
p.style.display="block";
setTimeout(()=>p.style.display="none",2000);
},7000);
