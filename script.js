const task1 = new ToDo('compra il tabacco', ToDo.PRIORITY.veryHigh, ['droga']);
const task2 = new ToDo('compra il pane', ToDo.PRIORITY.medium, ['spesa', 'casa']);
const task3 = new DeadLineToDo('fai gli auguri alla nonna', new Date(2022, 6, 9), ToDo.PRIORITY.low, ['affetti']);
const task4 = new DeadLineToDo('chiama pietro');

let toDoList = [task1, task2, task3, task4];

const doneList = [];

const todoTemplate = 
`
<div class="todo-container">   
<div class="first-container">
<div class="name-and-tag-container">
<span class="todo-name">#TODONAME</span>
<div class="tag-container">
</div>
</div>
<button class="done-button">Fatto</button>
</div>

<div class="date-container">
<span>#CREATIONDATE</span>
</div>

</div>
` 

const doneTemplate = 
`
<div class="todo-container">   
<div class="first-container">
<div class="name-and-tag-container">
<span class="todo-name">#TODONAME</span>
<div class="tag-container">
</div>
</div>
</div>

<div class="date-container">
<span>#CREATIONDATE</span>
</div>

</div>
` 


//___________________________________________________________________________________________

// function displayToDo() {
  
// const container = document.getElementById('todo-container');

// for (let i = 0; i < toDoList.length; i++) {
//     const todo = toDoList[i];
    
//     const toDoDiv = document.createElement('div');
//     toDoDiv.classList.add('todo-div');
//     container.appendChild(toDoDiv);


//     const firstContainer = document.createElement('div');
//     firstContainer.classList.add('first-container');
//     toDoDiv.appendChild(firstContainer);


//     const nameAndTagsContainer = document.createElement('div');
//     nameAndTagsContainer.classList.add('name-and-tags-container');
//     firstContainer.appendChild(nameAndTagsContainer);


//     const toDoNameSpan = document.createElement('span');
//     const nameNode = document.createTextNode(todo.name);
//     toDoNameSpan.appendChild(nameNode);
//     nameAndTagsContainer.appendChild(toDoNameSpan);


//     const tagContainer = document.createElement('div');
//     tagContainer.classList.add('tag-container');
//     nameAndTagsContainer.appendChild(tagContainer);


//     for (const tag of todo.tags) {   
//     const tagSpan = document.createElement('span');
//     const tagNode = document.createTextNode(tag);
//     tagSpan.appendChild(tagNode);
//     tagContainer.appendChild(tagSpan);  
//     }

    
//     const doneButton = document.createElement('button');
//     const doneNode = document.createTextNode('completato');
//     doneButton.appendChild(doneNode);
//     firstContainer.appendChild(doneButton);


//     const dateContainer = document.createElement('div');
//     dateContainer.classList.add('date-container');
//     toDoDiv.appendChild(dateContainer);


//     const startDateSpan = document.createElement('span');
//     const startDateNode = document.createTextNode(todo.creationDate.toISOString());
//     startDateSpan.appendChild(startDateNode);
//     dateContainer.appendChild(startDateSpan);


//     if (todo.deadLineDate) {   
//     const endtDateSpan = document.createElement('span');
//     const endtDateNode = document.createTextNode(todo.deadLineDate.toISOString());
//     endtDateSpan.appendChild(endtDateNode);
//     dateContainer.appendChild(endtDateSpan);
//     }
// }

// }

// displayToDo();
//___________________________________________________________________________________________




// TEMPLATE - DA FARE ________________________________________________________________________
                                // come       dove           chi                             
function displayToDoWithTemplate(template, containerName, todoArray){

const mainContainer = document.getElementById(containerName);
mainContainer.innerHTML = ' ';

for (let i = 0; i < todoArray.length; i++) {
     const todo = todoArray[i];

const div = document.createElement('div');
const todoTemplate = template.replace('#TODONAME', todo.name)
                             .replace('#CREATIONDATE', todo.creationDate.toISOString());
                             
div.innerHTML = todoTemplate;                            
mainContainer.appendChild(div)

const doneButton = div.querySelector('.done-button');
if (doneButton) {
    doneButton.style.backgroundColor = todo.priority.color;
    doneButton.onclick = () => revomeDoneToDo(todo);
}

 
if (todo.deadLineDate) {
// const dateContainer = div.getElementsByClassName('date-container')[0];
const dateContainer = div.querySelector('.date-container');
const dateSpan = document.createElement('span');
const dateNode = document.createTextNode(todo.deadLineDate.toISOString());
dateSpan.appendChild(dateNode);
dateContainer.appendChild(dateSpan);
}


const tagContainer = div.querySelector('.tag-container');
for (const tag of todo.tags) {
const tagSpan = document.createElement('span');
const node = document.createTextNode(tag);
tagSpan.classList.add('tag');
tagSpan.appendChild(node);
tagContainer.appendChild(tagSpan);

}

}

}



