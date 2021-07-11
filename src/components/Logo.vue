<template>
  <div class="logo">
    <LogoSvg width="32" height="32" />
    <div class="text">
      <div>ASEB</div>
      <div class="bolivia">Bolivia</div>
    </div>
  </div>
</template>

<script>
import LogoSvg from "../assets/img/icon.svg";

export default {
  components: { LogoSvg },
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: auto;
    height: auto;
  }
}

.text {
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;

  .bolivia {
    line-height: 1;
    font-weight: 400;
    font-size: 0.7rem;
    letter-spacing: 4px;
    clear: all;
  }
}
</style>
