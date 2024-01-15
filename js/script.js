// array iteration usnig for each function 
foods = ["cake", "chocolate","banana","Mango"]
numebrs = [1,2,3,4,32]

/*let WholeArray =0;
let theFunction = function(item,index,wholeArray) {
    console.log(`In idex ${index} ${item} is a food`)
    console.log(wholeArray);
    return WholeArray = wholeArray;

}*/
//foods.forEach(theFunction);



let againFunction = (item) => {
    return i =  `${item} is food`
}

//numebrs.forEach(theFunction)

//let af = numebrs.map(againFunction)
//console.log(af)

//numebrs.map(theFunction)


let aFunction = numebrs.map(function(i){
    return item = `${i} is a number`;
})

console.log(aFunction)


let bFunction = foods.map(function(item){
    return i = `${item } is a food`
})

console.log(bFunction)


let cFunction = numebrs.map(function(i){
    return i*i;

})

console.log(cFunction)


let dFunction = (item) => {
    return item*item;
}

numebrs.map(dFunction)