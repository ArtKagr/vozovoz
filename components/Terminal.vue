<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-between">
      <span class="mb-2">Терминал</span>
      <div class="d-flex align-items-center pointer">
        <b-icon-geo-alt-fill variant="danger" class="m-0 mr-2 custom_geo_alt"></b-icon-geo-alt-fill>
        <span class="custom_geo_alt-title">выбрать на карте</span>
      </div>
    </div>
    <div class="d-flex flex-column">
      <b-form-input
        id="input-invalid"
        placeholder="Улица, дом"
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
            v-for="(address, key) in addresses"
            :key="key"
            class="d-flex flex-column py-2 px-4 custom_input_item"
          >
            <span>{{ address.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Terminal",
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
    showItemsList() {
      this.inputState = true
    },
    hideItemsList() {
      this.inputState = false
    },
  }
}
</script>
