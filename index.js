import inquirer from "inquirer";
async function playMore() {
    let secretNum = Math.floor(Math.random() * 101);
    async function playGame() {
        let usersInput = await inquirer.prompt({
            name: "userInput",
            type: "number",
            message: ("Enter your number between 1 - 100 =>")
        });
        let userInput = usersInput.userInput;
        if (userInput === secretNum) {
            console.log(`Congratulations!!! You have guess the right number.`);
            return true;
        }
        else if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            console.log("Invalid input! Please enter a number between 1 and 100.");
        }
        else {
            if (userInput > secretNum) {
                console.log(`Your number is greater than the number you are guessing`);
            }
            else if (userInput < secretNum) {
                console.log(`Your number is smaller than the number you are guessing`);
            }
            return false;
        }
        ;
    }
    ;
    let isGuessed = false;
    let attempts = 0;
    console.log(`Number Guessing Game !!!!!!!`);
    console.log();
    console.log();
    console.log(`             #####`);
    console.log(`           ##     ##`);
    console.log(`                ###`);
    console.log(`              ##`);
    console.log(`              ##`);
    console.log(`              ##`);
    console.log(`               `);
    console.log(`              ## `);
    console.log();
    console.log();
    console.log();
    while (!isGuessed) {
        attempts++;
        isGuessed = await playGame();
    }
    console.log(`You have attempted ${attempts} times to guess the right number...`);
    console.log();
    console.log();
    console.log(`        ###     ###     ###  ######  ###    ###`);
    console.log(`      ### ### ### ###    ####    ###    ###`);
    console.log(`          ###     ###      ######  ###### ######   `);
    console.log();
    console.log(`     ######        #####     ####    ##  #######`);
    console.log(`   ###   ##    ###   ###   ## ##   ##  ###`);
    console.log(`     ###    ##  ##       ##  ##  ##  ##  #####`);
    console.log(`           ###   ##    ###   ###   ##   ## ##  ###`);
    console.log(`    ######        #####     ##    ####  #######`);
    console.log();
    console.log();
    console.log();
}
playMore();
