"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// functions using the interface
function add(c) {
    return c.a + c.b;
}
function subtract(c) {
    return c.a - c.b;
}
function multiply(c) {
    return c.a * c.b;
}
function divide(c) {
    if (c.b === 0) {
        throw new Error("Division by zero not allowed");
    }
    return c.a / c.b;
}
// object creation
const calc = {
    a: 10,
    b: 5
};
// output
console.log("Add:", add(calc));
console.log("Subtract:", subtract(calc));
console.log("Multiply:", multiply(calc));
console.log("Divide:", divide(calc));
//# sourceMappingURL=calculator.js.map