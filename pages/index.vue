<template>
  <div class="d-flex w-100">
    <div class="d-flex flex-column m-3 w-70 mx-auto">
      <div class="d-flex w-100 justify-content-center align-items-center my-4">
        <span class="mr-4 h5 calculate_step_point">1</span>
        <span class="h4">Выбор направления перевозки</span>
      </div>
      <div class="d-flex w-100 mb-4">
        <div class="d-flex container">
          <div class="d-flex flex-column w-100">
            <CityPoint source="departure" />
            <Address v-if="departurePoint === 'address'" source="departure" />
            <Terminal v-else source="departure" />
          </div>
        </div>
        <div class="mt-4 ml-4">
          <b-icon-arrow-down-up class="m-0 h5 mt-3 custom_icon-arrows"/>
        </div>
        <div class="d-flex container">
          <div class="d-flex flex-column w-100">
            <CityPoint resource="receiving" />
            <Address source="receiving" v-if="receivingPoint === 'address'" />
            <Terminal source="receiving" v-else />
          </div>
        </div>
      </div>
      <div class="d-flex mx-4 cargo mb-4">
        <div class="d-flex flex-column w-20 mr-4">
          <span class="mb-4">Вес</span>
          <div class="d-flex align-items-center cargo-calculate">
            <b-input-group>
              <b-form-input class="cargo-calculate-input" type="number" no-wheel v-model.number="weight" @change="setWeight"></b-form-input>
              <b-input-group-prepend is-text>
                <span>кг</span>
              </b-input-group-prepend>
            </b-input-group>
          </div>
        </div>
        <div class="d-flex flex-column w-20 ml-4">
          <span class="mb-4">Объем</span>
          <div class="d-flex align-items-center cargo-calculate">
            <b-input-group>
              <b-form-input class="cargo-calculate-input" type="number" no-wheel v-model.number="volume" @change="setValue"></b-form-input>
              <b-input-group-prepend is-text>
                <span>м<sup>3</sup></span>
              </b-input-group-prepend>
            </b-input-group>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4 w-70 mx-auto">
        <div class="d-flex align-items-center total_cost">
          <span class="mr-2">Итого:</span>
          <div class="d-flex align-items-center">
            <span class="mr-1">{{ priceCalculate && priceCalculate.total ? priceCalculate.total : 0 }}</span>
            <span>₽</span>
          </div>
        </div>
        <b-button variant="danger" class="custom_button px-4" @click="fetchPrice">Пересчитать</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Address from "../components/Address";
import Terminal from "../components/Terminal";
import CityPoint from "../components/CityPoint";
export default {
  name: 'Index',
  data() {
    return {
      weight: 0.1,
      volume: 0.01
    }
  },
  watch: {
    priceFilter: {
      handler() {
        this.$store.dispatch('main/fetchPrice')
      },
      deep: true
    }
  },
  components: { CityPoint, Terminal, Address },
  computed: {
    departurePoint() {
      return this.$store.getters['main/getDepartureOption']
    },
    receivingPoint() {
      return this.$store.getters['main/getReceivingOption']
    },
    priceFilter() {
      return this.$store.getters['main/getPriceFilter']
    },
    priceCalculate() {
      return this.$store.getters['main/getPriceCalculate']
    }
  },
  methods: {
    fetchPrice() {
      this.$store.dispatch('main/fetchPrice')
    },
    setWeight() {
      if(this.weight > 19999) this.weight = 19999
      else if(this.weight < 0.1) this.weight = 0.1
      this.$store.commit('main/UPDATE_WEIGHT', this.weight)
    },
    setValue() {
      if(this.volume > 74) this.volume = 74
      else if(this.volume < 0.01) this.volume = 0.01
      this.$store.commit('main/UPDATE_VOLUME', this.volume)
    }
  },
  created() {
    this.$store.dispatch('main/fetchLocations')
    this.$store.dispatch('main/fetchPrice')
  }
}
</script>
