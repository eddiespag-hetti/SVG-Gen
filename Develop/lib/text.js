

class Text {
    constructor(fill, textVal) {
        this.x = '150';
        this.y = '125';
        this.fontSize = '60';
        this.textAnchor = 'middle';
        this.fill = fill;
        this.textVal = textVal
    }

    generateCode() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}">${this.textVal}</text>`
    }
}


module.exports = Text;