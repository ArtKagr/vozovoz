export const state = () => ({
  status: '',
  prices: {},
  departureOption: 'terminal',
  receivingOption: 'terminal',
})

export const getters = {
  getDepartureOption: (state) => state.departureOption,
  getReceivingOption: (state) => state.receivingOption
}

export const mutations = {
  UPDATE_DEPARTURE_OPTION(state, option) {
    state.departureOption = option
  },
  UPDATE_RECEIVING_OPTION(state, option) {
    state.receivingOption = option
  },
  SAVE_PRICES(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async getPrice({ commit }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$post(`/get-price`)
      commit('SET_STATUS', 'data-fetched')
      commit('SAVE_PRICES', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
