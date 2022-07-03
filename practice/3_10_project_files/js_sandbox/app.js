// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task');
// // clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// // taskInput.addEventListener('keydown', runEvent);

// // taskInput.addEventListener('keyup', runEvent);/

// // taskInput.addEventListener('focus', runEvent);
// // taskInput.addEventListener('blur', runEvent);

// // taskInput.addEventListener('input', runEvent);

 





// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value)
//   // console.log(taskInput.value);
//   e.preventDefault();
  
// }

// console.log(taskInput);

// Event bubling

// document.querySelector('.card-title').addEventListener('click',
// function() {
//   console.log('card title')
// })

// document.querySelector('.card-content').addEventListener('click',
// function() {
//   console.log('card content')
// })

// document.querySelector('.card').addEventListener('click',
// function() {
//   console.log('card')
// })

// document.querySelector('.col').addEventListener('click',
// function() {
//   console.log('col')
// })

// Event delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  
  if(e.target.parentElement.classList[0] === 'delete-item') {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();

  }
}
