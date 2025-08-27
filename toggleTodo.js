export function toggleTodo(id, arr){
  for (let todo of arr){
    if (todo.id === id) {
      todo.completed = !completed;
      break;
    }
  }
}
