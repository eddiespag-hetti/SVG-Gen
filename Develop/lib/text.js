
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

    
    generateCode() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}">${this.textVal}</text>`
    }
}


module.exports = Text;