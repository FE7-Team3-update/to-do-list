import { addTodo as add } from "./addTodo.js";
import { printTodoList as print } from "./printTodoList.js";
import { deleteTodo as remove } from "./deleteTodo.js";
import { modifyTodo as modify } from "./modifyTodo.js";
import { toggleTodo as toggle } from "./toggleTodo.js";

const todos = [];

export function addTodo(text) {
  add(text, todos);
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