<template>
  <header class="navbar navbar-expand-lg border-bottom py-3">
    <div class="container font-raleway fs-5">
      <div class="col-12 row mx-0 col-md-2">
        <a class="navbar-brand col-auto flex-grow-1 d-flex" href="/">
          <Logo />
        </a>
        <button
          class="navbar-toggler col-auto"
          type="button"
          @click="$utils.toggleClass('#navbarToggle', 'show')"
          data-bs-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuSvg />
        </button>
      </div>

      <nav id="navbarToggle" class="collapse navbar-collapse fw-semibold">
        <ul
          id="navigation"
          class="navbar-nav d-flex flex-row flex-wrap flex-grow-1 my-4 my-md-0"
        >
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/" exact>Inicio</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/about/">Información</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/events/">Conversaciones</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/articles/">Artículos</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/news/">Noticias</g-link>
          </li>
        </ul>
      </nav>

      <div
        class="button-actions gab-2 d-flex flex-column flex-xl-row mt-4 mt-md-0 col-md-3 justify-content-center justify-content-md-end"
      >
        <button type="button" class="btn btn-accent btn-md ">
          Registrarte
        </button>
        <button type="button" class="btn btn-primary btn-md mt-2 "> Miembros  </button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "../../components/Logo.vue";
import MenuSvg from "../../assets/img/menu.svg";
export default {
  components: { Logo, MenuSvg },
};
</script>

<style lang="scss" scoped>
.button-actions {
  width: 100%;
}

@media (min-width: 768px) {
  .button-actions {
    width: auto;
    align-items: center;
  }
}
</style>
