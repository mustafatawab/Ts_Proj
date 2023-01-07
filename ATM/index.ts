#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import { stringify } from "querystring";


(
   async () => {
    const userInput  : { userId: string , userPin : string}  = await inquirer.prompt(
        [
            {
                name : 'userId',
                message : "Enter your user id",
                type : "input"
            },
            {
                name : "userPin",
                message : "Enter your pin number",
                type : "password",

            }
        ]
    )
    // console.log(userInput.userId);
    // console.log(userInput.userPin);


    const userData  = {

        userId : userInput.userId,
        userPin : userInput.userPin,
        amount : Math.floor((Math.random() * 100000) + 1),

    }

    const selectedOpt : {options : "Cash Withdrawal" | "Exit" | "Balance Inquiry"} = await inquirer.prompt(
        [
            {
                name : "options",
                message : "Select any option",
                type : "list",
                choices : ["Cash Withdrawal" , "Exit" , "Balance Inquiry"]
            },
        ]
    )

    async function Withdrawal(){
        if (selectedOpt.options === "Cash Withdrawal") {
            console.log(` Your Current amount is ${userData.amount}`);
            
            const enterredAmount :{amount : number}  = await inquirer.prompt(
                [
                    {
                        name : "amount",
                        message: "Enter Your Amount",
                        type : "number",
                        validate : (input ) =>{
                            if (input > userData.amount) {
                                return "Insuffient Fund"
                            }
                            else {
                                return true;
                            }
                        }
                    }
                ]
            )
    
            userData.amount -= enterredAmount.amount;
            console.log(`Amount after withdraw ${userData.amount}`);
            
        }
    }

    Withdrawal()
    // do{
        
    if(selectedOpt.options === "Balance Inquiry"){
        console.log(`Your total balance is ${userData.amount}`);

        let anotherTransaction : {transaction : string} = await inquirer.prompt([
            {
                name: "transaction",
                message: "Would you like to proceed another transaction ? y for yes n for no",
                type : "string",

            }
        ])
        if(anotherTransaction.transaction === 'y' || anotherTransaction.transaction === 'Y'){
            console.log(Withdrawal());
            
        }
        else{
            return true;
        }
        
        
    }
    }



//    }

)()
 