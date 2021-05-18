<template>
  <div class="slide b-black">
    <h2>About Me<span class="t-yellow">.</span></h2>
    <div>
      <p>
        Hey! I'm Andrés Rodríguez, a {{ age }}-year-old frontend developer from Argentina.
        I have worked as a developer since 2018 and worked with a variety of
        technologies such as Vue, Typescript, and Node.js
      </p>
      <div class="tech-section">
        <h3>This are some of my favorites technologies</h3>
        <img src="@/assets/img/logo_vue.png" alt="Vue Logo">
        <img src="@/assets/img/logo_js.png" alt="Javascript Logo">
        <img src="@/assets/img/logo_unity.png" alt="Unity Game Engine Logo">
      </div>
    </div>
    <ChangeSlide
      :direction="'up'"
      @click="updateSlide('prev')"/>
    <!-- <ChangeSlide
      @click="updateSlide()"/> -->
  </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'

export default {
  name: 'AboutMeSlide',
  mixins: [slideMixin],
  data () {
    return {
      age: new Date(Date.now() - new Date('10/31/00').getTime()).getFullYear() - 1970
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-container {
  min-height: var(--menu-height);
}

.container {
  align-items: center;
  justify-content: space-between;
}

.language-controls a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 12em;
}

.tech-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
}

h2 {
  font-size: 5em;
  margin-bottom: .3em;

  &:before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 50px;
    background: var(--yellow);
    z-index: -1;
    left: -20vw;
    transform: rotate(-45deg);
    top: 17vh;
  }
}

h3 {
  font-size: 1.8em;
  text-align: center;
  letter-spacing: .06em;
  margin-top: 2em;
  width: 100%;
}

p {
  max-width: 500px;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.4em;
  letter-spacing: .04em;
  margin: 0 auto;
}

h2, p {
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);
}

img {
  width: 160px;
  width: 30%;
  padding: 1.5em;
  object-fit: contain;
  transition: filter .2s ease, transform .2s cubic-bezier(.22,.68,0,1.71);
  &:hover {
    filter: drop-shadow(1px 4px 6px #000);
    transform: scale(1.1);
  }
}
</style>
