import inquirer from "inquirer";
const UsdToPkr = 228.43;
const PkrToUsd = 0.0044;
const EuToPkr = 239.85;
const PkrToEu = 0.0042;
const EuToUsd = 1.05;
const UsdToEu = 0.95;
async function Converter() {
    let answer = await inquirer.prompt([
        {
            name: "currencyFrom",
            type: "list",
            message: "From Currency You want to convert",
            choices: ["USD", "PKR", "EU"],
        },
        {
            name: "currencyTo",
            type: "list",
            message: "To Which Currency you would like to conver",
            choices: ["USD", "PKR", "EU"],
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount",
        },
    ]);
    // console.log(answer.currencyFrom);
    // console.log(answer.currencyTo);
    // console.log(answer.amount);
    switch (answer.currencyFrom) {
        case "USD":
            if (answer.currencyTo === "PKR") {
                let amount = answer.amount * UsdToPkr;
                console.log(amount);
            }
            else if (answer.currencyTo === "EU") {
                let amount = answer.amount * UsdToEu;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
        case "PKR":
            if (answer.currencyTo === "USD") {
                let amount = answer.amount * PkrToUsd;
                console.log(amount);
            }
            else if (answer.currencyTo === "EU") {
                let amount = answer.amount * PkrToEu;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
        case "EU":
            if (answer.currencyTo === "USD") {
                let amount = answer.amount * EuToUsd;
                console.log(amount);
            }
            else if (answer.currencyTo === "PKR") {
                let amount = answer.amount * EuToPkr;
                console.log(amount);
            }
            else {
                console.log(answer.amount);
            }
            break;
    }
}
async function repeat() {
    do {
        await Converter();
        var again = await inquirer.prompt([{
                name: 'repeat',
                type: 'list',
                choices: ['Yes', 'No'],
                message: "Do you want to repeat"
            }]);
    } while (again.repeat === 'Yes');
}
repeat();
