<template>
  <div class="d-flex container b-black">
    <WelcomeSlide
      :actualSlide="actualSlide"
      :slideValue="0"
      @updateSlide="updateSlide"/>
    <MyProjectsSlide
      :actualSlide="actualSlide"
      :slideValue="1"
      @updateSlide="updateSlide"/>
    <AboutMeSlide
      :actualSlide="actualSlide"
      :slideValue="2"
      @updateSlide="updateSlide"/>
    <ContactSlide
      :actualSlide="actualSlide"
      :slideValue="3"
      @updateSlide="updateSlide"/>
  </div>
</template>

<script>

import WelcomeSlide from '@/components/BodyContent/WelcomeSlide'
import AboutMeSlide from '@/components/BodyContent/AboutMeSlide'
import MyProjectsSlide from '@/components/BodyContent/MyProjectsSlide'
import ContactSlide from '@/components/BodyContent/ContactSlide'

export default {
  name: 'BodyContent',
  components: {
    WelcomeSlide,
    AboutMeSlide,
    MyProjectsSlide,
    ContactSlide
  },
  data () {
    return {
      actualSlide: 0,
      maxSlide: 3,
      mouseWheelCycling: false,
      touchStartPos: null,
      swipeThreshold: 100
    }
  },
  created () {
    window.addEventListener('keydown', this.keyNavigation)
    window.addEventListener('wheel', this.scrollNavigation, { passive: false })
    window.addEventListener('touchstart', this.swipeNavigationStart, { passive: false })
    window.addEventListener('touchend', this.swipeNavigationEnd, { passive: false })
  },
  methods: {
    updateSlide (newValue) {
      if (this.actualSlide === 0 && newValue === 'prev') return
      if (this.actualSlide === this.maxSlide && !newValue) return

      if (!newValue) this.actualSlide++
      if (newValue === 'prev') {
        this.actualSlide--
      } else {
        if (typeof newValue === 'number') this.actualSlide = newValue
      }
    },
    keyNavigation (event) {
      if (!event || !event.keyCode) return
      const keycode = event.keyCode

      switch (keycode) {
        case 38:
          this.updateSlide('prev')
          break
        case 40:
          this.updateSlide()
          break
        case 13:
          this.updateSlide()
          break
      }
    },
    scrollNavigation (event) {
      event.preventDefault()
      event.stopPropagation()

      if (this.mouseWheelCycling === false) {
        this.mouseWheelCycling = true

        if (event.deltaY < 0) {
          this.updateSlide('prev')
        } else if (event.deltaY > 0) {
          this.updateSlide()
        }

        setTimeout(() => { // Scroll Threshold
          this.mouseWheelCycling = false
        }, 1500)
      }
    },

    swipeNavigationStart (event) {
      this.touchStartPos = event.touches[0].pageY
    },

    swipeNavigationEnd (event) {
      const touchEndPos = event.changedTouches[0].pageY
      const swipeDistance = this.touchStartPos - touchEndPos

      if (swipeDistance > this.swipeThreshold) {
        this.updateSlide()
      } else if (swipeDistance < (this.swipeThreshold * -1)) {
        this.updateSlide('prev')
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