// TEMPLATE - FATTI __________________________________________________________________________

// function displayDoneWithTemplate(){

//      const doneTemplate = 
//      `
//      <div class="todo-container">   
//      <div class="first-container">
//      <div class="name-and-tag-container">
//      <span class="todo-name">#TODONAME</span>
//      <div class="tag-container">
//      </div>
//      </div>
     
//      </div>
     
//      <div class="date-container">
//      <span>#CREATIONDATE</span>
//      </div>
     
//      </div>
//      `
     
//      const doneContainer = document.getElementById('done-container');
//      doneContainer.innerHTML = '';
     
//      for (let i = 0; i < doneList.length; i++) {
//           const todo = doneList[i];
     
//      const div = document.createElement('div');
//      const todoTemplate = template.replace('#TODONAME', todo.name)
//                                   .replace('#CREATIONDATE', todo.creationDate.toISOString());
                                  
//      div.innerHTML = todoTemplate;                            
//      doneContainer.appendChild(div)
     
      
//      if (todo.deadLineDate) {
//      // const dateContainer = div.getElementsByClassName('date-container')[0];
//      const dateContainer = div.querySelector('.date-container');
//      const dateSpan = document.createElement('span');
//      const dateNode = document.createTextNode(todo.deadLineDate.toISOString());
//      dateSpan.appendChild(dateNode);
//      dateContainer.appendChild(dateSpan);
//      }
     
     
//      const tagContainer = div.querySelector('.tag-container');
//      for (const tag of todo.tags) {
//      const tagSpan = document.createElement('span');
//      const node = document.createTextNode(tag);
//      tagSpan.classList.add('tag');
//      tagSpan.appendChild(node);
//      tagContainer.appendChild(tagSpan);
     
//      }
     
//      }
     
//      }
//___________________________________________________________________________________________


displayToDoWithTemplate(todoTemplate, "todo-list-container", toDoList);

function revomeDoneToDo(todo) {
toDoList = toDoList.filter(t => t.name !== todo.name);
displayToDoWithTemplate(todoTemplate, "todo-list-container", toDoList);
doneList.push(todo);
displayToDoWithTemplate(doneTemplate, "done-container", doneList);
}


function orderByName() {
 toDoList.sort(compareByName);
 displayToDoWithTemplate(todoTemplate, "todo-list-container", toDoList);
 doneList.sort(compareByName);  
 displayToDoWithTemplate(doneTemplate, "done-container", doneList); 
}

function compareByName(todo1, todo2) {
 return todo1.name.localeCompare(todo2.name);
}


function orderByDate() {
     toDoList.sort(compareByDate);
     displayToDoWithTemplate(todoTemplate, "todo-list-container", toDoList);
     doneList.sort(compareByDate);  
     displayToDoWithTemplate(doneTemplate, "done-container", doneList);     
}

function compareByDate(todo1, todo2) {
 return todo1.creationDate.getTime() - todo2.creationDate.getTime();
}

const dateButton = document.getElementsByTagName('date-order-btn');
dateButton.onclick = orderByDate;


function orderByPriority() {
     toDoList.sort(compareByPriority);
     displayToDoWithTemplate(todoTemplate, "todo-list-container", toDoList);
     doneList.sort(compareByPriority);  
     displayToDoWithTemplate(doneTemplate, "done-container", doneList);     
}

function compareByPriority(todo1, todo2) {
 return todo2.priority.order - todo1.priority.order;
}

function logToConsole(event) {
 console.log(event);
}

function changeButton(button) {
 button.style.backgroundColor = 'red';
}

function removeButtonColor(event) {
 event.target.style.backgroundColor = '';
}

const priorityButton = document.getElementById('priority-order-btn');
priorityButton.addEventListener('click', orderByPriority);
priorityButton.addEventListener('click', logToConsole);
priorityButton.addEventListener('mouseenter', () => changeButton(priorityButton));
priorityButton.addEventListener('mouseleave', removeButtonColor);