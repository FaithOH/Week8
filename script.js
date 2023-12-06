
// I used Math.floor function to attain whole numbers . Having just the Math.random function gives decimals between 0 and 1. Adding +1 gives random decimal numbers not exceeding 1.9.. 
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");

const enter = document.getElementById("enter");

const feedback = document.getElementById("feedback");

enter.addEventListener("click",correctOrNot);

function correctOrNot() {
    const userValue = Number(guess.value);
   
    

if(userValue === randomNum){
    feedback.textContent = 
    "Congratulobia, e correct wella!";
}
else if (userValue < randomNum ){
feedback.textContent = "Too low! Try again.";
}
else {
    feedback.textContent = "Too high! Try again.";
    }

    
}



 


