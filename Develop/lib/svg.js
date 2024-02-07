class SVG {
    // properties
    constructor(shapeCode, textCode) {
        this.version = "1.1";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";
        this.shapeCode = shapeCode;
        this.textCode =  textCode;
    }


    // methods
    generateCode() {
        return `
<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">
        ${this.shapeCode}
        ${this.textCode}
</svg>
        `
    }
}


module.exports = SVG;

