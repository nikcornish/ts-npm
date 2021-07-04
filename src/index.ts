var myArr2 : [number, string]; // tuple (order matters, 2 members only)
var myArr3 : (number|string)[]; // union (can be number or string)

// correct
myArr2 = [2, 'test']
myArr3 = ['test', 44]

//