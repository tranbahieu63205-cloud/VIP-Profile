/* =====================================
   VIP PROFILE
   script.js - Part 1
===================================== */

// =====================
// Loader
// =====================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);

});


// =====================
// Music Player
// =====================

const music = document.getElementById("music");
const playButton = document.getElementById("playButton");

let playing = false;

playButton.onclick = () => {

    if (!playing) {

        music.play();

        playButton.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        playing = true;

    } else {

        music.pause();

        playButton.innerHTML =
        '<i class="fa-solid fa-play"></i>';

        playing = false;

    }

};


// =====================
// Popup Bank
// =====================

const bankPopup =
document.getElementById("bankPopup");

const bankButton =
document.getElementById("bankButton");

const closePopup =
document.getElementById("closePopup");

bankButton.onclick = () => {

    bankPopup.style.display = "flex";

}

closePopup.onclick = () => {

    bankPopup.style.display = "none";

}

bankPopup.onclick = (e) => {

    if (e.target === bankPopup) {

        bankPopup.style.display = "none";

    }

};


// =====================
// Cursor Glow
// =====================

const cursor =
document.getElementById("cursorGlow");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// =====================
// Heart Effect
// =====================

const heartContainer =
document.getElementById("heartContainer");

document.addEventListener("click", e => {

    const heart =
    document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🩷";

    heart.style.left =
    e.clientX + "px";

    heart.style.top =
    e.clientY + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },1800);

});
/* =====================================
   VIP PROFILE
   script.js - Part 2
===================================== */

/* ==========================
      Ripple Effect
========================== */

document.querySelectorAll(".social-btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.className="ripple";

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.clientX-rect.left-size/2+"px";

ripple.style.top=
e.clientY-rect.top-size/2+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================
        Particle Background
========================== */

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{

constructor(){

this.reset();

}

reset(){

this.x=Math.random()*canvas.width;

this.y=Math.random()*canvas.height;

this.r=Math.random()*2+1;

this.vx=(Math.random()-.5)*0.4;

this.vy=(Math.random()-.5)*0.4;

this.alpha=Math.random();

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.r,0,Math.PI*2);

ctx.fillStyle=`rgba(255,255,255,${this.alpha})`;

ctx.fill();

}

update(){

this.x+=this.vx;

this.y+=this.vy;

if(this.x<0||this.x>canvas.width||
this.y<0||this.y>canvas.height){

this.reset();

}

this.draw();

}

}

for(let i=0;i<120;i++){

particles.push(new Particle());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>p.update());

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});


/* ==========================
     Avatar Glow Pulse
========================== */

const ring=document.querySelector(".avatar-ring");

setInterval(()=>{

ring.animate([

{

boxShadow:"0 0 20px cyan"

},

{

boxShadow:"0 0 60px #00ffff"

},

{

boxShadow:"0 0 20px cyan"

}

],{

duration:1800

});

},1800);


/* ==========================
     Button Hover Sound
========================== */

const hoverSound=new Audio(
"assets/hover.mp3"
);

document.querySelectorAll(".social-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

hoverSound.volume=.2;

hoverSound.currentTime=0;

hoverSound.play().catch(()=>{});

});

});
/* =====================================
   VIP PROFILE
   script.js - Part 3
===================================== */

/* Progress Music */

music.addEventListener("ended",()=>{

playing=false;

playButton.innerHTML=
'<i class="fa-solid fa-play"></i>';

});


/* Fade In Card */

const card=document.querySelector(".glass");

card.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});


/* Floating Animation */

let t=0;

function floating(){

t+=0.02;

card.style.transform=

`translateY(${Math.sin(t)*6}px)`;

requestAnimationFrame(floating);

}

floating();


/* Disable Right Click */

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});


/* Disable Image Drag */

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});


/* Keyboard Shortcut */

document.addEventListener("keydown",e=>{

if(e.code==="Space"){

e.preventDefault();

playButton.click();

}

});


/* Footer Year */

const footer=document.querySelector(".footer");

const year=new Date().getFullYear();

footer.innerHTML=

"© "+year+" Tran Ba Hieu";


/* Console */

console.log(

"%c VIP PROFILE READY ",

"background:#00ffff;color:#000;padding:8px;font-size:18px;font-weight:bold;border-radius:8px;"

);