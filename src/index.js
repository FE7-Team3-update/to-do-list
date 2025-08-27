import { addTodo as add } from "./todo/addTodo.js";
import { printTodoList as print } from "./todo/printTodoList.js";
import { deleteTodo as remove } from "./todo/deleteTodo.js";
import { modifyTodo as modify } from "./todo/modifyTodo.js";
import { toggleTodo as toggle } from "./todo/toggleTodo.js";

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

export function modifyTodo(id, text) {
  modify(id, text, todos);
}

export function toggleTodo(id) {
  toggle(id, todos);
}
