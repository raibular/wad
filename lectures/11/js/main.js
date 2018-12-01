//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*
var todos = [];
function add() {
    var task = document.getElementById("task").value; //it is used to get value of the input text
    todos.push(task);//Add a new item to an array
    document.getElementById('todos').innerText = todos;//Get the inner text of an element
}


//============================================
//-----------  STEP - 2 ----------------------
//============================================


var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';//input text is equal to space/NULL
    show();//call show function
}

function show() {
    var ul = document.createElement('ul');//The createElement() method creates an Element Node with the specified name.
    ul.classList.add("list-group");//The classList property returns the class name(s) of an element/This property is useful to add CSS classes on an element
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');

        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);//The appendChild() method appends a node as the last child of a node.
    }
    document.getElementById('todos').appendChild(ul);
}


//============================================
//-----------  STEP - 3 ----------------------
//============================================



function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');//The localStorage and sessionStorage properties allow to save key/value pairs in a web browser
    if(todos_str !== null)
        todos = JSON.parse(todos_str);//The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task,isDone:false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));//The JSON.stringify() function will convert any dates into strings.
    show();
    return false;

}



function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        var x = document.getElementById('li').checked;
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +



            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);

    }

    document.getElementById('todos').appendChild(ul);
}
show();
*/




//============================================
//-----------  STEP - 4 ----------------------
//============================================


function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){  //String trim() This function returns a new string, without any of the leading or the trailing white spaces
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');//The getAttribute() method returns the value of the attribute with the specified name, of an element
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;


}
function edit() {

    var task = $(button).parents('li[name="task"]');
    var span = task.children('span[name="Name"]');
    var edit = task.children('button[name="edit"]');
    var save = addElement.button('Save', 'taskItem.save(this)');
    var input = $('<input>');

    input.val(task.data('name'));
    input.attr('name', 'Edit');

    span.replaceWith(input);
    edit.replaceWith(save);



}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);



    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');//This property is useful to remove CSS classes on an element
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();
function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' +'<p  id="\'+i+\'" onclick="strikethroug(this)">'+'<input type="checkbox">'+ todos[i].task +'</p>' +'</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>'+
            '<button class="btn btn-edit" id1="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    var buttons2 = document.getElementsByClassName('btn-edit');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
        buttons2[i].addEventListener('click',edit);
    }
}

function resetval(){
    var id = this.getAttribute('id1');
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.splice(id,1);
    todos.push({task: task, isDone: false});
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}





//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

