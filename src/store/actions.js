export const insertTodo = ({ commit }, todo) => {
  commit('SAVE_TODO', { todo })
}

export const updateTodoStatus = ({ commit }, data) => {
  commit('UPDATE_TODO_STATUS', { data })
}

export const updateTodoTitle = ({ commit }, data) => {
  commit('UPDATE_TODO_TITLE', { data })
}

export const deleteTodo = ({ commit }, todo) => {
  commit('DELETE_TODO', { todo })
}
