const riddles=["TAJNE HASŁO", "MASŁO", "NALEŚNIKI", "KALORYFER","GARNUSZEK","CIUSZEK","ZIEMNIAK","AUTOSTRADA","GRZEGRZÓŁKA",
                "JASTRZĄB", "KROWA", "LANOS", "NAJDLUŻSZE ALE ZA TO PEWNIE NAJŁATWIEJSZE HASŁO", "GABRIELA", "KOCHAM CIĘ","GŁUPIA GRA",
                "EMANCYPACJA", "TOTALITARYZM", "PATRIOTYZM", "ŻÓŁW", "WIELORYB", "KRAJALNICA", "DRUKARKA", "MASZYNA DO MIELENIA MIĘSA",
                "PLECAK DO SZKOŁY", "PLECAK DO ZMYŁKI", "NIE MA FAL", "CIEKAWOŚĆ", "INFORMATYKA STOSOWANA", "MATEMATYKA STOSOWANA", "INŻYNIERIA STEROWANIA",
                "METODY NUMERYCZNE"];
var chosen=Math.floor(Math.random()*(riddles.length));
const riddle = riddles[chosen];
var display=[];
var blocks=document.getElementsByClassName("block");
var counter=0;
var clickedArray=[];
var picturesArray=document.getElementsByClassName("picture");
picturesArray[0].classList.add("show-picture");

for(i=0; i<riddle.length;i++)
{
  if(riddle[i]==" "){
    display.push(" ");
  }
  else{
    display.push("-");
  }
}

function displ(){
  document.getElementById("riddle").innerHTML=display.join("");
}

function listen(e){

  const clicked=e.target.textContent;
  const toClassAdd=document.getElementById(clicked);

  var i;
  var was=0;
  var win=0;
  var wasClicked=false;
  var stop=false;

  if(counter<9){
    for(i=0; i<riddle.length;i++){
      if(riddle.charAt(i)==clicked){
        display[i]=clicked;
        toClassAdd.classList.add("good");
        was++;
      }
    }
  }

  for(i=0; i<riddle.length;i++){
    if(riddle[i]===display[i]){
      win++;
    }
  }

  if(win==riddle.length){
    document.getElementById("win").style.display="block";
    stop=true;
  }

  for(i=0;i<clickedArray.length;i++){
      if(clickedArray[i]==clicked){
        wasClicked=true;
      }
  }

  if(!wasClicked){
    clickedArray.push(clicked);
  }

  if(was==0 && counter<9 && !wasClicked && !stop){
    counter++;
    blocks[9-counter].classList.add("dead-block");
    toClassAdd.classList.add("wrong");
    picturesArray[counter-1].classList.add("hide-picture");
    picturesArray[counter].classList.add("show-picture");
  }

  if(counter>=9){
    document.getElementById("lose").style.display="block";
    document.getElementById("riddle").innerHTML=riddles[chosen];
  }else{
    document.getElementById("riddle").innerHTML=display.join("");
  }
}

window.onload=displ;

const letters = document.querySelectorAll(".letter");
letters.forEach(letter => letter.addEventListener("click",listen));
