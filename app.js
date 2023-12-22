const todosList = document.getElementById('todos-list');

async function renderTodo() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const response = await data.json();
    console.log(response);
    response.slice(0,20).map((item)=>{
        todosList.innerHTML+=`
        <h2>ID:${item.id}</h2>
        <h3>ID:${item.title}</h3>
        <button onclick="nextpage(${item.id})">See More</button><hr>
        `
    })
}
renderTodo();

function nextpage(id){
    console.log(id);
    localStorage.setItem("id", JSON.stringify(id));
    window.location='home.html'
}