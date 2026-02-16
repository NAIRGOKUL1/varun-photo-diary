let page=0;

const left=document.getElementById("left");
const right=document.getElementById("right");

function draw(){

left.innerHTML="";
right.innerHTML="";

makePage(left,page*2+1);
makePage(right,page*2+2);

document.getElementById("spread").style.transform="scale(.98)";
setTimeout(()=>document.getElementById("spread").style.transform="",200);
}

function makePage(side,num){

let div=document.createElement("div");
div.innerHTML=`
<div class="photo">
<img src="photos/${num}.jpg">
</div>
<textarea placeholder="write memory..."></textarea>
`;

let text=div.querySelector("textarea");
text.value=localStorage.getItem("cap"+num)||"";
text.oninput=()=>localStorage.setItem("cap"+num,text.value);

side.appendChild(div);
}

document.getElementById("next").onclick=()=>{
page++;
draw();
};

document.getElementById("prev").onclick=()=>{
if(page>0)page--;
draw();
};

draw();

// music
const music=document.getElementById("bgm");
document.getElementById("musicBtn").onclick=()=>{
music.paused?music.play():music.pause();
};


