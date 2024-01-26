let val;

//getting a element: 
val = document.getElementById('document-id');
val = document.getElementById('document-id').id;
val = document.getElementById('document-id').className;

//changing style:
document.getElementById('document-id').style.background='red';
val = document.getElementById('document-id');
val.style.color='white'
val.style.padding = '10px'
val.style.paddingLeft = '50px'
//console.log(val)

//changing content: 
val.innerText="this is heading"
val.innerHTML= "<i><u>this is a list of programming languages</u></i>"

//document querySelector()
val = document.querySelector('#document-id')
val = document.querySelector('simple-class')
val = document.querySelector('li:nth-child(1')

//console.log(val)


val = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName("li")
console.log(list)

lis = Array.from(list);
lis.forEach(function(item){
    console.log(item)
})

list = document.querySelector('#document-id')
console.log(list)


list = document.querySelectorAll('#document-id')

list.forEach((item)=>{
    console.log(item)
})

list = document.querySelectorAll('li:nth-child(odd)')
console.log(list)
list.forEach(function(item){
    item.style.background='red'
    item.style.color = 'gray'
}) 

let lieven = document.querySelectorAll('li:nth-child(even)');
console.log(lieven)

lieven.forEach(function(item){
    item.style.background='gray';
    item.style.color = 'red'
})