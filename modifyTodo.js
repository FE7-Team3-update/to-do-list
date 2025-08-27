function modifyTodo(id, text){
 for (let todo of arr){
    if (todo.id === id) {
      todo.text = text;
      break;
    }
  }
}

//todo.modifyTodo(b.id, "매일 아침 운동하기");