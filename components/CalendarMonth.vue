<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex w-100" :class="current ? 'calendar-current_month' : 'calendar-next_month'">
      <div class="d-flex calendar-month mr-4">
        <span>{{ month }}</span>
      </div>
      <div class="d-flex flex-column w-100">
        <div v-if="current" class="d-flex justify-content-between mb-3 w-100">
          <span class="calendar-head-day">Пн</span>
          <span class="calendar-head-day">Вт</span>
          <span class="calendar-head-day">Ср</span>
          <span class="calendar-head-day">Чт</span>
          <span class="calendar-head-day">Пт</span>
          <span class="calendar-head-day_off">Сб</span>
          <span class="calendar-head-day_off">Вс</span>
        </div>
        <div class="d-flex justify-content-between w-100">
          <span class="calendar-day">28</span>
          <span class="calendar-day">29</span>
          <span class="calendar-day">30</span>
          <span class="calendar-day">31</span>
          <span class="calendar-day">01</span>
          <span class="calendar-day">02</span>
          <span class="calendar-day">03</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarMonth",
  props: {
    source: {
      type: String,
      default: null,
    },
    current: {
      type: Boolean,
      default: false,
    },
    month: {
      type: String,
      default: null,
    }
  }
}
</script>

<style scoped>

</style>
