class SVG {
    // properties of SVG Class
    constructor(shapeCode, textCode) {
        this.version = "1.1";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";
        this.shapeCode = shapeCode;
        this.textCode =  textCode;
    }


    // Function to generate the SVG code
    generateCode() {
        return `
<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">
        ${this.shapeCode}
        ${this.textCode}
</svg>
        `
    }
}

// Exporting this file to be utilised in other scripts in thie directory
module.exports = SVG;

