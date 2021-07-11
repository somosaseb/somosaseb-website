<template>
  <header class="navbar navbar-expand-lg  border-bottom py-3 mb-4">
    <div class="container">
      <a class="navbar-brand" href="/">
        <Logo />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="$utils.toggleClass('#navbarToggle', 'show')"
        data-bs-target="#navbarToggle"
        aria-controls="navbarToggle"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuSvg />
      </button>

      <nav id="navbarToggle" class="flex collapse navbar-collapse">
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
            <g-link class="nav-link" to="/events/">Eventos</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/articles/">Articulos</g-link>
          </li>
          <li class="nav-link col-6 col-md-auto">
            <g-link class="nav-link" to="/blog/">Comunidad</g-link>
          </li>
        </ul>

        <div
          class="d-flex flex-grow-1 justify-content-center justify-content-md-end"
        >
          <button type="button" class="btn btn-accent me-2">
            Registrarte
          </button>
          <button type="button" class="btn btn-primary">Miembros</button>
        </div>
      </nav>
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
