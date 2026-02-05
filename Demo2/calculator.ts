// interface (acts like a struct)
interface Calculator {
  a: number;
  b: number;
}

// functions using the interface
function add(c: Calculator): number {
  return c.a + c.b;
}

function subtract(c: Calculator): number {
  return c.a - c.b;
}

function multiply(c: Calculator): number {
  return c.a * c.b;
}

function divide(c: Calculator): number {
  if (c.b === 0) {
    throw new Error("Division by zero not allowed");
  }
  return c.a / c.b;
}

// object creation
const calc: Calculator = {
  a: 10,
  b: 5
};

// output
console.log("Add:", add(calc));
console.log("Subtract:", subtract(calc));
console.log("Multiply:", multiply(calc));
console.log("Divide:", divide(calc));
