export interface TodoItem {
    id: string,
    text: string,
    succes: boolean,
}

export interface NoteItem {
    id: string
    title: string
    todo_list: Array<TodoItem>
}