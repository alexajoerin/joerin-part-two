let userName = prompt("Welcome to GC mini golf! What is your name?");
console.log(userName);
let numberHoles = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes?");
console.log(numberHoles);

let userScore = 0;
let nextHole = 0;
for (let i = 0; i < numberHoles; i++) {
    nextHole += 1;
    let puttCount = Number(prompt("How many putts for hole " + nextHole + "? (par: 3)"));
    console.log(puttCount);
    userScore += puttCount;
}
console.log(userScore);

let par = 0;
if (numberHoles === "3" && userScore < 9) {
    par = 9 - userScore;
    console.log("Great job, " + userName + "! Your total par was: -" + par + ".");
 }
if (numberHoles === "3" && userScore > 9){
    par = userScore - 9;
    console.log("Nice try, " + userName + "! Your total par was: +" + par + ".");
}
if (numberHoles === "3" && userScore === 9){
    console.log("Good game, " + userName + "! Your total par was: 0.");
}
if (numberHoles === "6" && userScore < 18){
    par = 18 - userScore;
    console.log("Great job, " + userName + "! Your total par was: -" + par + ".");
}
if (numberHoles === "6" && userScore > 18){
    par = userScore - 18;
    console.log("Nice try, " + userName + "! Your total par was: +" + par + ".");
}
if (numberHoles === "6" && userScore === 18){
    console.log("Good game, " + userName + "! Your total par was: 0.");
}