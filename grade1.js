const prompt = require("prompt-sync")();

function assignGrade(marks) {
    if(isNaN(marks) || marks < 0 || marks > 100){
    }
  
    let grade;
  
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C-";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D-";
    } else {
      grade = "F";
    }
  
    return grade;
  }
  
  const userInput = prompt("Please enter your marks (0-100):");
  const marks = parseFloat(userInput);
  const grade = assignGrade(marks);
  
  if (grade !== undefined) {
    console.log((`Your grade is: ${grade}`));
  }
  assignGrade(90);
