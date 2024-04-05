#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Calculator");
const ans = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "Num1" },
  { message: "Enter Second Number", type: "number", name: "Num2" },
  {
    message: "Select operator which you want to perform",
    type: "list",
    name: "OP",
    choices: ["+", "-", "*", "/"],
  },
]);

if (ans.OP === "+") 
{
  console.log("Sum of your values:");
  console.log(ans.Num1 + ans.Num2);
}
 else if (ans.OP === "-")
 {
  console.log("Difference of your values:");
  console.log(ans.Num1 - ans.Num2);
} 
else if (ans.OP === "*")
 {
  console.log("Product of your values:");
  console.log(ans.Num1 * ans.Num2);
}
 else if (ans.OP === "/")
  {
  console.log("Quotient of your values:");
  console.log(ans.Num1 / ans.Num2);
}
 else {
  console.log("Oops, that's not the one");
}
