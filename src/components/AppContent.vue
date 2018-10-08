<template>
  <main>
    <header id="content-header">
      content header
    </header>

    <div id="content-content">
        <slot></slot>
    </div>

    <footer id="content-footer">
      content footer
    </footer>
  </main>
</template>

<script>
export default {
  name: 'AppContent'
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;

  #content-header {
    padding: 10px;
    border-bottom: 1px solid rgba(black, .2);
    height: 50px;
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
