// Loading required libraries 
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// Array of questions/options

const promptUser = () => {
    return inquirer.prompt([
        {
type: 'input',
name: 'text',
message: 'What do you want the text to be? ( Up to 3 characters )'
        },
        {
            type: 'input',
            name: 'text-color',
            message: 'What color do you want the text to be?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to have?',
choices: [
    'circle', 'triangle', 'square'
]},
{
    type: 'input',
    name: 'shape-color',
    message: 'Which color would you like the background to be?'
},
])
}


// Funtion to initialize
const init = () => {
    promptUser()

    .then((answers) => writeFile('index.html', ))
}