class Shape {
  constructor(fill) {
    this.fill = fill;
  }
}

class Circle extends Shape {
  generateCode() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
  }
}

class Square extends Shape {
  generateCode() {
    return `<rect width="200" height="200" x="50" fill="${this.fill}"/>`;
  }
}

class Triangle extends Shape {
    generateCode() {
        
                return `<polygon points="200,10 250,190 150,190" fill="${this.fill}"/>`
            }
        }




module.exports = { Circle, Square, Triangle };

