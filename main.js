// KF Panda Search

// HTML Variables
let charNameE1 = document.getElementById("char-name");
let charQuoteE1 = document.getElementById("char-quote");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase;

  // If statement - Tesst input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameE1.innerHTML = "Po";
    charQuoteE1.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameE1.innerHTML = "Tigress";
    charQuoteE1.innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameE1.innerHTML = "Mantis";
    charQuoteE1.innerHTML = "fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameE1.innerHTML = "Monkey";
    charQuoteE1.innerHTML = "We should hang out";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "viper") {
    charNameE1.innerHTML = "Viper";
    charQuoteE1.innerHTML = "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane") {
    charNameE1.innerHTML = "Crane";
    charQuoteE1.innerHTML = "Wings of Justice";
    document.getElementById("char-img").src = "img/crane.png";
  } else {
    charNameE1.innerHTML = "??????";
    charQuoteE1.innerHTML = "--------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
