const favMovie = "marvel";

let guess = prompt("guess my favorite movie??");
// console.log(`you entered ${guess}`);
console.log(guess);

while((guess!=favMovie)&&(guess!="quit")){
    guess = prompt("wrong guess! please try again!")
    console.log(guess);
}
if(guess==favMovie){
    console.log("Congratulations!!WINNERRRR!!")
}else{
    console.log("you quited!")
}