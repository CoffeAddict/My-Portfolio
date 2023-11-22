<template>
  <div
    :tabindex="tabIndex"
    class="slide b-black">
    <div class="floating-icon left-icon">{{ leftIcon }}</div>
    <div class="floating-icon right-icon">{{ rightIcon }}</div>
    <h2 class="b-yellow">AboutMe<span class="t-black">.</span></h2>
    <div>
      <p>
        Hey! I'm Andrés Rodríguez, a frontend developer from <b>Argentina</b>.
        I have been working as a developer since 2018 and used a variety of
        technologies such as Vue, Typescript, Node.js and SCSS.
      </p>
      <p>
        Currently I'm working at <b>Dos al Cubo</b> as Front-end Developer, creating new features and bringing support to our clients using Thinkindot. It's a CMS created using PHP and Tailwind for the front-end UI.
      </p>
      <p>
        Apart from this, I really like code challenges, playing videogames such as Rocket League and CS2 and I love listening to music.
      </p>
    </div>
    <ChangeSlide
      :actualSlide="actualSlide"
      :slideValue="slideValue"
      :direction="'up'"
      @keydown.enter="updateSlide('prev')"
      @keydown.space="updateSlide('prev')"
      @click="updateSlide('prev')"/>
    <ChangeSlide
      :actualSlide="actualSlide"
      :slideValue="slideValue"
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
      leftIcon: '🎧',
      rightIcon: '🎮'
    }
  },
  computed: {
    tabIndex () {
      return this.actualSlide === this.slideValue ? '1' : '-1'
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

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

@media screen and (max-width: $tablet-breakpoint) {
  .slide .floating-icon {
    $position: 5vh;
    font-size: 4em;
    text-align: center;
    left: 0;
    right: 0;

    &.left-icon {
      display: none;
    }
    &.right-icon {
      bottom: $position;
    }
  }
}

</style>
