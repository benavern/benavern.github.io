<template>
  <main>
    <header id="content-header">
      <div class="header-title">
        <div class="title">{{ headerTitle.title }}</div>
        <small>{{ headerTitle.subtitle }}</small>
      </div>

      <div class="header-actions">
        header actions
      </div>
    </header>

    <div id="content-content">
      <slot></slot>
    </div>

    <footer
      v-if="$route.name === 'subject'"
      id="content-footer">
      content footer
    </footer>
  </main>
</template>

<script>
export default {
  name: 'AppContent',
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
      width: 150px;
    }
  }

  #content-content {
    flex: 1;
    position: relative;
    overflow-y: auto;
  }

  #content-footer {
    padding: 10px;
    border-top: 1px solid rgba(black, .2);
    height: 50px;
  }
}
</style>
