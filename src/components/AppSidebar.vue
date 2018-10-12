<template>
  <aside>
    <header id="sidebar-header">
      <router-link
        class="header-link"
        to="/">
        Benjamin Caradeuc
      </router-link>
    </header>

    <div id="sidebar-content">
      <div class="sidebar-filter">
        <sidebar-filter
          @filter="setFilter">
        </sidebar-filter>
      </div>

      <div class="sidebar-list">
        <sidebar-list-item
          v-for="(user, i) in users"
          :key="i"
          :user="user">
        </sidebar-list-item>
      </div>
    </div>
    </div>
  </aside>
</template>

<script>
import SidebarListItem from "./Sidebar/SidebarListItem"
import SidebarFilter from "./Sidebar/SidebarFilter"

export default {
  name: "AppSidebar",
  components: { SidebarListItem, SidebarFilter },
  data () {
    return {
      filterVal: null
    }
  },
  computed: {
    users () {
      return this.state.users
        .filter(user => !this.filterVal || this.filterVal.length < 3 || !user.subject || user.subject.name.toLowerCase().includes(this.filterVal.toLowerCase()))
    }
  },
  methods: {
    setFilter (val) {
      if(val === '') {
        this.filterVal = null
      } else {
        this.filterVal = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  border-right: 1px solid rgba(black, 0.2);
  display: flex;
  flex-direction: column;

  #sidebar-header {
    padding: 10px;
    border-bottom: 1px solid rgba(black, 0.2);
    height: 50px;
    text-align: center;

    .header-link {
      text-decoration: none;
    }
  }

  #sidebar-content {
    flex: 1;
    position: relative;
    overflow-y: auto;
  }
}
</style>

