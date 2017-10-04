let char = document.querySelector("img.branch");
let button =
document.querySelectorAll("button");

/*/////MOVE BUTTON//////////*/

let moveButton = document.querySelector("#move");

moveButton.addEventListener('click', makemove);

function makemove(){
    char.classList.toggle("moveCSS");
    button[0].classList.toggle("red");
}

/*/////MOVE TO 30% BUTTON//////////*/

let moveTo30Button = document.querySelector("#moveto30");

moveTo30Button.addEventListener('click', makemoveto30);

function makemoveto30(){
char.classList.toggle("moveTo30CSS");
    button[1].classList.toggle("red");
}

/*/////MOVE FROM 30% BUTTON//////////*/

let moveFrom30Button = document.querySelector("#movefrom30");

moveFrom30Button.addEventListener('click', makemovefrom30);

function makemovefrom30(){
char.classList.toggle("moveFrom30CSS");
     button[2].classList.toggle("red");
}

/*/////ONE JUMP BUTTON//////////*/

let oneJumpButton = document.querySelector("#onejump");

oneJumpButton.addEventListener('click', oneJump);

function oneJump(){
char.classList.toggle("oneJumpCSS");
    button[3].classList.toggle("red");
}

/*/////JUMPING BUTTON//////////*/

let jumpingButton = document.querySelector("#jumping");

jumpingButton.addEventListener('click', jumping);

function jumping(){
char.classList.toggle("jumpingCSS");
    button[4].classList.toggle("red");
}

/*/////FADE BUTTON//////////*/

let fadeButton = document.querySelector("#fade");

fadeButton.addEventListener('click', fade);

function fade(){
char.classList.toggle("fadeCSS");
    button[5].classList.toggle("red");
}

/*/////GLOW BUTTON//////////*/

let glowButton = document.querySelector("#glow");

glowButton.addEventListener('click', glow);

function glow(){
char.classList.toggle("glowCSS");
    button[6].classList.toggle("red");
}

/*////SHAKE BUTTON//////////*/

let shakeButton = document.querySelector("#shake");

shakeButton.addEventListener('click', shake);

function shake(){
char.classList.toggle("shakeCSS");
    button[7].classList.toggle("red");
}

/*////MIRROR BUTTON//////////*/

let mirrorButton = document.querySelector("#mirror");

mirrorButton.addEventListener('click', mirror);

function mirror(){
char.classList.toggle("mirrorCSS");
    button[8].classList.toggle("red");
}

/*////MAGIC BUTTON//////////*/

let magicButton = document.querySelector("#magic");

magicButton.addEventListener('click', magic);

function magic(){
char.classList.toggle("magicCSS");
    button[9].classList.toggle("red");
}
