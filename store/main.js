export const state = () => ({
  status: '',
  prices: {},
  cities: [
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
    { value: 'msc', name: 'Москва', region: 'Город федерального значения' },
    { value: 'spb', name: 'Санкт-Петербург', region: 'Город федерального значения' },
  ],
  addresses: [
    { value: 'sd-sdf-df', name: 'Артиллерийская ул. 63' },
    { value: 'sd-sdf-df', name: 'Суворова ул. 42' },
  ],
  periods: [
    { value: '00:00', name: '07:00', flag: 'morning' },
    { value: '00:00', name: '07:30', flag: 'morning' },
    { value: '00:00', name: '08:00', flag: 'morning' },
    { value: '00:00', name: '08:30', flag: null },
    { value: '00:00', name: '09:00', flag: null },
    { value: '00:00', name: '09:30', flag: null },
    { value: '00:00', name: '10:00', flag: null },
    { value: '00:00', name: '10:30', flag: null },
    { value: '00:00', name: '11:00', flag: null },
    { value: '00:00', name: '11:30', flag: null },
    { value: '00:00', name: '12:00', flag: null },
    { value: '00:00', name: '12:30', flag: null },
    { value: '00:00', name: '13:00', flag: null },
    { value: '00:00', name: '13:30', flag: null },
    { value: '00:00', name: '14:00', flag: null },
    { value: '00:00', name: '14:30', flag: null },
    { value: '00:00', name: '15:00', flag: null },
    { value: '00:00', name: '15:30', flag: null },
    { value: '00:00', name: '16:00', flag: null },
    { value: '00:00', name: '16:30', flag: null },
    { value: '00:00', name: '17:00', flag: null },
    { value: '00:00', name: '17:30', flag: 'night' },
    { value: '00:00', name: '18:00', flag: 'night' },
    { value: '00:00', name: '18:30', flag: 'night' },

  ],
  departureOption: 'terminal',
  receivingOption: 'terminal',
})

export const getters = {
  getCities: (state) => JSON.parse(JSON.stringify(state.cities)),
  getAddresses: (state) => JSON.parse(JSON.stringify(state.addresses)),
  getDepartureOption: (state) => state.departureOption,
  getReceivingOption: (state) => state.receivingOption,
  getPeriods: (state) => JSON.parse(JSON.stringify(state.periods)),
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
