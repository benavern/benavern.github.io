<template>
  <div id="sidebar-filter">
    <icon
      class="search-icon"
      name="search"
      size="15px"/>

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

    @media screen and (max-width: 768px) {
      display: none;
    }

    .search-icon {
      position: absolute;
      top: 20px;
      left: 20px;
      color: var(--dark-gray);
    }

    input {
      width: 100%;
      padding: 10px 10px 10px 2rem;
      border: none;
      border-radius: .3em;
      outline: none;
      background-color: var(--light-gray);

      &::placeholder {
        color: var(--dark-gray);
        font-size: .9rem;
      }
    }
  }

</style>
