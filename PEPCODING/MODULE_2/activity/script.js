let addTodoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todosList = document.querySelector(".todos-list-container");


todoInput.addEventListener("keypress",function(e){
    if(e.key=="Enter")
    {
        addTodo();
    }

});
 addTodoButton.addEventListener("click", function(){
     addTodo();


 })

 function addTodo()
 {
     let todoInputValue = todoInput.value;
     if(todoInputValue)
     {
        appendTodo(todoInputValue)
         todoInput.value="";
     }
 }

 function appendTodo(todo)
 {
     let todoItemDiv = document.createElement("div");
     todoItemDiv.classList.add("todo-item");
     //IT WILL CREATE <div class="todo-item"></div>
     let pTag = document.createElement("p");
     pTag.classList.add("todo")
    pTag.textContent= todo;
    //It will create <p class="todo-input">text_content</p> 
    let  deleteTodoButton = document.createElement("Button");
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent = "Delete";

    deleteTodoButton.addEventListener("click",deleteTodo);  
    todoItemDiv.append(pTag);
    todoItemDiv.append(deleteTodoButton);

    todosList.append(todoItemDiv);

    function deleteTodo(e)
    {
        e.target.parentNode.remove();
    }

    
 }