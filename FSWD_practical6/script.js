const API_URL = 'http://localhost:5000/tasks';
async function fetchTasks() {
const response = await fetch(API_URL);
const tasks = await response.json();
const taskList = document.getElementById('taskList');
if (taskList) {
taskList.innerHTML = '';
}
tasks.forEach(task => {
const li = document.createElement('li');
li.innerHTML = `
${task.title}
<button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
`;
if (taskList) {
taskList.appendChild(li);
}
});
}
async function addTask() {
const taskTitleElement = document.getElementById('taskTitle');
if (!taskTitleElement) return alert("Task title element not found");
const taskTitle = taskTitleElement.value;
if (!taskTitle) return alert("Task title cannot be empty");
await fetch(API_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: taskTitle })
});
document.getElementById('taskTitle');
fetchTasks();
}
async function deleteTask(taskId) {
await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });
fetchTasks();
}
document.addEventListener('DOMContentLoaded', fetchTasks);