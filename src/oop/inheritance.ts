class AnotherPerson  {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  greet () {
    console.log('Hey there!');  
  }

}

class Employee extends AnotherPerson {

  employed: boolean;
  
  greet () {
    console.log('Hello fellow employee!'); 
  }
  
  greetLikeNormal () {
    // this.greet() // calls local greet
    super.greet()   // calls greet from AnotherPerson
  }
}

var marco = new AnotherPerson('Marco', 'Lieske')
var mitarbeiter = new Employee('James', 'Brown');

console.log(marco, mitarbeiter);

marco.greet()
mitarbeiter.greetLikeNormal()
mitarbeiter.greet()