/**
 * method to add todo events
 */
function addEvent() {
    // get input value 
    var todoInputValue = document.getElementById('todoInput').value;
    // access todo list element
    var todoListElement = document.getElementById('todoList');
    // create id for new li element
    var newId = todoListElement.getElementsByTagName('li').length + 1;
    // add new value to todo list element
    var newListItemElement = document.createElement('li');
    newListItemElement.appendChild(document.createTextNode(todoInputValue));
    // create delete button element
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    // add event listner to delete button
    deleteButton.addEventListener('click', () => {
        // get id of li
        var idOfDeleteLi = document.getElementById('id'+newId); // id1
        // remove li from parent node using its id
        idOfDeleteLi.parentNode.removeChild(idOfDeleteLi);
    });
    // add delete button to li element
    newListItemElement.appendChild(deleteButton);
    // set new id to li element
    newListItemElement.setAttribute('id', 'id' + newId);
    // add all elements to ul element
    todoListElement.appendChild(newListItemElement);
    // clear user input
    document.getElementById('todoInput').value = '';
}

// method to clear all todo events
function clealAllEvent() {
  // access todo list element
  var todoListElement = document.getElementById('todoList');
  todoListElement.innerHTML = '';
  // clear todo input
  document.getElementById('todoInput').value = '';
}
