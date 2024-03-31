#! /usr/bin/env node
import inquirer from "inquirer";
/*let generateNumber = 15;

const answer = await inquirer.prompt(
    [
        {
          name : "userNumber",
          message : "Please guess a number",
          type : "number"
        }
    ]
 );
 
 if(answer.userNumber === generateNumber){
    console.log("Congratulation you guess a right number")
 }

 else{
    console.log("OOpps!! Try again \n You guess wrong number")
 }*/
let generateNumber = Math.floor(Math.random() * 10 + 1);
//console.log(generateNumber);
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        message: "Please guess a number between 1- 10",
        type: "number"
    }
]);
if (answer.userNumber === generateNumber) {
    console.log("Congratulation you guess right number");
}
else {
    console.log("OOpps!! Try again \n You guess wrong number");
}
