const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./shapes.js');
const fs = require('fs');

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: 'text',
          message: 'Enter up to three characters:',
          validate: input => input.length <= 3 || 'Please enter up to three characters.',
        },
        {
          name: 'textColor',
          message: 'Enter text color (keyword or hexadecimal):',
        },
        {
          name: 'shape',
          type: 'list',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          name: 'shapeColor',
          message: 'Enter shape color (keyword or hexadecimal):',
        },
      ])
      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case 'circle':
            shape = new Circle();
            break;
          case 'triangle':
            shape = new Triangle();
            break;
          case 'square':
            shape = new Square();
            break;
        }
        shape.setColor(answers.shapeColor);

        const svg = `
          <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
          </svg>
        `;

        fs.writeFileSync('logo.svg', svg);
        console.log('Generated logo.svg');
      });
  }
}
module.exports = CLI;