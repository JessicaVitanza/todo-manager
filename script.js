const task1 = new ToDo('compra il tabacco', ToDo.PRIORITY.veryHigh, ['droga']);
const task2 = new ToDo('compra il pane', ToDo.PRIORITY.medium, ['spesa', 'casa']);
const task3 = new DeadLineToDo('fai gli auguri alla nonna', new Date(2022, 6, 9), ToDo.PRIORITY.low, ['affetti']);
const task4 = new DeadLineToDo('chiama pietro');

const toDoList = [task1, task2, task3, task4];

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


function displayToDoWithTemplate(){
const template = 
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

const toDoListContainer = document.getElementById('todo-list-container');
for (let i = 0; i < toDoList.length; i++) {
     const todo = toDoList[i];

const div = document.createElement('div');
const todoTemplate = template.replace('#TODONAME', todo.name)
                             .replace('#CREATIONDATE', todo.creationDate.toISOString());
                             
div.innerHTML = todoTemplate;                            
toDoListContainer.appendChild(div)

const todoContainer = div.querySelector('.todo-container');
todoContainer.style.borderColor = todo.priority.color;

 
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

displayToDoWithTemplate();


const doneList = [];