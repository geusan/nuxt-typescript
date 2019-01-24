import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'
import { RootState } from 'store'

export const name = 'people'

export const types = {
  SELECT: 'SELECT',
  SET: 'SET',
}

export interface PersonContact {
  email: string
  phone: string
}

export interface PersonAddress {
  city: string
  country: string
  postalCode: string
  state: string
  street: string
}

export interface Person {
  id: number
  first_name: string
  last_name: string
  contact?: PersonContact
  gender?: string
  ip_address?: string
  avatar?: string
  address?: PersonAddress
}

export interface State {
  selected: number
  people: Person[]
}

export const namespaced = true

export const state = (): State => ({
  selected: 1,
  people: [
    {
      id: 1,
      first_name: 'Iron',
      last_name: 'man',
    },
    {
      id: 2,
      first_name: 'Beam',
      last_name: 'jim',
    },
    {
      id: 3,
      first_name: 'Vodka',
      last_name: 'tequila',
    },
    {
      id: 4,
      first_name: 'Pink',
      last_name: 'panda',
    },
  ],
})

export const getters: GetterTree<State, RootState> = {
  selectedPerson: (state): Person => {
    const p = state.people.find(person => person.id === state.selected)
    return p ? p : { id: -1, first_name: 'Please', last_name: 'select someone' }
  },
}

export interface Actions<S, R> extends ActionTree<S, R> {
  select(context: ActionContext<S, R>, id: number): void
}

export const actions: Actions<State, RootState> = {
  async select({ commit }, id: number): Promise<void> {
    commit(types.SELECT, id)
  },
  async setPeople({ commit }, people: Person[]): Promise<void> {
    commit(types.SET, people)
  },
}

export const mutations: MutationTree<State> = {
  [types.SELECT] (state, id: number) {
    state.selected = id
  },
  [types.SET] (state, people: Person[]) {
    state.people = people
  },
}
