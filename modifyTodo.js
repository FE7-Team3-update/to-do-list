export function modifyTodo(id, text, arr){
 for (const todo of arr){
    if (todo.id === id) {
      todo.text = text;
      break;
    }
  }
}
