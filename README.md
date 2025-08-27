# To-Do List

## 프로젝트 개요

- 바닐라 JavaScript **함수 중심 설계**로 To-do list의 로직 구현
- UI 없이 **콘솔에서 명령형 API**로 조작

> ❗️이 버전은 DOM 조작 없이 함수 호출만으로 모든 동작을 수행합니다.

## 전체 기능

| 기능                 | 함수명               | 설명                                |
| -------------------- | -------------------- | ----------------------------------- |
| 할 일 추가           | addTodo(text)        | 할 일을 입력 받아 todos 배열에 추가 |
| 할 일 삭제           | deleteTodo(id)       | 등록된 할 일 삭제                   |
| 할 일 수정           | modifyTodo(id, text) | 등록된 할 일 수정                   |
| 할 일 완료           | toggleTodo(id)       | 등록된 할 일의 완료 여부 토글       |
| 현재 할 일 목록 출력 | printTodoList()      | 현재 할 일 목록을 반복 콘솔 출력    |

## 데이터 구조

```JSON
{
  "id": "id",
  "text": "text",
  "completed": false
}
```
