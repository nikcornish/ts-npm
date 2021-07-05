"use strict";
// Modules
// https://www.typescriptlang.org/docs/handbook/modules.html
exports.__esModule = true;
/*
Using Modules, you can break code down into separate files, importing
and exporting the pieces you need to build an application

IMPORT:   import { x } from 'y'
EXPORT:   export ...

*/
var classes_1 = require("./classes");
var icyHot = new classes_1.Person('Trey', 'Young');
console.log(icyHot);
