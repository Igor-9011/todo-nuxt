import type { TodoItem } from '~/store/note_list/interfaces';

export function sliceString(str: String, length = 10) {
  return str.slice(0,length) + (str.length > length? '...' : '')
}

export function limitTodoList(arr: Array<TodoItem>, limit: number) {
  return arr.filter((item: TodoItem, index: number) => index < limit)
}