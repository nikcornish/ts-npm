// Type any allows any type, but leaves the door open for errors, isn't strict enough
var b : any;
b = true
b = false
b = 10
b = undefined


// Union Type
var c : number | string
c = 10
c = 'yeah!'
// c = false // not allowed, only number or string