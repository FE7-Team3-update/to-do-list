const checked = (bool) => (bool ? "[x]" : "[ ]");

export function printTodoList(arr) {
  if (!Array.isArray(arr)) return;

  for (const { id, text, completed } of arr) {
    if (text === "") return;
    console.log(`[${id}] ${checked(completed)} ${text}`);
  }
}
