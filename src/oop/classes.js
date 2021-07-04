var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var me = new Person();
me.firstName = 'Nik';
me.lastName = 'Cornish';
console.log(me);
console.log(me.getFullName());
