const prompt = require("prompt-sync")(); //installed prompt
function calculateNetSalary(basicSalary, benefits){
 const taxRate = 0.3;
 const nssfDeductionRate = 0.06;
 const nhifDeduction = 1700;         // declaring variables within the function scope( values already given)
 
 const grossSalary = basicSalary + benefits;
 const payee = grossSalary * taxRate;
 const nssfDeduction = grossSalary * nssfDeductionRate;                     // calculating decuction
 const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction)
 //let basicSalary;
 
 return {
    grossSalary,
    payee,
    nhifDeduction, // creating object that will calculate the deductions
    nssfDeduction,
    netSalary
 };
 
}
//const basicSalary = 60000; // assigning variables with values
//const benefits = 10000;




const userInputBasicSalary = prompt("Please enter basic salary: ");
const userInputBenefits = prompt("Please enter benefits: ");

const basicSalary = parseFloat(userInputBasicSalary);
const benefits = parseFloat(userInputBenefits);

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("GROSS SALARY:", salaryDetails.grossSalary);
console.log("PAYEE:", salaryDetails.payee);
console.log("NHIF DEDUCTION:", salaryDetails.nhifDeduction); // display results of the deduction
console.log("NSSF DEDUCTION:", salaryDetails.nssfDeduction);
console.log("NET SALARY:", salaryDetails.netSalary);







































































































