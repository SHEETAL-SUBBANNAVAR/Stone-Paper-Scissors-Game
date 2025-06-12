let computerScore = 0;
let userScore = 0;
let body = document.querySelector("body");
let choices =document.querySelectorAll(".choice");
let message =document.querySelector("#msg");
let usersScore=document.querySelector("#user-score");
let computersScore=document.querySelector("#computer-score");

let modebtn = document.querySelector("#mode");
let currmode="light"


const playgame=(userchoice)=>{

    const compchoice= generatecomputerchoice();                                       // generate computer choice
     
    if(userchoice==compchoice){
      drawGame();
    }
    else {
      let userWin = true;
      if(userchoice==="rock"){
        userWin=compchoice==="paper"? false:true;
        
      }
      else if(userchoice==="paper"){
         userWin= compchoice==="scissors"?false:true;
          
      }

      else{
        userWin =compchoice ==="rock"? false:true;
      }
     showwinner(userWin,userchoice,compchoice);
    }
    

};


choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice= choice.getAttribute("id");
     playgame(userchoice);
   })
});


generatecomputerchoice=()=>{
    const options=["rock","paper","scissor"];  
    const randomindx= Math.floor(Math.random()*3);
     return options[randomindx];
};



drawGame=()=>{
  message.innerText="Game was Draw.Play again"
   message.style.backgroundColor ="gray" ;
};

const showwinner=(userWin,userchoice,compchoice)=>{
  if (userWin){
    userScore++;
   usersScore.innerText=userScore;
   message.innerText=` you win! ${ userchoice} beats ${compchoice}` 
   message.style.backgroundColor ="green" ;
}
else{
  computerScore++;
  computersScore.innerText=computerScore;
 message.innerText=`You lost, ${compchoice} beats ${userchoice}`
  message.style.backgroundColor ="red";
}

};




  button.addEventListener("click",()=>{
    if(currmode==="light"){
    body.classList.add("dark");
    body.classList.remove("light")
    currmode="dark";
    modebtn.innerText="Light";

  }
  else{
    body.classList.add("dark");
    body.classList.remove("light")
    currmode="light";
    modebtn.innerText="dark";
  }
  });


