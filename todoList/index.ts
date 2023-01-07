import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

figlet(`To Do List` , (err , data)=>{
    if(err){
        console.log("Something went wrong");
        console.dir(err)

        return;
    }
    console.log(chalk.green(data));
    
})

let todolist : string[] = [];

async function RepeatFlow(){
    const answer = await inquirer.prompt([{
        name : 'repeat',
        type : "list",
        message : "Do you want another operation",
        choices : [ "yes" , 'no']
    }])

    return (answer.repeat === 'yes') ? true : false;
}


async function ToDoList() {

    let startAgain  = true;
    do{

        const answer : {options : string} = await inquirer.prompt(
            [
                {
                    name : "options",
                    type : "list",
                    message : "What do you wanna do ?",
                    choices : ["Add Item" , "Display Item" , "Remove Item"]
                }
            ]
        )
    
        if(answer.options === "Add Item"){
            const item : {newItem : string} = await inquirer.prompt([
                {   
                    name: "newItem",
                    type : "input",
                    message : "Enter New Item"
                }
    
                
            ]);
    
            todolist.push(item.newItem);
            
            startAgain = await RepeatFlow();
            console.log(startAgain);
            
        
        }
        else if(answer.options === "Display Item"){
            if(todolist.length == 0){
                console.log(chalk.red(`Your list is empty`));
                
            }
            todolist.forEach((element) => console.log(element));

            
            startAgain = await RepeatFlow();
            // console.log(startAgain);
            
        }
        else if(answer.options === "Remove Item"){
            //for removing the items we can use the pop function but it will just remove the last one
            //we can also use splice  method to remove the specific index no
            if(todolist.length == 0){
                console.log(chalk.red(`Your list is already empty`));
                
            }
            const removeItem : {item  : string} = await inquirer.prompt([{
                name : "item",
                type : "input",
                message : "which item you wanna remove ?"
            }]);
    
            let index  = todolist.indexOf(removeItem.item)
            console.log(index);


            if(index !== -1){
                todolist.splice(index, 1)
                console.log(` Index has -1 of     .... ${index}`);
                
            }          


            
            startAgain = await RepeatFlow();
            // console.log(startAgain);
        }

    }while(startAgain !== false)

}

setTimeout(()=>{
    
ToDoList();
} , 2500)