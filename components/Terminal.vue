<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-between">
      <span class="mb-2">Терминал</span>
      <div class="d-flex align-items-center pointer">
        <b-icon-geo-alt-fill variant="danger" class="m-0 mr-2 custom_geo_alt"></b-icon-geo-alt-fill>
        <span class="custom_geo_alt-title">выбрать на карте</span>
      </div>
    </div>
    <PointInput :source="source" point="terminal" />
    <div class="d-flex w-100 flex-column mt-4">
      <div class="d-flex w-100 justify-content-between mb-4">
        <div class="d-flex w-50 flex-column">
          <div class="d-flex flex-column w-100">
            <span class="mb-4 calendar-title">{{ source === 'departure' ? 'Приём' : 'Выдача' }} груза на терминале</span>
            <CalendarMonth :source="source" :current="true" month="Дек"></CalendarMonth>
            <CalendarMonth :source="source" :current="false" month="Янв"></CalendarMonth>
          </div>
        </div>
        <div class="w-45">
          <div class="d-flex align-items-center w-100">
            <div class="d-flex align-items-center w-50 mr-2">
              <span class="mr-1 secondary_color">С</span>
              <TimeInput :source="source" point="terminal"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth";
import PointInput from "./PointInput";
import TimeInput from "./TimeInput";
export default {
  name: "Terminal",
  components: {TimeInput, PointInput, CalendarMonth },
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
}
</script>
