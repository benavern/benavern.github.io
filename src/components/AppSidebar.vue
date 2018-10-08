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
      <div class="scroll-section">
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
import SidebarListItem from "./Sidebar/SidebarListItem";

export default {
  name: "AppSidebar",
  components: { SidebarListItem },
  computed: {
    users () {
      return this.state.users
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

