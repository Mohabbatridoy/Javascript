//normal declaration 
function theFunction(name){
    console.log(`this is ${name} declaration`)
}

// function expresion
let theFunction1 = function(name){
    console.log(`"this is function ${name}"`)
}

// Arrow function

let theFunction2 = (name) => {
    console.log(`"this is ${name} Function"`)
}


theFunction("Normal");
theFunction1("Expresion");
theFunction2("Arrow");