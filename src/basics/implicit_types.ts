// IMPLICIT TYPING

// If you assign a value to a variable, typescript can infer it's type automatically, e.g:
var a = 10 // ts infers 'a' is type number

// Reassignment below is incorrect, ts expect 'a' to be a number
// a = 'test'