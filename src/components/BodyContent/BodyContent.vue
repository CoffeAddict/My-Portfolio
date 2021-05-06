<template>
  <div class="d-flex container">
    <WelcomeSlide
      :actualSlide="actualSlide"
      :slideValue="0"
      @updateSlide="updateSlide"/>
  </div>
</template>

<script>

import WelcomeSlide from '@/components/BodyContent/WelcomeSlide'

export default {
  name: 'BodyContent',
  components: {
    WelcomeSlide
  },
  data () {
    return {
      actualSlide: 0
    }
  },
  methods: {
    updateSlide (newValue) {
      this.actualSlide = newValue
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
</style>
