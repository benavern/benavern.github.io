<template>
<div class="subject-content">
  <div
    v-for="message in messages"
    :key="message.name"
    :class="['message-wrapper', message.received ? 'received' : 'sent', {'user' : message.user}]">
    <div
      class="message"
      v-html="message.text">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Subject',
  props: {
    subject: String
  },
  watch: {
    '$route' (to, from) {
      clearInterval(this.interval)
      this.$store.commit('RESET_MESSAGES')
      this.subjectIndex = 0
      this.start()
    }
  },
  data () {
    return {
      subjectIndex: 0,
      interval: null
    }
  },
  computed: {
    subjectMessages () {
      const subject = this.state.subjects.find(subject => subject.name === this.subject) || []
      return subject.messages
    },
    messages () {
      return this.state.messages
    }
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        const message = this.subjectMessages[this.subjectIndex++]
        if (message) {
          this.displayMessage(message)
        } else {
          clearInterval(this.interval)
        }
      }, 2000)
    },
    displayMessage(message) {
      this.$store.commit('SET_MESSAGE', message)
    }
  },
  mounted () {
    this.start()
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.subject-content {
  padding: 20px 10px;

  .message-wrapper {
    margin: 3px 0;
    display: flex;

    .message {
      padding: .2em 1em;
      max-width: 70%;
    }

    &.sent {
      justify-content: flex-end;

      .message{
        background-color: var(--primary);
        color: var(--white);
        border-radius: 1em 1em .3em 1em;
      }

      &.user .message {
        background-color: var(--secondary);
        color: var(--white);
      }

    }

    &.received .message {
      background-color: var(--light-gray);
      border-radius: 1em 1em 1em .3em;
    }


  }

  // margin between blocks of messages
  .received + .sent,
  .sent + .received {
    margin-top: 10px;
  }
}
</style>
