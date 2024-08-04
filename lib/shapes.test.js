const { Circle, Triangle, Square } = require("./shapes.js");

describe("Circle", () => {
    test("To render a circle svg", () => {
        const circle = new Circle("red", "Test", "white");
        const expectedElement = `<circle cx="150" cy="100" r="100" fill="red" />`;
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedElement);
    });
});

describe("Triangle", () => {
    test("To render a triangle svg", () => {
        const triangle = new Triangle("blue", "Test", "white");
        const expectedElement = `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`;
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedElement);
    });
});

describe("Square", () => {
    test("To render a square svg", () => {
        const square = new Square("green", "Test", "white");
        const expectedElement = `<rect x="50" width="200" height="200" fill="green" />`;
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedElement);
    });
});