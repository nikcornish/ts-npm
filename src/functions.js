// Parameter count has to match in TS
var add = function (a, b) { return a + b; };
var a1 = add(4, 5);
var a2 = add(4, 5, 6); // 3rd argument not allowed
// Optional Parameters
// 3rd parameter is optional (c?) and has to come at end of arguments
var addMore = function (a, b, c) { return a + b + c; };
var b3 = addMore(1, 2);
var b4 = addMore(1, 2, 3);
// Optional Parameter must be at end, below (b?) is invalid
var multiply = function (a, b, c) { return a * b * c; };
// Default values
var subtract = function (a, b) {
    if (b === void 0) { b = 4; }
    return a - b;
};
var c1 = subtract(9, 5); // 4
var c2 = subtract(5); // 1
console.log(c1, c2);
