<template>
  <aside>
    <header id="sidebar-header">
      <div
        class="header-left"
        @focus="showDropdown"
        @blur="hideDropdown"
        tabindex="1">
        <icon name="settings" size="1.5em"/>
      </div>

      <div
        v-show="dropdownVisible"
        class="dropdown">
        <ul>
          <li>
            <a
              href="https://twitter.com/benavern"
              class="dropdown-link"
              target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/benavern"
              class="dropdown-link"
              target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://benjamin.caradeuc.info"
              class="dropdown-link"
              target="_blank">
              benjamin.caradeuc.info
            </a>
          </li>
        </ul>
      </div>

      <div class="header-center">
        <router-link
          class="header-link"
          to="/">
          Benjamin Caradeuc
        </router-link>
      </div>

      <a
        href="https://benjamin.caradeuc.info"
        target="_blank"
        class="header-right"
        title="Site web de Benjamin Caradeuc"
        tabindex="1">
        <icon name="edit" size="1.3em"/>
      </a>
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
      filterVal: null,
      dropdownVisible: false
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
    },

    showDropdown () {
      this.dropdownVisible = !this.dropdownVisible
    },
    hideDropdown (e) {
      if (!e.relatedTarget || !e.relatedTarget.classList.contains('dropdown-link')) {
        this.dropdownVisible = false
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
    position: relative;
    display: flex;
    border-bottom: 1px solid var(--gray);
    height: 50px;
    text-align: center;

    .header-left,
    .header-right {
      width: 50px;
      padding: 12px;
      color: var(--primary);

      &:hover,
      &:focus {
        cursor: pointer;
        background-color: var(--light-gray);
      }
    }

    .dropdown {
      position: absolute;
      z-index: 1;
      left: 5px;
      top: 100%;
      font-size: .9rem;
      background-color: var(--white);
      border: 1px solid var(--gray);
      border-radius: .2em;
      box-shadow: 0 0 1em var(--gray);
      min-width: 200px;
      text-align: left;
      padding: .5em 0;

      &:before,
      &:after {
        content: '';
        z-index: 1;
        position: absolute;
        bottom: 100%;
        left: 12px;
        border: .5em solid transparent;
        border-bottom-color: var(--white)
      }

      &:before {
        z-index: 0;
        margin-bottom: 1px;
        border-bottom-color: var(--gray)
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          a {
            display: block;
            padding: .25em 1.5em;
            text-decoration: none;

            &:hover {
              background-color: var(--primary);
              color: var(--white)
            }
          }
        }
      }
    }

    .header-center {
      line-height: 50px;
      flex: 1;

      .header-link {
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

