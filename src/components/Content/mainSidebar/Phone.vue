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
        Pour des raisons de sécurité pour ma vie privée, je ne partagerais pas mon numéro de téléphone ici.
      </p>
      <p>
        Si vous souhaitez me contacter vous pouvez le faire par mail <a>à la page "contact" de mon site</a>.
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
