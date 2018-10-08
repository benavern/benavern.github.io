<template>
<div class="subject-content">
  <h1>subject</h1>
  <p
    v-for="message in messages"
    :key="message.name">
    {{ message }}
  </p>
</div>
</template>

<script>
export default {
  name: 'Subject',
  props: {
    subject: String
  },
  computed: {
    messages () {
      const subject = this.state.subjects.find(subject => subject.name === this.subject) || []
      return subject.messages
    }
  }
}
</script>
