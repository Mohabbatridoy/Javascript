// math object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(3.1)
val = Math.floor(3.9)
val = Math.ceil(3.1)
val = Math.sqrt(16);

val = Math.abs(-8)
val = Math.pow(2,4)
val = Math.floor(Math.random()*100+1)

console.log(val);


// date object
let cal;
let today = new Date();
let birthday = new Date('06-28-2002')

cal = today;
cal = birthday;
cal = today.getMonth();
cal = today.getDate();
cal = today.getDay();
cal = today.getFullYear();
cal = today.getHours()
cal = today.getMinutes()
cal = today.getMilliseconds()
cal = today.getTime();



birthday.setMonth(10)
birthday.setDate(25)
console.log(birthday)
