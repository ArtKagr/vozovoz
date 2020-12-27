<template>
  <div class="d-flex flex-column">
    <span class="mb-2">{{ source === 'departure' ? 'Откуда' : 'Куда'}}</span>
    <div class="d-flex flex-column">
      <b-form-input
        id="input-invalid"
        placeholder="Введите населённый пункт"
        class="custom_input"
        :class="inputState ? '-active' : ''"
        @focus="showItemsList"
      />
      <div
        v-if="inputState"
        class="d-flex flex-column"
      >
        <div class="d-flex justify-content-end close_container">
          <span class="px-2 close_container-button" @click="hideItemsList">Закрыть</span>
        </div>
        <div class="custom_input_container d-flex flex-column">
          <div
            v-for="(city, key) in cities"
            :key="key"
            class="d-flex flex-column py-2 px-4 custom_input_item"
            @click="setCityFrom(city.name)"
          >
            <span>{{ city.name }}</span>
            <span class="custom_input_item-region">{{ city.region }}</span>
          </div>
        </div>
      </div>
      <div class="d-flex my-4">
        <div
          class="d-flex align-items-center pointer mr-4"
          @click="setDeparturePoint('address')"
        >
          <b-icon-circle-fill v-if="pointOption === 'address'" class="m-0 h5 mr-2" variant="secondary"></b-icon-circle-fill>
          <b-icon-circle v-else class="m-0 h5 mr-2" variant="secondary"></b-icon-circle>
          <span>От адреса</span>
        </div>
        <div
          class="d-flex align-items-center pointer"
          @click="setDeparturePoint('terminal')"
        >
          <b-icon-circle-fill v-if="pointOption === 'terminal'" class="m-0 h5 mr-2" variant="secondary"></b-icon-circle-fill>
          <b-icon-circle v-else class="m-0 h5 mr-2" variant="secondary"></b-icon-circle>
          <span>От терминала</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityPoint",
  data() {
    return {
      inputState: false,
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
    }
  },
  props: {
    source: {
      type: String,
      default: null
    }
  },
  computed: {
    pointOption() {
      if(this.source === 'departure') return this.$store.getters['main/getDepartureOption']
      else return this.$store.getters['main/getReceivingOption']
    }
  },
  methods: {
    showItemsList() {
      this.inputState = true
    },
    hideItemsList() {
      this.inputState = false
    },
    setCityFrom(city) {
      this.inputState = false
    },
    setDeparturePoint(point) {
      if(this.source === 'departure') this.$store.commit('main/UPDATE_DEPARTURE_OPTION', point)
      else this.$store.commit('main/UPDATE_RECEIVING_OPTION', point)
    }
  }
}
</script>

<style scoped>

</style>
