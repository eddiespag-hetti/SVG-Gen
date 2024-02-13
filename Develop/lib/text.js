
// Text class
class Text {
    constructor(fill, textVal) {
        this.x = '140';
        this.y = '145';
        this.fontSize = '58';
        this.textAnchor = 'middle';
        this.fill = fill;
        this.textVal = textVal
    }

    // Function to generate the text code - returns the dynamically filled properties of the Text constructor
    generateCode() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}">${this.textVal}</text>`
    }
}

// Exports Text class to be used in other script files
module.exports = Text;