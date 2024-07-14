yourScor = 0;
compScor = 0;


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScor = document.querySelector("#user-scor");
let  compScorPara = document.querySelector("#com-scor");
console.log(compScorPara)

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log("box was clicked")
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const comChoice = genComScor();
  console.log(comChoice);
  if (userChoice === comChoice) {
    drowGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
      console.log(comChoice);
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissors" ? false : true;
      console.log(comChoice);
    } else {
      userWin = comChoice === "rock" ? false : true;
      console.log(comChoice);
    }
    showWinner(userWin,userChoice,comChoice)
  }
};

const genComScor = () => {
  const option = ["paper", "rock", "scisser"];
  const index = Math.floor(Math.random() * 3);
  return option[index];
};

const drowGame = () => {
  console.log("game was drow");
  msg.innerHTML = "Drow Game Play Again"
  msg.style.backgroundColor = "pink"
};

const showWinner = (userWin,userChoice,comChoice)=>{
if(userWin){
    yourScor++;
    userScor.innerHTML = yourScor;
    msg.innerHTML = `You win! your ${userChoice} beat ${comChoice}`
    msg.style.backgroundColor = "green"
}else{
    compScor++;
    compScorPara.innerHTML = compScor;
    console.log("you luser");
    msg.innerHTML = `you lose! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}
