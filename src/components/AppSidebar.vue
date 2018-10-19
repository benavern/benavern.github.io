<template>
  <aside>
    <header id="sidebar-header">
      <div class="header-left">
        <icon name="settings" size="1.5em"/>
      </div>

      <div class="header-center">
        <router-link
          class="header-link"
          to="/">
          Benjamin Caradeuc
        </router-link>
      </div>

      <div class="header-right">
        <icon name="edit" size="1.3em"/>
      </div>
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
        .filter(user => !this.filterVal || user.subject.name.toLowerCase().includes(this.filterVal.toLowerCase()))
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
  border-right: 1px solid var(--gray);
  display: flex;
  flex-direction: column;

  #sidebar-header {
    display: flex;
    border-bottom: 1px solid var(--gray);
    height: 50px;
    text-align: center;

    .header-left,
    .header-right {
      width: 50px;
      padding: 12px;
      color: var(--primary);
    }

    .header-center {
      line-height: 50px;
      flex: 1;

      .header-link {
        color: var(--black);
        text-decoration: none;
      }
    }
  }

  #sidebar-content {
    flex: 1;
    position: relative;
    overflow-y: auto;
  }
}
</style>

