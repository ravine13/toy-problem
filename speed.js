const prompt = require("prompt-sync")();
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
      
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  const userInput = prompt("Enter the car's speed (in km/h):");
  const speed = parseFloat(userInput);
  
  if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  calculateDemeritPoints(100);
  