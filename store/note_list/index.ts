import { defineStore } from 'pinia'
import { uid } from 'uid';
import type { NoteItem, TodoItem } from './interfaces'
import { writeLocalStorage, readLocalStorage } from '~/utils/cryptography/cryptography'
//TODO: Почему VsCode требует поставить слово type после import?
interface State {
  noteList: Array<NoteItem>
  hasSave: boolean
}


export const useNoteStore = defineStore('note', {
  state: (): State => ({
    noteList: [],
    hasSave: false
  }),
  actions: {
    save() {
      writeLocalStorage('note_list', this.noteList)
      this.hasSave = false
    },
    setNoteList() {
      const note_list = readLocalStorage('note_list')
      if (!note_list) {
        writeLocalStorage('note_list', [])
      }
      this.noteList = readLocalStorage('note_list')
    },
    addNoteItem(note_item: NoteItem) {
      note_item.id = 'note_' + uid(16)
      this.noteList.unshift(note_item)
      writeLocalStorage('note_list', this.noteList)
    },
    removeNoteItem(note_id: string) {
      this.noteList = this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id !== note_id) {
          return note_item
        }
      })
      writeLocalStorage('note_list', this.noteList)
    },
    updateNoteTitle(note_id: string, new_title: string) {
      this.noteList = this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id === note_id) {
          note_item.title = new_title
        }
        return note_item
      })
      this.hasSave = true
    },
    addTodoItem(note_id: string, todo_item: TodoItem) {
      this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id === note_id) {
          todo_item.id = 'todo_' + uid(16)
          note_item.todo_list.push(todo_item)
        }
      })
      this.hasSave = true
    },
    removeTodoItem(note_id: string, todo_id: string) {
      this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id === note_id) {
          note_item.todo_list = note_item.todo_list.filter((todo_item: TodoItem) => {
            if (todo_item.id !== todo_id) {
              return todo_item
            }
          })
        }
      })
      this.hasSave = true
    },
    updateTodoItem(note_id: string, todo_id: string, todo: TodoItem) {
      this.noteList = this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id === note_id) {
          note_item.todo_list = note_item.todo_list.filter((todo_item: TodoItem) => {
            if (todo_item.id === todo_id) {
              todo_item.text = todo.text
              todo_item.succes = todo.succes
              //TODO: Почему нельзя просто вернуть объект todo. Работает только если передать каждому полю значение по отдельности
            }
            return todo_item
          })
          console.log(note_item)
        }
        return note_item
      })
      this.hasSave = true
    },
    getNoteById(note_id: string): NoteItem {
      return this.noteList.filter((note_item: NoteItem) => {
        if (note_item.id === note_id) {
          return note_item
        }
      })[0]
    }
  }
})