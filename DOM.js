// Examine the document objects

//console.dir(document); // it display all the objects oj document
console.log(document.domain); // show domain
console.log(document.URL);
console.log(document.title);

document.title = 'new title'; // we can change the text by this

console.log(document.head); // we can excess any part of html page

console.log(document.all); // show all tags and detail of html
console.log(document.all[5]); // excess particular index or line of html
//document.all[5].textContent = 'title changed by index value';

// we can also log bunch of common things in the form of array
console.log(document.forms); // give the list of form (if no form exist then return empty array)
console.log(document.links);
console.log(document.images);

// difference between textContent and innerText
// textContent shows the content of the text.
// while innerText work on Style as well.

var fHead = document.getElementById('vs');
console.log(fHead.textContent);
console.log(fHead.innerText); // shows the style as well

document.getElementById('header').style.borderBottom = 'solid 3px #000';
// note above
// we use border-bottom inside real html but through js we do not use (-)

// innerHtml do not overRide the thing in (id) 
// instead it will create the html inside the id.
fHead.innerHTML = '<h1 id="ms" style="color: green;"> created by innerHtml </h1>';
fHead.style.fontWeight = 'bold';
