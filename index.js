import { addTodo as add } from "./addTodo.js";
import { printTodoList as print } from "./printTodoList.js";

const todos = [];

export function addTodo(text) {
  add(text, todos);
}

export function printTodoList() {
  print(todos);
}
