//Remove element from the dom: 

let listItem = document.querySelectorAll('li')

listItem[0].remove();
listItem[6].remove();



let list = document.querySelector('ul')

// list.className = 'test'

//add class in dom
list.classList.add('test')
list.classList.add('list_added')

//remove class from dom
list.classList.remove('test')

//checking attribute in dom:
let val = list.hasAttribute('class')
list.setAttribute('title','new title added');
list.removeAttribute('title')

console.log(val)
console.log(listItem)
console.log(list)