export function modifyTodo(id, text, arr){
 for (let todo of arr){
    if (todo.id === id) {
      todo.text = text;
      break;
    }
  }
}
