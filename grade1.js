const prompt = require("prompt-sync")(); // prompt method for interacting with user  (propmt method imported)

function assignGrade(marks) { //function name
    if(isNaN(marks) || marks < 0 || marks > 100){ // condition statement(using logical operators)
    }
  
    let grade; // defining grade
  
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {  // if statement
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C-";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D-";
    } else {
      grade = "F";
    }
  
    return grade; // calculate grade according to marks
    
  }
  
  const userInput = prompt("Please enter your marks (0-100):"); // for interacting with user
  const marks = parseFloat(userInput);//prompting user ti input marks
  const grade = assignGrade(marks); //to know the grade based on marks provided
  
  if (grade !== undefined) { //assigned grades will return values, if not it will return undefined!
    console.log((`Your grade is: ${grade}`));
  }
  //assignGrade(90); // invoking function
