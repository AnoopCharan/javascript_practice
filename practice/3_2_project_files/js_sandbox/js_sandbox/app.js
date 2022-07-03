// let val;

// val = document;

// val = document.getElementsByTagName('meta');

// val = document.head;
// val = document.domain;
// val = document.URL;

// val = document.forms;
// val = document.links;

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// scriptsArr = Array.from(document.scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));


// })

// let title = document.getElementById('task-title')

// console.log(title.innerText);
// title.innerText = 'New tasks';

// // title.style.display = 'none';

// title.innerHTML = '<h1> heading 1 </h1>';

// // query selector

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));

// //
// let ist = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(document.getElementsByClassName('collection-item'));

// console.log(document.querySelectorAll('ul.collection'));

// // traversing DOM

// const list = document.querySelector('ul.collection');
// const listitem = document.querySelector('li.collection-item:first-child');

// val = listitem;
// val =list;
// // child nodes
// val = list.childNodes;
// // val = list.childNodes[0].nodeType;

// // node types
// // 1- element
// // 2 - attribute
// // 3- text-node
// // 8 - comment
// // 9 - document itself
// // 10 - doctype

// // get children element nodes
// val = list.children[0];
// val.textContent = 'anoop'

// // children of children
// val = list.children[3].children;

// val = list.firstChild;

// val = list.firstElementChild;

// // parents
// val = listitem.parentNode;
// val = listitem.parentElement;

// // siblings
// val = list.nextSibling;
// val = list.nextElementSibling;
// val = list.previousElementSibling
// console.log(val);

// // create elements
// const li = document.createElement('li');

// // add class
// li.className = 'collection-list';

// // add attribute
// li.setAttribute('title', 'new item');

// // create text node and append
// li.appendChild(document.createTextNode('hello hello!'));

// // create new link element
// const link = document.createElement('a');
// link.className= 'delete-item secondary-content';
// // add icon
// link.innerHTML = '<i class="fa fa-remove"></i>';


// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// li.appendChild(link);

// console.log(li.outerHTML);


// !!!!Remove replacce elements

// replace element

// const newHeading = document.createElement('h2');


// // add id
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('List of items'));

// // get old heading
// const oldHeading = document.getElementById('task-title');

// // parent 
// const cardAction = document.querySelector('.card-action');

// // replace
// cardAction.replaceChild(newHeading, oldHeading);



// console.log(newHeading);
// console.log(cardAction);

// // remove items

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul')


// console.log(lis);

// lis[0].remove();

// list.removeChild(lis[3]);

// console.log(lis);

// // classes and atributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;
// val = link.className;
// val = link.classList;
// // val = link.classList[0];
// // add class
// link.classList.add('anoop');
// link.classList.remove('anoop');

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e) {
//   console.log('Hello world')

//   e.preventDefault();
// })

// document.querySelector('.clear-tasks').addEventListener('mouseover', onclick);

// function onclick(e) {
//   let val;

//   val =e.target.classList;
//   // val = e.target.
//   val = e.type;
//   console.log(val);
// }

// Mouse events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent);
// double click
// clearBtn.addEventListener('dblclick', runEvent);

// mouse hold down
// clearBtn.addEventListener('mouseup', runEvent);

// mouse enter
// card.addEventListener('mouseenter', runEvent);
// // mouse leave
// card.addEventListener('mouseleave', runEvent);
// // mouse over
// card.addEventListener('mouseover', runEvent);

// mouse move
card.addEventListener('mousemove', runEvent);





// event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)
  heading.textContent = `Mouse X: ${e.offsetX}, Mouse Y: ${e.offsetY}`

  document.body.style.backgroundColor= `rgb(${e.offsetX},${e.offsetY}, 40)`
}

console.log(val);