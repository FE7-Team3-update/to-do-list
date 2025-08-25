const arr = [];

function deleteTodo(id) {
  const targetIndex = arr.findIndex((todo) => todo.id === id);

  if (targetIndex !== -1) arr.splice(targetIndex, 1);
  else console.log(`ID: ${id}를 찾을 수 없습니다.`);
}
