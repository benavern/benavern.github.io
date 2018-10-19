<template>
  <div class="sidebar-info">
    <header class="info-header">
      <div class="header-avatar">
        <img
          src="../../../assets/avatar.png"
          alt="Avatar de Benjamin Caradeuc">
      </div>

      <div class="header-content">
        <div class="full-name">Benjamin Caradeuc</div>
        <small class="subtitle">
          Ingénieur Web | Lead développeur
        </small>
      </div>
    </header>

    <div class="info-content">
      <p>
        Hey, courageux visiteur!
      </p>
      <p>
        Je suis Benjamin Caradeuc, <b>développeur Web et lead Développeur</b>.
      </p>
      <p>
        Si vous lisez ces lignes, c'est que vous avez déjà joué un peu sur mon site...
        Vous savez maintenant que ce n'est pas un vrai tchat mais que c'est une manière sympa que j'ai trouvé de me présenter.
      </p>
      <p>
        Si vous voulez en savoir plus sur moi, suivez moi sur les réseaux sociaux ou venez visiter mon "vrai" site : <a href="https://benjamin.caradeuc.info">https://benjamin.caradeuc.info</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss" scoped>
  .sidebar-info {
    display: flex;
    flex-direction: column;
    height: 100%;

    .info-header {
      display: flex;
      padding: 15px 10px;
      text-decoration: none;
      align-items: center;
      border-bottom: 1px solid var(--gray);

      .header-avatar {
        margin-right: 10px;

        img {
          display: block;
          border-radius: 50px;
          width: 50px;
          height: 50px;
        }
      }

      .header-content {
        position: relative;
        overflow: hidden;

        .full-name,
        .subtitle {
          display: block;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .subtitle {
          color: var(--dark-gray);
        }
      }
    }

    .info-content {
      flex: 1;
      padding: 10px;
      position: relative;
      overflow-y: auto;
      font-size: .9rem;
    }
  }
</style>
