#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"



const sleep = () =>{
    return new Promise((res , rej) =>{
        setTimeout(res , 1000)
    })
}



async function welcome() {
    const rainbowTitle  = chalkAnimation.rainbow(`----- Let's Start Program -------`);
    await sleep();//It will run upto 1000 ms .. Mean the Above code rainbowTitle will run upto 1 sec after that remaining will be started
    rainbowTitle.stop();

    


}

welcome();


async function askQuestion() {
    let que = await inquirer.prompt([
        {
        type: "input",
        name: 'str',
        message: chalk.rgb(187, 143, 206)('Please Enter the paragraph you want to convert'),

        }
])

    //we need words
    //Convert the string into array

    const word_arr = que.str.split(" "); //the paragraph will split by spaces using the split method
    
    console.log(word_arr);
    console.log(`word in paragraph are ${word_arr.length}`);
    

    //characters
    const chr_withoutSpaces = que.str.replace(/ /g, "");
    console.log(`Characters in Paragraph : ${chr_withoutSpaces.length}`);
    

}
// askQuestion();

async function startAgain() {
    do{
        await  askQuestion()
        var playAgain = await inquirer.prompt([
            {
                type : "input",
                name : "restart",
                message : chalk.rgb(187, 143, 206)('Do you want to restart reply with  y or Y'),

            }
        ])
    }while(playAgain.restart === 'y' || playAgain.restart === 'Y' || playAgain.restart === 'YES' || playAgain.restart === 'yes')
}

startAgain();