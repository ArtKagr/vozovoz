<template>
  <div class="d-flex flex-column">
    <b-form-input
      v-model.number="currentItem"
      :placeholder="placeholder"
      class="custom_input_time"
      :class="inputState ? '-active' : ''"
      @focus="showItemsList"
    />
    <div
      v-if="inputState"
      class="d-flex flex-column"
    >
      <div class="d-flex justify-content-end close_container -periods">
        <span class="px-2 close_container-button" @click="hideItemsList">
          <b-icon-x class="m-0 h5"></b-icon-x>
        </span>
      </div>
      <div class="custom_input_container -periods d-flex flex-column">
        <div
          v-for="(item, key) in itemsCopy"
          :key="key"
          class="d-flex py-2 px-4 align-items-center"
          :class="item.name === 'Ничего не найдено' ? '' : 'custom_input_item'"
          @click="setItem(item)"
        >
          <span class="mr-2">{{ item.name }}</span>
          <b-icon-sun v-if="item.flag === 'morning'" variant="warning" class="m-0 h5" />
          <b-icon-moon v-else-if="item.flag === 'night'" variant="indigo" class="m-0 h5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeInput",
  data() {
    return {
      inputState: false,
      currentItem: null,
      itemsCopy: [],
      citiesPlaceholder: '00:00',
      addressesPlaceholder: '00:00',
    }
  },
  props: {
    source: {
      type: String,
      default: null,
    },
    point: {
      type: String,
      default: null,
    }
  },
  watch: {
    items(newValue) {
      this.itemsCopy = newValue
    },
    currentItem(newValue) {
      const itemsCopy = JSON.parse(JSON.stringify(this.items))
      const result = JSON.parse(JSON.stringify(itemsCopy)).filter(function(item) {
        return item.name.match('^' + newValue)
      })
      if(newValue === "" || newValue === null) this.itemsCopy = itemsCopy
      else if(result.length === 0) this.itemsCopy = [{ value: null, name: 'Нет данных', region: null }]
      else if(result.length > 0) this.itemsCopy = result
    }
  },
  computed: {
    placeholder() {
      return this.point ? this.addressesPlaceholder : this.citiesPlaceholder
    },
    items() {
      return this.$store.getters['main/getPeriods']
    },
  },
  methods: {
    showItemsList() {
      this.inputState = true
    },
    hideItemsList() {
      this.inputState = false
    },
    setItem(item) {
      if(this.point) this.addressesPlaceholder = item.name
      else this.citiesPlaceholder = item.name
      this.currentItem = null
      this.inputState = false
    },
  },
  created() {
    this.itemsCopy = this.$store.getters['main/getPeriods']
  }
}
</script>
