<template>
  <div id="sidebar-filter">
    <input
      type="text"
      placeholder="Rechercher un sujet"
      v-model="filterVal"
      @input="$emit('filter', filterVal)">
  </div>
</template>

<script>
export default {
  name: 'SidebarFilter',
  data () {
    return {
      filterVal: ''
    }
  },
  watch: {
    '$route' () {
      this.filterVal = ''
      this.updateFilter()
    }
  },
  methods: {
    updateFilter () {
      const filter = String(this.filterVal).trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      this.$emit('filter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
  #sidebar-filter {
    padding: 12px;

    input {
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: .3em;
      background-color: rgba(black, .05);

      &::placeholder {
        color: #999;
        font-size: .9rem;
      }
    }
  }

</style>
