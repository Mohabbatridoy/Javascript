//array iteration using forEach Function:
var foods = ['cake', 'make','dake','take']

let a_b = (item,index,whole_array)=>{
    console.log(`index: ${index} item:${item} the wholeArray:${whole_array}`)
    
}

let saysomthing = function(item,index){
   
    return `index:${index} item:${item}`
    
}
let a;
console.log(a)
foods.forEach(a_b);
let new_arr = foods.map(saysomthing)
console.log(new_arr)

