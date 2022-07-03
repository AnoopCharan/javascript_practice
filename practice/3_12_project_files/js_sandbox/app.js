// set local storage item
// local storage persist until deleted, session storage clears once session ends

// localStorage.setItem('name', 'anoop');

// // sessionStorage.setItem('name', 'anoop');

// // remove

// // get
// const myname = localStorage.getItem('name');
// console.log(myname);

document.querySelector('form').addEventListener('submit', 
function(e) {
  const task = document.getElementById('task').value;
  // localStorage.setItem('task', task);
  // alert('task saved')

  let tasks;

  if( localStorage.getItem('tasks') === null) {
    tasks = [];
  
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('task saved');


  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(typeof tasks);


tasks.forEach(function(task) {
  console.log(`TASK: ${task}`);
})