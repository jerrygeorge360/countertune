debugger
var d=document;
var display=document.getElementById('display');
var diplay1=document.getElementById('display1')
var smalldisplay=document.getElementById('small-display');
var smalldisplay1=document.getElementById('small-display1');
var score=Number(0);
var score1=Number(0);
var result=Number(0);
var result1=Number(0);
var smallscore=Number(0);
var smallscore1=Number(0);
var goalkick=document.getElementById('goalkick'),pass=document.getElementById('pass'),throwing=document.getElementById('throw'),corner=document.getElementById('corner'),header=document.getElementById('header'),freekick=document.getElementById('freekick'),penalty=document.getElementById('penalty'),goal=document.getElementById('goal');

var goalkick=document.getElementById('goalkick1'),pass=document.getElementById('pass1'),throwing=document.getElementById('throw1'),corner=document.getElementById('corner1'),header=document.getElementById('header1'),freekick=document.getElementById('freekick1'),penalty=document.getElementById('penalty1'),goal=document.getElementById('goal1');


d.addEventListener("click",function(){
        result=Math.floor(Number(display.innerText)/100);
        smallscore=result;
        smalldisplay.innerText=smallscore;

        result1=Math.floor(Number(display1.innerText)/100);
        smallscore1=result1;
        smalldisplay1.innerText=smallscore1;
    }
);


function galkick(){
    score+=1;
    display.innerText=score;
};
function pas(){
    score+=3;
    display.innerText=score;
};
function thro(){
    score+=5;
    display.innerText=score;
};
function corn(){
    score+=15;
    display.innerText=score;
};
function hed(){
    score+=40;
    display.innerText=score;
};
function free(){
    score+=65;
    display.innerText=score;
};
function penal(){
    score+=70;
    display.innerText=score;
};
function gal(){
    score+=100;
    display.innerText=score;
}
function reset(){
    score=0
    display.innerText=score;
    smallscore.innerText=score;
}






function galkick1(){
    score1+=1;
    display1.innerText=score1;
};
function pas1(){
    score1+=3;
    display1.innerText=score1;
};
function thro1(){
    score1+=5;
    display1.innerText=score1;
};
function corn1(){
    score1+=15;
    display1.innerText=score1;
};
function hed1(){
    score1+=40;
    display1.innerText=score1;
};
function free1(){
    score1+=65;
    display1.innerText=score1;
};
function penal1(){
    score1+=70;
    display1.innerText=score1;
};
function gal1(){
    score1+=100;
    display1.innerText=score1;
}
function reset1(){
    score1=0
    display1.innerText=score1;
    smallscore1.innerText=score1;
}
