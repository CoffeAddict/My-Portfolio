<template>
  <div class="d-flex container b-black">
    <WelcomeSlide
      :actualSlide="actualSlide"
      :slideValue="0"
      @updateSlide="updateSlide"/>
    <AboutMeSlide
      :actualSlide="actualSlide"
      :slideValue="1"
      @updateSlide="updateSlide"/>
    <MyProjectsSlide
      :actualSlide="actualSlide"
      :slideValue="2"
      @updateSlide="updateSlide"/>
  </div>
</template>

<script>

import WelcomeSlide from '@/components/BodyContent/WelcomeSlide'
import AboutMeSlide from '@/components/BodyContent/AboutMeSlide'
import MyProjectsSlide from '@/components/BodyContent/MyProjectsSlide'

export default {
  name: 'BodyContent',
  components: {
    WelcomeSlide,
    AboutMeSlide,
    MyProjectsSlide
  },
  data () {
    return {
      actualSlide: 0
    }
  },
  methods: {
    updateSlide (newValue) {
      if (!newValue) this.actualSlide++
      if (newValue === 'prev') {
        this.actualSlide--
      } else {
        if (typeof newValue === 'number') this.actualSlide = newValue
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container  {
  height: calc(100% - (var(--menu-height) * 2));
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
}
</style>
