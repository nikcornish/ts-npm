// FUNCTIONS
// https://www.typescriptlang.org/docs/handbook/2/functions.html

// Parameter count MUST match in TS
const add = (a: number, b: number) => a + b;
const a1 = add(4,5);
// const a2 = add(4,5,6) // 3rd argument not allowed

// Optional Parameters
// 3rd parameter is optional (c?) and has to come at end of arguments (how to resolve possibly undefined error!?)
// const addMore = (a: number, b: number, c?: number): number => a + b + c
// const b3 = addMore(1,2);
// const b4 = addMore(1,2,3);


// Optional Parameter must be at end
// const multiply = (a: number, b?: number, c: number) => a * b * c; // invalid, optional MUST come at end

// Default values (b is 4, and if no 2nd parameter provided, 4 will be used)
const subtract = (a: number, b: number = 4) => a - b
const c1 = subtract(9,5) // 4
const c2 = subtract(5)   // 1
console.log(c1, c2);

// Function Return Types
const add3 = (a: number, b: number, c:number): number => a + b + c
const d1 = add3(3,3,3)