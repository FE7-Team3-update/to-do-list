const checked = (bool) => (bool ? "[x]" : "[ ]");

export function printTodoList(arr) {
  if (!Array.isArray(arr)) return;

  for (const { text, completed } of arr) {
    if (text === "") return;
    console.log(`${checked(completed)} ${text}`);
  }
}
