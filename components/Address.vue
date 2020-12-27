<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-between">
      <span class="mb-2">Адрес</span>
      <div class="d-flex align-items-center pointer">
        <b-icon-geo-alt-fill variant="danger" class="m-0 mr-2 custom_geo_alt"></b-icon-geo-alt-fill>
        <span class="custom_geo_alt-title">выбрать на карте</span>
      </div>
    </div>
    <div class="d-flex flex-column">
      <PointInput :source="source" point="address" />
      <div class="d-flex justify-content-end container pointer">
        <span class="add_docs">+ документы к другому адресу</span>
      </div>
      <div class="d-flex w-100 flex-column mt-4">
        <div class="d-flex w-100 justify-content-between mb-4">
          <div class="d-flex w-50 flex-column">
            <div class="d-flex flex-column w-100">
              <span class="mb-4 calendar-title">Выберите дату {{ source === 'departure' ? 'забора' : 'доставки' }} груза</span>
              <CalendarMonth :source="source" :current="true" month="Дек"></CalendarMonth>
              <CalendarMonth :source="source" :current="false" month="Янв"></CalendarMonth>
            </div>
          </div>
          <div class="w-45">
            <div class="d-flex align-items-center mt-1 mb-3">
              <b-icon-square class="m-0 h5 mr-3 pointer"></b-icon-square>
              <span>Фиксированное время</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center mr-2">
                <span class="mr-1 secondary_color">С</span>
                <TimeInput :source="source" point="address"/>
              </div>
              <div class="d-flex align-items-center mr-2">
                <span class="mr-1 secondary_color">До</span>
                <TimeInput :source="source" point="address"/>
              </div>
              <b-icon-info-circle-fill class="m-0 h4 pointer" variant="danger"></b-icon-info-circle-fill>
            </div>
          </div>
        </div>
        <div class="d-flex w-100 justify-content-between mt-4">
          <b-button variant="danger" class="custom_button px-4">{{ source === 'departure' ? 'Погрузочные' : 'Разгрузочные' }} работы: нет</b-button>
          <b-button variant="danger" class="custom_button px-4">Комментарий водителю: нет</b-button>
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
  name: "Address",
  components: {TimeInput, PointInput, CalendarMonth},
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
