//travesing the DOM:

 let val;
 let list = document.querySelector('ul')
 let listItem = document.querySelector('ul li:last-child')

 val = listItem
 val = list;

 val = list.childNodes;
 val = list.childNodes[0]
 val = list.childNodes[1]
 val = list.childNodes[1].nodeName;
 val = list.childNodes[1].nodeType;

 val = list.children;
 val = list.children[1];
 val = list.children[1].children[0]
 val = list.children[1].textContent= 'HI'

val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount;

val = listItem
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
val = listItem.previousElementSibling;
val = listItem.nextElementSibling
 console.log(val)