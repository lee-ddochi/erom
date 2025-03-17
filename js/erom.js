let slidbox=document.querySelector(".slidbox");
let slidImg=document.querySelectorAll(".slidImg");
let imgs=["qqq.png","www.png","eee.png","rrr.png","ttt.png","qqq.png"];
let count=0;
let bar = document.querySelector(".bar");
let modalbox = document.querySelector(".modalbox");
let clo = document.querySelector(".clo");

let leftB = document.getElementById("lefta");
let rightB = document.getElementById("righta");
let textvalue = document.getElementById("cur");
let movbar = document.getElementById("movbar");
let conum=1;

// 모달 시작
bar.addEventListener("click", function(){
    modalbox.classList.add("on");
});
clo.addEventListener("click", function(){
    modalbox.classList.remove("on");
});
//모달 끝
//슬라이드
slidImg.forEach((img,index)=>{
    img.style.backgroundImage=`url("./img/${imgs[index]}")`;
});


function playslid(tanfTransi){
    slidbox.style.transition="0.7s";
    slidbox.style.left=`-${count*100}vw`;
    if(count>=slidImg.length){
        count=0;
        setTimeout(()=>{
            slidbox.style.transition="none";
            slidbox.style.left=`-${count*100}vw`;
        },5);
    }
    if(conum==5){
        textvalue.innerText= "0"+1+"/05"; conum=0;
    }else{
        conum++;
        textvalue.innerText= "0"+conum+"/05"; 
    }
    movbar.style.width=`${conum*15}%`;
}

function nextslide(){
    count++;
    playslid(true);
    
    if(count >= inboxs.length){
        setTimeout(()=>{
            count =0;
            playslid(false);
        },5);
    } else{
        playslid(true);
    }
}

function leftMov(){
    if(count==0){
        count = 5; conum=5;
        playslid(false);
    }
    if(conum<=0){
        conum=6;
    }
    count--; conum-=2;
    playslid(true)
}

let stopT = setInterval(nextslide, 3000);

function stopAuto()
{
    clearInterval(stopT);
}

rightB.addEventListener("click",function(){
    stopAuto();
    nextslide();
})

leftB.addEventListener("click", function(){
    stopAuto();
    leftMov();
})

//슬라이드 끝

//스크롤
window.addEventListener("scroll", function(){
    let titbox = document.querySelector("#titbox");
    let scrY = window.scrollY;
    let wh = window.innerHeight;
    let textTop = titbox.offsetTop;
    let icl1 = document.querySelector("#icl1");
    let icl2 = document.querySelector("#icl2");
    let icm0 = document.querySelector("#icm0");
    let icr2 = document.querySelector("#icr2");
    let icr1 = document.querySelector("#icr1");
    let sec3txt1 = document.querySelector(".sec3txt1");
    let sec3img1 = document.querySelector(".sec3img1");
    let sec3txt2 = document.querySelector(".sec3txt2");
    let sec3img2 = document.querySelector(".sec3img2");

    if( scrY + wh >= textTop + 1000){
        titbox.classList.add("on");
    }else {
        titbox.classList.remove("on");
    }
    if( scrY + wh >= textTop + 900){
        titbox.classList.add("on");
    }else {
        titbox.classList.remove("on");
    }
    if( scrY + wh >= textTop + 1400){
        icl1.classList.add("on");
        icl2.classList.add("on");
        icm0.classList.add("on");
        icr2.classList.add("on");
        icr1.classList.add("on");
    }else {
        icl1.classList.remove("on");
        icl2.classList.remove("on");
        icm0.classList.remove("on");
        icr2.classList.remove("on");
        icr1.classList.remove("on");
    }
    if( scrY + wh >= textTop + 1000){
        icl1.classList.add("on");
        icl2.classList.add("on");
        icm0.classList.add("on");
        icr2.classList.add("on");
        icr1.classList.add("on");
    }else {
        icl1.classList.remove("on");
        icl2.classList.remove("on");
        icm0.classList.remove("on");
        icr2.classList.remove("on");
        icr1.classList.remove("on");
    }

    if( scrY + wh >= textTop + 1800){
        sec3txt1.classList.add("on");
        sec3img1.classList.add("on");
        sec3txt2.classList.add("on");
        sec3img2.classList.add("on");
    }else {
        sec3txt1.classList.remove("on");
        sec3img1.classList.remove("on");
        sec3txt2.classList.remove("on");
        sec3img2.classList.remove("on");
    }
    if( scrY + wh >= textTop + 1400){
        sec3txt1.classList.add("on");
        sec3img1.classList.add("on");
        sec3txt2.classList.add("on");
        sec3img2.classList.add("on");
    }else {
        sec3txt1.classList.remove("on");
        sec3img1.classList.remove("on");
        sec3txt2.classList.remove("on");
        sec3img2.classList.remove("on");
    }
});