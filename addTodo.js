const arr = [];

function addTodo(text) {
  const id = Date.now();
  arr.push({ id: id, text: text, completed: false });
}
