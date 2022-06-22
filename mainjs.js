// console.clear();
window.onload=screen;
const userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");
const userQuestion = '';
console.log(`${userName} asked,  ${userQuestion}`);
  
let randomNumber = Math.floor(Math.random() * 8);
 console.log(randomNumber);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall="It is certain";
    break;
  case 1:
    eightBall="It is decidedly so";
    break;
  case 2:
    eightBall="Reply hazy try again";
    break;
  case 3:
    eightBall="Cannot predict now";
    break;

  case 4:
    eightBall="Do not count on it";
    break;

  case 5:
    eightBall="My sources say no";
    break;

  case 6:
   eightBall="Outlook not so good";
    break;

  case 7:
    eightBall="The Signs point to yes";
    break;
    case 8:
      eightBall="You are kidding right";
      break;
  default:
}
const txt1 = document.getElementById('name');
const txt2 = document.getElementById("question");
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('reset');
const outp1 = document.getElementById('output1');

function myFun1() {
  outp1.innerHTML+= txt1.value+":" +" "+ `${eightBall}`;
}
outp1.addEventListener("click", myFun1);
console.log(outp1.innerHTM);

function preset() {
 outp1.innerHTML=outp1.remove();

}


console.log(preset+myFun1); 
  




  


           