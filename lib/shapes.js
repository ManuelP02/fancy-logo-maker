class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`;
    }
}

function makeShape({shape, text = "", textColor = "white", color = "green"}) {
    switch (shape.toLowerCase()) {
        case "circle":
            return new Circle(color, text, textColor);
        case "triangle":
            return new Triangle(color, text, textColor);
        case "square":
            return new Square(color, text, textColor);
    }
}

module.exports = { Shape, Circle, Triangle, Square, makeShape };