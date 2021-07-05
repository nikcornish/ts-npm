// TUPLES AND UNIONS
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-3.html#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

var tupleArr : [number, string];    // tuple (order matters, 2 members only)
var unionArr : (number|string)[];   // union (can be number or string)

// incorrect
tupleArr = ['test', 44]   // expects number first, string second
unionArr = [false, true]  // expects either a string or a number

// correct
tupleArr = [2, 'test']
unionArr = ['test', 44]
