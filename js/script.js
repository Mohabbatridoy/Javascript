//dom
//getElementsByClassName;

let list = document.getElementsByClassName('sample-class');
console.log(list[0])

list[0].style.background = 'red'

///getElementsByTagName:
list = document.getElementsByTagName('li')
list = document.querySelector('ol').getElementsByTagName('li')
// let liArray = Array.from(list)
// liArray.forEach((item)=>{
//     item.style.background = 'gray'
// })
// console.log(list)

///query selector():

list = document.querySelectorAll('ol li')
console.log(list)

list.forEach((item)=>{
    item.style.color = 'red';
})

list = document.querySelectorAll('li:nth-child(odd)')
list.forEach((item)=>{
    item.style.background = 'gray';
    item.style.color = 'red'
})

list = document.querySelectorAll('li:nth-child(even)')
list.forEach(function(item){
    item.style.background = 'red';
    item.style.color = 'gray';
    // item.innerText = 'this is example'
})
