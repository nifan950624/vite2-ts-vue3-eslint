import {defineStore} from 'pinia'

interface State {
  count: number 
}

interface Actions {
  add: () => void
}

const useStore = defineStore<'home', State, {}, Actions>({
  id: 'home',
  state:() => {
    return  {
      count: 1
    } 
  },
  actions: {
    add() {
      this.count++
    }
  }
})

export default useStore