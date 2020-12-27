export const state = () => ({
  status: '',
  prices: {},
  locations: [],
  locationsFilter: {
    id: null,
    limit: null,
    offset: null,
    search: null,
    hasTerminals: null
  },
  priceFilter: {
    currency: 'RU',
    from: {
      guid: "e90f1820-0128-11e5-80c7-00155d903d03",
      type: 'terminal',
    },
    to: {
      guid: "e90f19de-0128-11e5-80c7-00155d903d03",
      type: 'terminal',
    },
    volume: '0.1',
    weight: '0.9',
    // cargo: {
    //   dimension: {
    //     quantity: 1,
    //     volume: 0.13,
    //     weight: 0.9,
    //   }
    // },
    // gateway: {
    //   dispatch: {
    //     point: {
    //       location: 'Санкт-Петербург',
    //       terminal: 'default',
    //     }
    //   },
    //   destination: {
    //     point: {
    //       location: 'Москва',
    //       terminal: 'default',
    //     }
    //   }
    // }
  },
  priceCalculate: {
    base: 0,
    cost: {
      currency: { RU: true }
    },
    delivery: 'На следующий день',
    total: 0,
    // cost: {
    //   action: null,
    //   base: 0,
    //   currency: { RU: true },
    //   discount: 0,
    //   total: 0
    // }
  }
  ,
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
  getStatus: (state) => JSON.parse(JSON.stringify(state.status)),
  getAddresses: (state) => JSON.parse(JSON.stringify(state.addresses)),
  getDepartureOption: (state) => state.departureOption,
  getReceivingOption: (state) => state.receivingOption,
  getPeriods: (state) => JSON.parse(JSON.stringify(state.periods)),
  getLocations: (state) => JSON.parse(JSON.stringify(state.locations)),
  getLocationsFilter: (state) => JSON.parse(JSON.stringify(state.locationsFilter)),
  getPriceCalculate: (state) => JSON.parse(JSON.stringify(state.priceCalculate)),
  getPriceFilter: (state) => JSON.parse(JSON.stringify(state.priceFilter)),
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  UPDATE_DEPARTURE_OPTION(state, option) {
    state.departureOption = option
  },
  UPDATE_RECEIVING_OPTION(state, option) {
    state.receivingOption = option
  },
  SAVE_PRICE_CALCULATE(state, priceCalculate) {
    state.priceCalculate = priceCalculate
  },
  SAVE_LOCATIONS(state, locations) {
    state.locations = locations
  },
  UPDATE_PRICE_LOCATION(state, query) {
    if(query.source === 'departure') state.priceFilter.from.guid = query.item
    else state.priceFilter.to.guid = query.item
  }
}

export const actions = {
  async fetchLocations({ commit, getters }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$post(`/location/get/?token=G934UM29wXG2IKYS9iX9oKQCeojkApHSEWAxOC5v`, getters.getLocationsFilter)
      commit('SET_STATUS', 'locations-fetched')
      commit('SAVE_LOCATIONS', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
  async fetchPrice({ commit, getters }) {
    commit('SET_STATUS', 'fetching')
    try {
      const data = await this.$axios.$post(`/price/get/?token=G934UM29wXG2IKYS9iX9oKQCeojkApHSEWAxOC5v`, getters.getPriceFilter)
      commit('SET_STATUS', 'data-fetched')
      commit('SAVE_PRICE_CALCULATE', data)
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
