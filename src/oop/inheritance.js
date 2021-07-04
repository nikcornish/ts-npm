var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    AnotherPerson.prototype.greet = function () {
        console.log('Hey there!');
    };
    return AnotherPerson;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.greet = function () {
        console.log('Hello fellow employee!');
    };
    Employee.prototype.greetLikeNormal = function () {
        // this.greet() // calls local greet
        _super.prototype.greet.call(this); // calls greet from AnotherPerson
    };
    return Employee;
}(AnotherPerson));
var marco = new AnotherPerson('Marco', 'Lieske');
var mitarbeiter = new Employee('James', 'Brown');
console.log(marco, mitarbeiter);
marco.greet();
mitarbeiter.greetLikeNormal();
mitarbeiter.greet();
