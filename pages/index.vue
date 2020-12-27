<template>
  <div class="d-flex flex-column m-3 w-70 m-auto">
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
    <div class="d-flex justify-content-between mt-4 w-80 mx-auto">
      <div class="d-flex align-items-center total_cost">
        <span class="mr-2">Итого:</span>
        <div class="d-flex align-items-center">
          <span class="mr-1">1050</span>
          <span>₽</span>
        </div>
      </div>
      <b-button variant="danger" class="custom_button px-4">Рассчитать</b-button>
    </div>
  </div>
</template>

<script>
import Address from "../components/Address";
import Terminal from "../components/Terminal";
import CityPoint from "../components/CityPoint";
export default {
  name: 'Index',
  components: { CityPoint, Terminal, Address },
  computed: {
    departurePoint() {
      return this.$store.getters['main/getDepartureOption']
    },
    receivingPoint() {
      return this.$store.getters['main/getReceivingOption']
    }
  },
}
</script>
