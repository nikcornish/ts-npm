// GENERICS
// https://www.typescriptlang.org/docs/handbook/2/generics.html

/*
The function below accepts anything and returns it,
but we have no information about what type was passed.
*/
function identity(arg: any): any {
  return arg
}
let w = identity(4) // x is type 'any'

/*
Using the Type variable, we can capture the type information
which was passed by the user
*/
function id<Type>(arg: Type): Type {
  return arg
}
let x = id(4)       // x is type 'number'
let y = id('test')  // y is type 'string'
let z = id(false)   // z is type 'boolean'