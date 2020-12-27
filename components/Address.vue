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
        <b-form-input
          placeholder="Улица, дом"
          class="custom_input"
          :class="inputState ? '-active' : ''"
          @focus="inputFromPointFocus"
        />
      <div
        v-if="inputState"
        class="d-flex flex-column"
      >
        <div class="d-flex justify-content-end close_container">
          <span class="px-2 close_container-button" @click="closeFromPointInput">Закрыть</span>
        </div>
        <div class="custom_input_container d-flex flex-column">
          <div
            v-for="(address, key) in addresses"
            :key="key"
            class="d-flex flex-column py-2 px-4 custom_input_item"
          >
            <span>{{ address.name }}</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end container pointer">
        <span class="add_docs">+ документы к другому адресу</span>
      </div>
      <div class="d-flex w-100 flex-column mt-4">
        <div class="d-flex w-100 justify-content-between mb-4">
          <div class="d-flex w-50 flex-column">
            <div class="d-flex flex-column w-100">
              <span class="mb-4 calendar-title">Выберите дату {{ source === 'departure' ? 'забора' : 'доставки' }} груза</span>
              <CalendarMonth :source="source" :current="true"></CalendarMonth>
              <CalendarMonth :source="source" :current="false"></CalendarMonth>
            </div>
          </div>
          <div class="w-45">
            <div class="d-flex align-items-center mt-1 mb-3">
              <b-icon-square class="m-0 h5 mr-3 pointer"></b-icon-square>
              <span>Фиксированное время</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center mr-2">
                <span class="mr-1">С</span>
                <b-form-input
                  placeholder="00:00"
                  class="custom_input_time"
                />
              </div>
              <div class="d-flex align-items-center mr-2">
                <span class="mr-1">До</span>
                <b-form-input
                  placeholder="00:00"
                  class="custom_input_time"
                />
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
export default {
  name: "Address",
  components: {CalendarMonth},
  data() {
    return {
      inputState: false,
      addresses: [
        { value: 'sd-sdf-df', name: 'Артиллерийская ул. 63' },
        { value: 'sd-sdf-df', name: 'Суворова ул. 42' },
      ]
    }
  },
  props: {
    source: {
      type: String,
      default: null
    }
  },
  methods: {
    inputFromPointFocus() {
      this.inputState = true
    },
    closeFromPointInput() {
      this.inputState = false
    },
  }
}
</script>
