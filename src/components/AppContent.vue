<template>
  <main>
    <header id="content-header">
      <div class="header-title">
        <div class="title">{{ headerTitle.title }}</div>
        <small>{{ headerTitle.subtitle }}</small>
      </div>

      <div class="header-actions">
        <div class="action">
          <icon name="phone" size="1.5em" />
        </div>
        <div class="action">
          <icon name="camera" size="1.5em" />
        </div>
        <div class="action">
          <icon name="info" size="1.5em" />
        </div>
      </div>
    </header>

    <div id="content-content">
      <slot />
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
    border-bottom: 1px solid rgba(black, .2);
    height: 50px;

    .header-title {
      padding: 10px;
      flex: 1;
      padding-left: 150px;
      line-height: 1;
      text-align: center;

      small {
        color: #999;
      }
    }

    .header-actions {
      display: flex;
      width: 150px;
      color: #0084ff;

      .action {
        width: 50px;
        padding: 12px;
        text-align: center;
      }
    }
  }

  #content-content {
    flex: 1;
    position: relative;
    overflow-y: auto;
  }

  #content-footer {
    display: flex;
    border-top: 1px solid rgba(black, .2);
    height: 50px;

    .message-input {
      flex: 1;
    }
  }
}
</style>
