var inp = prompt("Please Enter input: ")

inp = parseInt(inp)
sum = 0;

for (var i=1; i<inp; i++){
    sum = sum + i**2;
    console.log(`${i} + ${i**2} = ${sum}`)
}

