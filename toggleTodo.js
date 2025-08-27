export function toggleTodo(id, arr){
  for (const todo of arr){
    if (todo.id === id) {
      todo.completed = !todo.completed;
      break;
    }
  }
}
