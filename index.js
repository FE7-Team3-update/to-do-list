import { addTodo as add } from "./addTodo.js";

const todos = [];

export function addTodo(text) {
  add(text, todos);
}
