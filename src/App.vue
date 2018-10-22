<template>
  <div id="app-wrapper">
    <app-sidebar id="app-sidebar" />
    <app-content id="app-content">
      <router-view />
    </app-content>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar'
import AppContent from './components/AppContent'

export default {
  name: "App",
  components: { AppSidebar, AppContent },
  mounted () {
    this.$store.dispatch('FETCH_USERS')
  }
}
</script>

<style>

/* Variables definition */
:root {
  --primary: #0084ff;
  --secondary: #bada55;
  --black: black;
  --dark-gray: #999;
  --gray: rgba(0, 0, 0, .2);
  --light-gray: rgba(0, 0, 0, .05);
  --white: white;
}

/* Reset */
*,
*:before,
*:after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html {
  font-size: 16px;
}
body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: var(--black);
  line-height: 1.4;
}

a,
a:visited {
  color: inherit;
  text-decoration: underline;
}

/* Initial load */
[v-cloak] {
  display: none;
}
</style>

<style lang="scss" scoped>
#app-wrapper {
  display: flex;
  height: 100%;
}
#app-content {
  flex: 1;
}
</style>
