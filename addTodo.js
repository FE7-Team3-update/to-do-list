export function addTodo(text, arr) {
  const id = Date.now();
  arr.push({ id: id, text: text, completed: false });
}
