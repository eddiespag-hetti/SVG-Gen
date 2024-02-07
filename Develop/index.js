// Loading required libraries
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const Text = require("./lib/text");
const { Circle, Square, Triangle } = require("./lib/shapes");
const SVG = require("./lib/svg");
const { write } = require("fs");

// Array of questions/options

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "What do you want the text to be? ( Up to 3 characters )",
    },
    {
      type: "input",
      name: "textcolor",
      message: "What color do you want the text to be?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like your logo to have?",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapecolor",
      message: "Which color would you like the background to be?",
    },
  ]);
};

// Funtion to initialize
const init = () => {
  promptUser().then((answers) => {
    console.log(answers);

    const newText = new Text(answers.textcolor, answers.text);
    const textCode = newText.generateCode();

    let newShape;

    if(answers.shape === "circle") {
      newShape = new Circle(answers.shapecolor);
    } else if(answers.shape === "square") {
      newShape = new Square(answers.shapecolor);
    } else if (answers.shape === "triangle") {
      newShape = new Triangle(answers.shapecolor);
    }

   
    const shapeCode = newShape.generateCode();

    const newSvg = new SVG(shapeCode, textCode);
    const svgCode = newSvg.generateCode();

    console.log(svgCode);

    writeFile("./lib/logo.svg", svgCode)
      .then(() => {
        console.log("SVG has been generated!");
      })
      .catch((err) => {
        console.log(err);
        console.log("There has been an error!");
      });
  });
};


init();
