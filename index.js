var readlineSync = require('readline-sync')
var score = 0;
var q1 = readlineSync.question("Have you ever played valorant ? ")
var q2 = readlineSync.question("Enter your Ingame Name - ")
var q3 = readlineSync.question("Which One is your favourite Agent? ")
console.log("-----Welcome to the game -----")
console.log(" You will get 1 point for each right answer!! All the best :)\n\n ")
console.log("------------------------------------")

function quiz(question,answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
  console.log("Right answer.")
  score = score + 1
  console.log("Current Score--",score)
}else{
  console.log("Wrong answer!")
}}
// FIRST LEVEL STARTS FROM HERE


quiz("How many abilities does an agent have ? ","5")
quiz("How many players are there in a Team ? ","5")
quiz("Total number of player in game :","10")
quiz("Closest server to India :","mumbai")

// LEVEL 2 STARTS FROM HERE


if(score === 4){
  console.log("Congratulations you cleared level 1")
  quiz("Which agent can reive ? ","sage")
  quiz("Gun you get in very first round ? :","classic")
  quiz("Your HP after buying armour ? ","150")
  quiz("You'll get spike if you are - (attacker/defender) ?","attacker")
}else{
  console.log("You lose !!")
}
console.log("Your score after after 8qns = ",score)
//LEVEL 3 STARTS FROM HERE ----


if(score === 8){
  console.log("Congatulations!\tYou cleared level 2\tWelcome to the FINAL LEVEL")
  console.log("---------------------------------")
  quiz("Name of Raze's Ultimate ? ","showstopper")
  quiz("Number of satchel does Raze have ? ","2")
  quiz("How many nades does she have ? ","1")
  quiz("can she fly with satchels","yes")
}else{
  console.log("Better Luck Next Time!!!")
  console.log("Your highest score is - ",score)
}
if(score===12){
  console.log("Heyy, congatulations!!\nYou won this game")
  console.log("Your highest score is -",score)
}