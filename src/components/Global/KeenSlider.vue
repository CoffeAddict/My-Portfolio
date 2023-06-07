<template>
  <div ref="container" class="keen-slider">
    <keep-alive>
      <component :is="slides"/>
    </keep-alive>
  </div>
</template>

<script>
import { useKeenSlider } from 'keen-slider/vue'
const animation = { duration: 30000, easing: (t) => t }

export default {
  name: 'KeenSlider',
  props: {
    slides: {
      required: true
    }
  },
  setup () {
    const [container] = useKeenSlider({
      loop: true,
      breakpoints: {
        '(max-width: 900px)': {
          slides: {
            perView: 1.75,
            origin: 'center'
          }
        },
        '(min-width: 901px)': {
          slides: {
            perView: 3,
            spacing: 15
          }
        }
      },
      created (s) {
        s.moveToIdx(5, true, animation)
      },
      updated (s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded (s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      }
    })
    return { container }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';
@import url('~keen-slider/keen-slider.css');
</style>
