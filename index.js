import { addTodo as add } from "./addTodo.js";
import { printTodoList as print } from "./printTodoList.js";
import { deleteTodo as remove } from "./deleteTodo.js";

const todos = [];

export function addTodo(text) {
  return add(text, todos);
}

export function printTodoList() {
  print(todos);
}

export function deleteTodo(id) {
  remove(id, todos);
}
