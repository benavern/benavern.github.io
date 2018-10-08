import Vue from 'vue'
import store from './utils/store'
import api from './utils/api.js'
import subjects from './utils/subjects'

Vue.use(store)

export default new store.Store({
  state: {
    users: [],
    subjects
  },
  actions: {
    FETCH_USERS ({ state, commit }) {
      return api.fetchUsers(state.subjects.length)
        .then(data => commit('SET_USERS', data))
        .catch(() => commit('SET_USERS', []))
    }
  },
  mutations: {
    SET_USERS (state, users) {
      users.map((user, i) => {
        user['subject'] = state.subjects[i]
        return user
      })
      Vue.set(state, 'users', users)
    }
  }
})
