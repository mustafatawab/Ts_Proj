#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon("Let's start  calculation"); //start
    await sleep();
    rainbowTitle.stop();
}
welcome();
async function askQuestion() {
    let answers = await inquirer.prompt([
        //paste your questions here and prompt is basically array
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform",
            choices: [
                "Additions",
                "Subtraction",
                "Division",
                "Mutliplication",
                "Modulus",
            ],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number",
        },
    ]);
    if (answers.operator == "Additions") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.greenBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Mutliplication") {
        console.log(chalk.greenBright(`${answers.num1} X ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    else if (answers.operator == "Modulus") {
        console.log(chalk.green(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`));
    }
    else {
        console.log(`You entered wrong input`);
    }
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to restart pres y or n ",
        });
    } while ((await again).restart == "y" || (await again).restart == "Y");
}
startAgain();
