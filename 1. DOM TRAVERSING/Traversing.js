// Traversing in DOM

// use of parent Node
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);// it will give the parent node of that id

console.log(itemList.parentNode.parentNode); //  we can call it until reach the main parent

itemList.parentNode.style.marginRight = '50%';
itemList.parentNode.style.backgroundColor = 'green';

// parent element is similar to parentNode
console.log(itemList.parentElement);

// using child to call

// use of childNode
console.log('sing .childNodes',itemList.childNodes); // it will give all the child nodes in the form of array
// but the drawBack of doing this is that we also get the line breaker as text in array which will increase the length of array
// so we cannot run loop properly

// use of children
// we can use children instead of child to avoid extra space
console.log('using .children',itemList.children); // it return in form of collection list
console.log(itemList.children[1]); // it will give the first index
itemList.children[1].style.backgroundColor = 'red';

// use firstChild
console.log('using firstChild',itemList.firstChild); // it work like child and can give the extra space as #text which is useless
//instead we can use firstElementChild which will give the element only.
console.log('using firstElementChild',itemList.firstElementChild);
itemList.firstElementChild.textContent = 'text Changed by firstElementChild';

// we also have last child and lastElementChild
console.log('using lastChild',itemList.lastChild) // work same as firstChild
//use lastElementChild
console.log('using lastElementChild',itemList.lastElementChild);

//siblings in js
// next Sibling use
console.log('using nextSibling',itemList.nextSibling); // it is similar to first/last child that give extra space if any
// instead use nextElementSibling
console.log('using nextElementSibling',itemList.nextElementSibling);
itemList.nextElementSibling.textContent = 'text created by nextElementSibling'

// previous sibling
console.log('using previousSibling',itemList.previousSibling); // similar to nextSibling return extra space
//previousElementSibling
console.log('using previousElementSibling',itemList.previousElementSibling); // gives null if do not have previous element

//create element

//create a div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'helloJs';

// add a attribute
newDiv.setAttribute('title','setByJS'); // can set attributes by this

//add a text
var newDivText = document.createTextNode('Hello world , (text created by createTextNode in JS)'); // crete text by this

//add text to div
newDiv.appendChild(newDivText); // it will add a child to last

console.log(newDiv);

// inserting created element at particular place or before something

// to insert between target both target should call by common parent
var insert = document.querySelector('body .todo');
var ul = document.querySelector('body ul');

insert.insertBefore(newDiv,ul); //insert new div before that ul tag

var insertBeforeFirstItem = document.querySelector('div #items');
var item1 = document.querySelector('div li');

insertBeforeFirstItem.insertBefore(newDiv,item1);
