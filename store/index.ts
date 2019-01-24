import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'

// More info about store: https://vuex.vuejs.org/en/core-concepts.html
// See https://nuxtjs.org/guide/vuex-store#modules-mode
// structure of the store:
  // types: Types that represent the keys of the mutations to commit
  // state: The information of our app, we can get or update it.
  // getters: Get complex information from state
  // action: Sync or async operations that commit mutations
  // mutations: Modify the state

export const types = {}

export interface RootState { }

export const state = (): RootState => ({})

export const getters: GetterTree<RootState, RootState> = {}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit() {
    // nuxt init methods
  },
}

export const mutations: MutationTree<RootState> = {}
