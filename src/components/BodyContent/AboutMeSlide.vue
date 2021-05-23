<template>
  <div class="slide b-black">
    <div class="floating-icon left-icon">{{ leftIcon }}</div>
    <div class="floating-icon right-icon">{{ rightIcon }}</div>
    <h2 class="b-yellow">About Me<span class="t-black">.</span></h2>
    <div>
      <p>
        Hey! I'm Andrés Rodríguez, a {{ age }}-year-old frontend developer from <b>Argentina</b>.
        I have worked as a developer since 2018 and worked with a variety of
        technologies such as Vue, Typescript, and Node.js
      </p>
      <p>
        Currently I'm working in <b>Simplistic</b> as Developer, creating new features and bringing support to our clients using Shopify.
      </p>
      <p>
        Apart from this, I really like code challenges, playing videogames and listening to music.
      </p>
    </div>
    <ChangeSlide
      :direction="'up'"
      @keydown.enter="updateSlide('prev')"
      @keydown.space="updateSlide('prev')"
      @click="updateSlide('prev')"/>
    <ChangeSlide
      @click="updateSlide()"/>
  </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'

export default {
  name: 'AboutMeSlide',
  mixins: [slideMixin],
  data () {
    return {
      age: new Date(Date.now() - new Date('10/31/00').getTime()).getFullYear() - 1970,
      leftIcon: '🎧',
      rightIcon: '🎮'
    }
  }
}
</script>

<style scoped lang="scss">
.floating-icon {
  $rotation: 20deg;
  $position: 8vw;
  position: absolute;
  font-size: 7em;

  &.left-icon {
    transform: rotate($rotation * -1);
    left: $position;
  }

  &.right-icon {
    transform: rotate($rotation);
    right: $position;
  }
}
</style>
