const checked = (bool) => (bool ? "[x]" : "[ ]");

export function printTodoList(arr) {
  for (const { text, completed } of arr) {
    console.log(`${checked(completed)} ${text}`);
  }
}
