let name = "Mohabbat Hossain Ridoy"
let food = ['cake','apple','banana']

let person = {
    Name : "Mohabbat",
    id : "213-15-4508",
    age: 13
}

for (var i in name){
    console.log(i)
}

for(var j of name){
    console.log(j)
}


for (var k of food){
    console.log(k)
}

for (var d in person){
    console.log("Index: "+d)
    console.log("value: "+person[d])
}