import { defineStore } from 'pinia'

interface StateInterface {
  isRemoveModalShow: boolean
  isSaveModalShow: boolean
  isCreateNoteModalShow: boolean
  isBackdropShow: boolean
  selectNoteId: string
}

export const useGlobalStore = defineStore('globalStore', {
  state: (): StateInterface => ({
    isRemoveModalShow: false,
    isSaveModalShow: false,
    isCreateNoteModalShow: false,
    isBackdropShow: false,
    selectNoteId: '',
  }),
  actions: {
    setSelectId(id: string) {
      this.selectNoteId = id
    },
    getSelectId(): string {
      return this.selectNoteId
    },
    hideAllModalls() {
      this.isRemoveModalShow = false
      this.isSaveModalShow = false
      this.isCreateNoteModalShow = false
      this.isBackdropShow = false
    },
    showRemoveModal() {
      this.isRemoveModalShow = true
      this.isBackdropShow = true
    },
    showSaveModal() {
      this.isSaveModalShow = true
      this.isBackdropShow = true
    },
    showCreateNoteModall() {
      this.isCreateNoteModalShow = true
      this.isBackdropShow = true
    }
  }
})

