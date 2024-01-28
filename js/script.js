////Adding Element to Dom:
// Create Element ; 

//add class and ID:
let olItem = document.createElement('li')
olItem.className = 'addOlItem';
olItem.id = 'addInOl_list';


//add attribute
olItem.setAttribute('title','A title to new elemet')
olItem.appendChild(document.createTextNode('Javascript'))
document.querySelector('ol').appendChild(olItem)

// console.log(olItem)


//now addding in unorder list: 

/// creating element
let ulItem = document.createElement('li')
let link = document.createElement('a')
// console.log(link)
console.log(ulItem)
//adding class and id
ulItem.className= 'a new class name'
ulItem.id = 'a new id';

//adding attribute
ulItem.setAttribute('title','this is a insta link')
link.setAttribute('href','www.instagram.com')
ulItem.appendChild(link)

link.appendChild(document.createTextNode('Instagram'))

//printing ulitem
console.log(ulItem)

