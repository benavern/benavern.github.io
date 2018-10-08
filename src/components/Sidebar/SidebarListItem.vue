<template>
  <router-link
    class="sidebar-list-item"
    :to="{ name: 'subject', params: { subject: user.subject.name }}"
    :title="`Conversation avec ${user.name.fullName}`">
    <div class="item-avatar">
      <img
        :src="user.picture.large"
        :alt="`Avatar for ${user.name.fullName}`">
    </div>

    <div class="item-content">
      <div class="full-name">{{ user.name.fullName }}</div>
      <small class="last-message">{{ user.subject.messages[0] }}</small>
    </div>

    <div class="item-actions"></div>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarListItem',
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>
.sidebar-list-item {
  display: flex;
  padding: 10px;
  text-decoration: none;
  height: 70px;
  color: #333;

  &:hover,
  &.router-link-active {
    background-color: rgba(black, .05);
  }

  .item-avatar {
    margin-right: 10px;

    img {
      border-radius: 50px;
      width: 50px;
      height: 50px;
    }
  }

  .item-content {
    position: relative;
    overflow: hidden;

    .full-name,
    .last-message {
      display: block;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .last-message {
      color: #999;
    }
  }
}
</style>

