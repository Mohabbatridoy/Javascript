//class (ES6)

class Person {
    constructor(fName,mName,lName,dob){
        this.firstName = fName;
        this.MiddleName = mName;
        this.lastName = lName;
        this.dob = dob;
    }

    calculateAge(){
        let birthDay = new Date(this.dob);
        let diff = Date.now() - birthDay.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    FullName(){
        console.log(`Your Full Name: ${this.firstName} ${this.MiddleName}  ${this.lastName}`)
    }
}
let a = prompt('Enter your firstName: ')
let b = prompt("Enter your Middle Name: ")
let c = prompt("Enter Your Last Name: ")
let d = prompt("Enter Your Date of birthDay: ")

let person1 = new Person(a,b,c,d);
console.log(person1)
person1.FullName();
let age = person1.calculateAge();
console.log(age);