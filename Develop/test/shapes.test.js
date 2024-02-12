const { Circle, Square, Triangle } = require('../lib/shapes');


// Test to be run on Circle class
describe('Circle', () => {
    it('should render a circle shape', () => {
        const expectSvg = '<circle cx="150" cy="100" r="80" fill="blue"/>';
        const circle = new Circle('blue');
expect(circle.generateCode()).toEqual(expectSvg);
    })
});

// Test to be run on Square class
describe('Square', () => {
    it('should render a square shape', () => {
        const expectSvg = '<rect width="200" height="200" x="50" fill="blue"/>';
        const square = new Square('blue');
expect(square.generateCode()).toEqual(expectSvg);
    })
});

describe('Triangle', () => {
    it('should render a triangle shape', () => {
        const expectSvg = '<polygon points="150,10 250,190 50,190" fill="blue"/>';
        const triangle = new Triangle('blue');
expect(triangle.generateCode()).toEqual(expectSvg);
    })
});