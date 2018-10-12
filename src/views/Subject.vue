<template>
<div class="subject-content">
  <div
    v-for="message in messages"
    :key="message.name"
    :class="['message-wrapper', message.received ? 'received' : 'sent']">
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
      this.messages = []
      this.subjectIndex = 0
      this.start()
    }
  },
  data () {
    return {
      messages: [],
      subjectIndex: 0,
      interval: null
    }
  },
  computed: {
    subjectMessages () {
      const subject = this.state.subjects.find(subject => subject.name === this.subject) || []
      return subject.messages
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
      this.messages.push(message)
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
        background-color: #0084ff;
        color: white;
        border-radius: 1em 1em .3em 1em;
      }
    }

    &.received .message {
      background-color: rgba(black, .05);
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
