
const id = JSON.parse(localStorage.getItem('id'));
console.log(id);

async function renderTodo() {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const response = await data.json();
        console.log(response);

        // Render the specific todo item on the screen
        const todoDetails = document.getElementById('todo-details');
        todoDetails.innerHTML = `
            <h2>ID: ${response.id}</h2>
            <h3>Title: ${response.title}</h3>
            <p>Completed: ${response.completed ? 'Yes' : 'No'}</p>
            <p>User ID: ${response.userId}</p>
        `;
    } catch (error) {
        console.error('Error fetching and rendering todo:', error);
    }
}

renderTodo();
