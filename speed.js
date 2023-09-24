const prompt = require("prompt-sync")();//prompt method for user imput
function calculateDemeritPoints(speed) { //naming function
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) { // use if statement to carry out conditional statements
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
      
      if (demeritPoints > 12) { // calculates points to be deducted
        console.log("License suspended"); //message to be printed out on console if condition is met
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  const userInput = prompt("Enter the car's speed (in km/h):"); //interacting with user
  const speed = parseFloat(userInput); // user prompted
  
  if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  calculateDemeritPoints(100);//invoking the function
  