function toggleTodo(id){
  for (let todo of arr){
    if (todo.id === id) {
      todo.completed = !completed;
      break;
    }
  }
}