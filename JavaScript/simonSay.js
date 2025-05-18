let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game is started!");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){ //white
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){ //green
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;//lvl increase
    h2.innerText= `level ${level}`;//to change level on screen

    //random btn choose then flash
    let randIdx = Math.floor(Math.random()*3);//random index generate
    let randColor = btns[randIdx];//random color choose from array by index
    let randBtn = document.querySelector(`.${randColor}`);//choose random color class by color
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    //to store on game array, value of random color generate
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}


//to check user sequence to game seq
function checkAns(idx){
    //console.log(`current level : `,level);//current level print not checking the answer
    // let indx = level-1; because it is fixed index

    if(userSeq[idx]==gameSeq[idx]){
        // console.log("same value");
        if (userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();//when game again start is new start
    }
    let b = document.querySelector("b");
    
    b.innerText=level;
}

function btnPress(){
    // console.log(this);//this is clicked btn
    let btn = this;
    userFlash(btn);
    
    //to add color on array, of user enter
    userColor = btn.getAttribute("id");//is se button ka color nikal lenge jo user ne click kia 
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}


