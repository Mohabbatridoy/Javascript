let b = 8
let a = b;

b = 45 
console.log(a)
console.log("this is called primitive type")

console.log("now lers see refrense type")

numbers = [12,4,5,3]
newnumbers = numbers
console.log(newnumbers)

numbers[2]=12
console.log(numbers)
console.log(newnumbers)

numbers=[6,3,2,4]
console.log(numbers)

console.log(newnumbers)

let u = {}
console.log(u.name)

var am = [1,3,{a:1}]
console.log(am[2][a])