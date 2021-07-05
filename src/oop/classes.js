"use strict";
// CLASSES
// https://www.typescriptlang.org/docs/handbook/2/classes.html
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
var me = new Person('Nik', 'Cornish');
// var her = new Person(false, true) // error, constructor expects two strings, not two booleans
// console.log(me);
// console.log(me.getFullName());
