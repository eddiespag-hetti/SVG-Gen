// Shape class
class Shape {
  constructor(fill) {
    this.fill = fill;
  }
}

// class Shape {
//   constructor() {
//     this.fill = '';
//   } 
//   setColor(color) {
//     this.fill = color;
//   }
// }

// Circle is the child to Shape and inherits all its properties
class Circle extends Shape {
  generateCode() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`;
  }
}

// Square is the child to Shape and inherits all its properties
class Square extends Shape {
  generateCode() {
    return `<rect width="200" height="200" x="50" fill="${this.fill}"/>`;
  }
}

// Triangle is the child to Shape and inherits all its properties
class Triangle extends Shape {
  generateCode() {
    return `<polygon points="150,10 250,190 50,190" fill="${this.fill}"/>`;
  }
}

// const circle = new Circle(); 
// circle.setColor('blue');

// const resultSvg = circle.generateCode()
// console.log(resultSvg);
// Exports these three classes so that usuable in other scripts
module.exports = { Circle, Square, Triangle };
