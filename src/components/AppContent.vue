<template>
  <main>
    <header id="content-header">
      <div class="header-title">
        <div class="title">{{ headerTitle.title }}</div>
        <small>{{ headerTitle.subtitle }}</small>
      </div>

      <div class="header-actions">
        <div
          class="action"
          @click="toggleSidebar('Phone')"
          :class="{active: mainSidebar === 'Phone'}">
          <icon name="phone" size="1.5em" />
        </div>

        <div
          class="action"
          @click="toggleSidebar('Camera')"
          :class="{active: mainSidebar === 'Camera'}">
          <icon name="camera" size="1.5em" />
        </div>

        <div
          class="action"
          @click="toggleSidebar('Info')"
          :class="{active: mainSidebar === 'Info'}">
          <icon name="info" size="1.5em" />
        </div>
      </div>
    </header>

    <div id="content-main">
      <div id="main-view">
        <slot />
      </div>

      <div
        id="main-sidebar"
        v-if="mainSidebar">
        <div :is="mainSidebarComponent" />
      </div>
    </div>

    <footer
      v-if="$route.name === 'subject'"
      id="content-footer">
      <message-input
        class="message-input">
      </message-input>
    </footer>
  </main>
</template>

<script>
import MessageInput from './Content/MessageInput'

import Info from './Content/mainSidebar/Info'
import Camera from './Content/mainSidebar/Camera'
import Phone from './Content/mainSidebar/Phone'

const SidebarComponents = {
  Info,
  Camera,
  Phone
}

export default {
  name: 'AppContent',
  components: { MessageInput },
  computed: {
    headerTitle () {
      let titleContent
      switch(this.$route.name) {
        case 'subject':
          const user = this.state.users.find(user => user.subject.name === this.$route.params.subject)

          titleContent = {
            title: user && user.name && user.name.fullName,
            subtitle: this.$route.params.subject
          }
          break
        default:
          titleContent = {
            title: 'Benjamin Caradeuc',
            subtitle: 'Ingénieur Web - Lead développeur'
          }
      }
      return titleContent
    },
    mainSidebar () {
      return this.state.mainSidebar
    },
    mainSidebarComponent () {
      return this.mainSidebar && SidebarComponents[this.mainSidebar]
    }
  },
  methods: {
    toggleSidebar (name) {
      this.$store.commit('TOGGLE_SIDEBAR', name)
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;

  #content-header {
    display: flex;
    border-bottom: 1px solid var(--gray);
    height: 50px;

    .header-title {
      padding: 10px;
      flex: 1;
      padding-left: 150px;
      line-height: 1;
      text-align: center;

      small {
        color: var(--dark-gray);
      }
    }

    .header-actions {
      display: flex;
      width: 150px;
      color: var(--primary);

      .action {
        width: 50px;
        padding: 12px;
        text-align: center;

        &:hover,
        &.active{
          cursor: pointer;
          background-color: var(--light-gray);
        }
      }
    }
  }

  #content-main {
    display: flex;
    flex: 1;
    position: relative;

    #main-view {
      flex: 1;
      position: relative;
      overflow-y: auto;
    }

    #main-sidebar {
      width: 25vw;
      max-width: 400px;
      border-left: 1px solid var(--gray);
    }
  }

  #content-footer {
    display: flex;
    border-top: 1px solid var(--gray);
    height: 50px;

    .message-input {
      flex: 1;
    }
  }
}
</style>
