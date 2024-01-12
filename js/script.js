//for in string/array/object
//for of string/array

let id = "this is md mohabbat hossain ridoy"
let mm = ['hi','maria','kmn', 'acho'] 
let m2 = {
    name: 'maria',
    id: 'Mohabbat',
    for: 'mohabbat'
}

for(var j in id){
    console.log(`index: ${j} item: ${id[j]}`)
    console.log(j)
}

for(var i of mm){
    console.log(i);
}