import Vue from 'vue'
import store from './utils/store'
import api from './utils/api.js'
import subjects from './utils/subjects'
import { capitalize } from './utils/helpers'

Vue.use(store)

export default new store.Store({
  state: {
    users: [],
    subjects,
    messages: [],
    mainSidebar: null
  },
  actions: {
    FETCH_USERS ({ state, commit }) {
      return api.fetchUsers(state.subjects.length)
        .then(data => commit('SET_USERS', data))
        .catch(() => commit('SET_USERS', []))
    }
  },
  mutations: {
    SET_USERS (state, data) {
      const users = data.map((user, i) => ({
        ...user,
        subject: state.subjects[i],
        name: {
          title: capitalize(user.name.title),
          first: capitalize(user.name.first),
          last: capitalize(user.name.last),
          fullName: `${capitalize(user.name.first)} ${capitalize(user.name.last)}`
        }
      }))
      Vue.set(state, 'users', users)
    },
    SET_MESSAGE (state, message) {
      state.messages.push(message)
    },
    RESET_MESSAGES (state) {
      Vue.set(state, 'messages', [])
    },
    TOGGLE_SIDEBAR (state, type) {
      const mainSidebarTypes = ['Info', 'Camera', 'Phone']
      if (!mainSidebarTypes.includes(type) || type === state.mainSidebar) {
        Vue.set(state, 'mainSidebar', null)
      } else {
        Vue.set(state, 'mainSidebar', type)
      }
    }
  }
})
