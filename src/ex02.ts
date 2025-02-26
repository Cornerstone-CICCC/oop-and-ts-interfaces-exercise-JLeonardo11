// Exercise 2: Interfaces as Function Types
// Create an interface for a function type that takes two numbers as arguments and returns their sum.
// Implement the function using the interface and test it.

interface SumFunction {
    a:number;
    b:number;


}

const sum = (a:number, b:number) => a + b;

console.log(sum(10, 20)); 
// Expected Output: 30