let todolistt =[{
     name: 'make dinner',
     dueDate: '2022-12-22'
}, {
     name: 'wash dishes',
     dueDate: '2022-12-22'
} ];


function rendertodo(){
    
    let todoListHTML = "";
    
    for(let i=0; i<todolistt.length; i++){
        const todo = todolistt[i];
        const name = todo.name;
        const date = todo.dueDate;
        
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="todo_delete" onclick="
        todolistt.splice(${i}, 1);
        rendertodo();
        " >Delete</button>
        
        `;
        
        todoListHTML += html;
    }
    
    document.querySelector(".todo_list_showing").innerHTML = todoListHTML;
}




function todolist(){
    let text = document.querySelector(".input_text");
    const name = text.value;
    
    let date = document.querySelector(".input_date");
    const duedate = date.value;
    
    todolistt.push({
            name: name,
            dueDate: duedate,
            
        });
        
        rendertodo();

     dos
        text.value = "";
    
}
