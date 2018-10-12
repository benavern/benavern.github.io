<template>
  <form @submit.prevent="pushMessage">
    <input
      type="text"
      placeholder="Écrivez un message..."
      ref="input"
      v-model="message.text">
  </form>
</template>

<script>
export default {
  name: 'MessageInput',
  watch: {
    '$route' () {
      this.message.text = ''
      this.$refs.input.focus()
    }
  },
  data() {
    return {
      message: {
        text: '',
        received: false,
        user: true
      }
    }
  },
  methods: {
    pushMessage () {
      const message = { ...this.message }
      message.text = String(message.text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
      this.$store.commit('SET_MESSAGE', message)
      this.message.text = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    background-color: #fff;
    border: none;
    outline: none;
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px;
  }

  ::placeholder { /* Most modern browsers support this now. */
    color: #ddd;
    font-size: .9rem;
  }
</style>
