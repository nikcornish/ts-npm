class Person {
  
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
var her = new Person(false, true)
console.log(me);
console.log(me.getFullName());
