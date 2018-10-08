<template>
  <div class="home-wrapper">
    <div class="home-content">
      <h1>Benjamin Caradeuc</h1>

      <p>Ce site n'est pas un vrai site de tchat, c'est une manière originale que j'ai imaginée pour me présenter.</p>

      <p>N'hésitez pas à vous promener dessus ou à vous rendre directement sur <a href="https://benjamin.caradeuc.info">mon site officiel</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  position: relative;
  height: 100%;

  .home-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    text-align: center;
    color: #999;

    h1 {
      font-size: 3rem;
      font-weight: bolder;
    }
  }
}
</style>

