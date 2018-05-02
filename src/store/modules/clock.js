const STORAGE_DURATION_KEY = 'duration'

// state
const state = {
  duration: window.localStorage.getItem(STORAGE_DURATION_KEY) ? window.localStorage.getItem(STORAGE_DURATION_KEY) : 25 * 60
}

const mutations = {
}

export default { state, mutations }
