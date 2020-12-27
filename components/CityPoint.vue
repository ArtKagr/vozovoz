<template>
  <div class="d-flex flex-column">
    <span class="mb-2">{{ source === 'departure' ? 'Откуда' : 'Куда'}}</span>
      <PointInput :source="source" />
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
</template>

<script>
import PointInput from "./PointInput";
export default {
  name: "CityPoint",
  components: {PointInput},
  data() {
    return {
      inputState: false,
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
    setDeparturePoint(point) {
      if(this.source === 'departure') this.$store.commit('main/UPDATE_DEPARTURE_OPTION', point)
      else this.$store.commit('main/UPDATE_RECEIVING_OPTION', point)
    }
  }
}
</script>
