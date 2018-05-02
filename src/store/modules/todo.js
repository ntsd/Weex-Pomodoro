import _ from 'lodash'

const STORAGE_TODOS_KEY = 'todos'

// state
const state = {
  all: window.localStorage.getItem(STORAGE_TODOS_KEY) ? JSON.parse(window.localStorage.getItem(STORAGE_TODOS_KEY)) : []
}

// update state
const updateState = (state, todo) => {
  var index = _.indexOf(state.all, _.find(state.all, {id: todo.id}))
  state.all.splice(index, 1, todo)
}

// update local storage
const updateLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

// mutations
const mutations = {
  'SAVE_TODO' (state, { todo }) {
    state.all.unshift(todo)
    updateLocalStorage(STORAGE_TODOS_KEY, JSON.stringify(state.all))
  },
  'UPDATE_TODO_STATUS' (state, { data }) {
    data.todo.completed = data.completed
    updateState(state, data.todo)
    updateLocalStorage(STORAGE_TODOS_KEY, JSON.stringify(state.all))
  },
  'UPDATE_TODO_TITLE' (state, { data }) {
    data.todo.title = data.title
    updateState(state, data.todo)
    updateLocalStorage(STORAGE_TODOS_KEY, JSON.stringify(state.all))
  },
  'DELETE_TODO' (state, { todo }) {
    state.all = _.remove(state.all, (item) => { return item.id !== todo.id })
    updateLocalStorage(STORAGE_TODOS_KEY, JSON.stringify(state.all))
  }
}

export default { state, mutations }
