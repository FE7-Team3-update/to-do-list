export function addTodo(text, arr) {
  if (!Array.isArray(arr)) return;

  const id = crypto.randomUUID();
  const todo = { id: id, text: text, completed: false };
  arr.push(todo);

  return todo; // 테스트 코드 실행을 위해 반환
}
