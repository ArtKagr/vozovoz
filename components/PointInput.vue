<template>
  <div class="d-flex flex-column">
    <b-form-input
      v-model="currentItem"
      :placeholder="placeholder"
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
          v-for="(item, key) in itemsCopy"
          :key="key"
          class="d-flex flex-column py-2 px-4"
          :class="item.name === 'Ничего не найдено' ? '' : 'custom_input_item'"
          @click="setItem(item)"
        >
          <span>{{ item.name }}</span>
          <span v-if="!point" class="custom_input_item-region">{{ item.region }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PointInput",
  data() {
    return {
      inputState: false,
      currentItem: null,
      itemsCopy: [],
      locationsPlaceholder: 'Введите населённый пункт',
      addressesPlaceholder: 'Улица, дом',
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
      else if(result.length === 0) this.itemsCopy = [{ value: null, name: 'Ничего не найдено', region: null }]
      else if(result.length > 0) this.itemsCopy = result
    }
  },
  computed: {
    placeholder() {
      return this.point ? this.addressesPlaceholder : this.locationsPlaceholder
    },
    items() {
      if(this.point) return this.$store.getters['main/getAddresses']
      else return this.$store.getters['main/getLocations']
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
      this.$store.commit('main/UPDATE_PRICE_LOCATION', { item: item.guid, source: this.source })
      if(this.point) this.addressesPlaceholder = item.name
      else this.locationsPlaceholder = item.name
      this.currentItem = null
      this.inputState = false
    },
  },
  created() {
    if(this.point) this.itemsCopy = this.$store.getters['main/getAddresses']
    else this.itemsCopy = this.$store.getters['main/getLocations']

    if(this.source === 'departure') this.locationsPlaceholder = 'Санкт-Петербург'
    else this.locationsPlaceholder = 'Москва'
  }
}
</script>
