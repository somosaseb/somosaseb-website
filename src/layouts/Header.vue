<template>
  <header class="border-bottom py-3 mb-4">
    <div
      class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Bootstrap"
        >
          <use xlink:href="#bootstrap"></use>
        </svg>
      </a>

      <ul id="navigation">
        <li><g-link to="/" exact>Inicio</g-link></li>
        <li><g-link to="/about/">Información</g-link></li>
        <li><g-link to="/events/">Eventos</g-link></li>
        <li><g-link to="/articles/">Articulos</g-link></li>
        <li><g-link to="/blog/">Comunidad</g-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">
          Registrarte
        </button>
        <button type="button" class="btn btn-primary">Miembros</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
