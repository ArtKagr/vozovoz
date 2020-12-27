<template>
  <div class="d-flex flex-column m-3 w-70 m-auto">
    <div class="d-flex w-100 justify-content-center my-4">
      <span class="h4">Выбор направления перевозки</span>
    </div>
    <div class="d-flex w-100">
      <div class="d-flex container">
        <div class="d-flex flex-column w-100">
          <CityPoint source="departure" />
          <Address source="departure" v-if="departureOption === 'address'" />
          <Terminal v-else />
        </div>
      </div>
      <div class="d-flex container">
        <div class="d-flex flex-column w-100">
          <CityPoint resource="receiving" />
          <Address source="receiving" v-if="receivingOption === 'address'" />
          <Terminal v-else />
        </div>
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
  components: {CityPoint, Terminal, Address},
  data() {
    return {

    }
  },
  computed: {
    departureOption() {
      return this.$store.getters['main/getDepartureOption']
    },
    receivingOption() {
      return this.$store.getters['main/getReceivingOption']
    }
  },
}
</script>
