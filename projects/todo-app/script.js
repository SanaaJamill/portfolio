// Todo Array
let todos = [

    {
        id: 1,
        title: "Learn JavaScript"
    },

    {
        id: 2,
        title: "Complete Assignment"
    },

    {
        id: 3,
        title: "Practice CRUD"
    }

];


// Next ID
let nextId = 4;


// =============================
// CREATE TODO
// =============================

function addTodo() {

    // Input se title lena
    let title = document
        .getElementById("todoTitle")
        .value
        .trim();


    // Empty check
    if (title === "") {

        alert("Please enter Todo Title!");

        return;
    }


    // New Todo create karna
    let newTodo = {

        id: nextId,

        title: title

    };


    // Array mein add karna
    todos.push(newTodo);


    // Next ID increase
    nextId++;


    // Input clear karna
    document.getElementById("todoTitle").value = "";


    // Todos display karna
    displayTodos();

}



// =============================
// READ / DISPLAY TODOS
// =============================

function displayTodos() {

    let todoList =
        document.getElementById("todoList");


    // Table clear
    todoList.innerHTML = "";


    // Har Todo ko table mein show karna
    todos.forEach(function(todo) {

        let row = `

            <tr>

                <td>
                    ${todo.id}
                </td>


                <td>
                    ${todo.title}
                </td>


                <td>

                    <button
                        class="edit-btn"
                        onclick="editTodo(${todo.id})"
                    >
                        Edit
                    </button>


                    <button
                        class="delete-btn"
                        onclick="deleteTodo(${todo.id})"
                    >
                        Delete
                    </button>

                </td>

            </tr>

        `;


        todoList.innerHTML += row;

    });

}



// =============================
// UPDATE TODO
// =============================

function editTodo(id) {

    // ID ke through Todo find karna
    let todo = todos.find(function(item) {

        return item.id === id;

    });


    // Agar Todo nahi mila
    if (!todo) {

        return;

    }


    // New title lena
    let newTitle = prompt(
        "Enter new Todo Title:",
        todo.title
    );


    // Cancel button press kiya
    if (newTitle === null) {

        return;

    }


    // Spaces remove
    newTitle = newTitle.trim();


    // Empty check
    if (newTitle === "") {

        alert("Todo Title cannot be empty!");

        return;

    }


    // Title update
    todo.title = newTitle;


    // Table update
    displayTodos();

}



// =============================
// DELETE TODO
// =============================

function deleteTodo(id) {

    // Confirmation
    let confirmDelete = confirm(
        "Are you sure you want to delete this Todo?"
    );


    if (confirmDelete) {

        // Todo remove karna
        todos = todos.filter(function(todo) {

            return todo.id !== id;

        });


        // Table update
        displayTodos();

    }

}



// =============================
// PAGE LOAD
// =============================

displayTodos();