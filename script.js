const input = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    input.value = '';
  }
});
