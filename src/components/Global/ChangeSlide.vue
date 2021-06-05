<template>
  <div
    :class="{
      'arrow-up': direction == 'up',
      'arrow-down': direction != 'up'
    }"
    :tabindex="tabIndex"
    class="arrow-container">
    <Arrow/>
  </div>
</template>

<script>

import Arrow from '@/components/Icons/Arrow.vue'

export default {
  name: 'ChangeSlide',
  components: {
    Arrow
  },
  props: {
    direction: {
      type: String,
      required: false,
      default: 'down'
    },
    actualSlide: {
      type: Number,
      required: true
    },
    slideValue: {
      type: Number,
      required: true
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

.arrow-container {
  $position: 1.5em;
  border: 2px solid var(--white);
  height: 50px;
  width: 50px;
  padding: .5em;
  padding-top: 0.3em;
  border-radius: 50%;
  transition: color .2s ease, transform .2s cubic-bezier(.22,.68,0,1.71), color .35s, border-color .35s ;
  position: absolute;
  left: $position;
  z-index: 1;

  &.arrow-down {
    bottom: $position;
  }

  &.arrow-up {
    top: $position;
    transform: rotate(180deg);
  }

  &:hover {
    cursor: pointer;
    color: var(--black_alt);
    border-color: var(--black_alt);

    &.arrow-up {
      transform: rotate(180deg);
    }
  }

  &:active {
    color: var(--black_alt);
    border-color: var(--black_alt);
    transform: scale(1);
  }
}

@media screen and (max-width: $tablet-breakpoint) {
  .slide .arrow-container, .main-background .arrow-container {
    $new-scale: scale(.8);
    transform: $new-scale;

    &.arrow-up {
      transform: rotate(180deg) $new-scale;
    }
  }
}
</style>
