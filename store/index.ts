import Vuex from 'vuex'
import * as root from './root'
import * as people from './modules/people'

export type RootState = root.State

const createStore = () => new Vuex.Store({
  state: root.state(),
  getters: root.getters,
  mutations: root.mutations,
  actions: root.actions,
  modules: {
    [people.name]: people
  }
})

export default createStore