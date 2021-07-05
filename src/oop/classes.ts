// CLASSES
// https://www.typescriptlang.org/docs/handbook/2/classes.html

export class Person {
  
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

var me = new Person('Nik', 'Cornish')
// var her = new Person(false, true) // error, constructor expects two strings, not two booleans
// console.log(me);
// console.log(me.getFullName());
