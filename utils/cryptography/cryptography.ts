import SecureLS from 'secure-ls'
import type { NoteItem } from '~/store/note_list/interfaces'
let ls: any

// TODO: Как избавиться от условия if (process.client)
if (process.client) {
    ls = new SecureLS({ encodingType: 'aes' })
}

const writeLocalStorage = (key: string, value: Array<NoteItem>): void => {
    if (process.client) {
        ls.set(key, value)
    }
}

const readLocalStorage = (key: string): any => {
    if (process.client) {
        return ls.get(key)
    }
}

export {
    writeLocalStorage,
    readLocalStorage
}