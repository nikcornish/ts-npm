// Modules
// https://www.typescriptlang.org/docs/handbook/modules.html

/*
Using Modules, you can break code down into separate files, importing
and exporting the pieces you need to build an application

IMPORT:   import { x } from 'y'
EXPORT:   export ...

*/

import { Person } from './classes';
let icyHot = new Person('Trey', 'Young')
console.log(icyHot);
