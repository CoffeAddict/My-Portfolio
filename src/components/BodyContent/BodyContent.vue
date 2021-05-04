<template>
  <div class="d-flex container">
    <div class="main-background">
      <h2>wel<br>come</h2>
      <div class="black-section"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BodyContent',
  inject: ['gsap'],
  components: {
  },
  mounted () {
    this.gsapTest()
  },
  methods: {
    gsapTest () {
      // this.gsap.to('.testing-element', { rotation: 27, x: 100, duration: 1 })
    }
  }
}
</script>

<style scoped>
.container  {
  height: calc(100% - (var(--menu-height) * 2));
  overflow: hidden;
  position: relative;
}

.main-background {
  background: var(--yellow);
  width: 100%;
  display: flex;
  align-items: center;
}

h2 {
  color: var(--white);
  font-family: 'Bebas Neue';
  font-size: 20em;
  line-height: .8em;
  margin: 0 auto;
  margin-right: 150px;
  z-index: 2;
}

.black-section {
  background: var(--black);
  height: 112%;
  width: 410px;
  position: absolute;
  right: -60px;
  transform: rotate(10deg);
  z-index: 1;
}
</style>
