var tupleArr : [number, string]; // tuple (order matters, 2 members only)
var unionArr : (number|string)[]; // union (can be number or string)

// correct
tupleArr = [2, 'test']
unionArr = ['test', 44]

// incorrect
tupleArr = ['test', 44]
unionArr = [false, true]
