// var and let and const
// let and cosnt (ES6)

// Global scope
var a = 3;
let b = 2; 
const c = 4;
const d = 90;

console.log("Global Scope: ", a,b,c);

function localScope(){
    var a = 6;
    let b = 7;
    const c = 9;
    console.log("Local Scope: ", a,b,c, d)
}

localScope();
console.log("Global Scope: ", a,b,c);

if(true){
    var a = 11;
    let b = 12;
    const c = 13;
    console.log("If scope: ",a,b,c)
}

console.log("Global Scope: ", a,b,c);


for(var a = 0; a<10; a++){
    console.log("for scope: ", a)
}

console.log("Global Scope: ", a,b,c);
