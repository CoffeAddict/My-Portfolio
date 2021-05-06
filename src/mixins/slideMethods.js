export default {
  inject: ['gsap'],
  props: {
    actualSlide: {
      type: Number,
      required: true
    },
    slideValue: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      lastSlide: null
    }
  },
  methods: {
    moveUp (el) {
      if (el) {
        this.gsap.to(el.target, { y: '-110%', duration: 1, ease: 'expo.out' })
      } else {
        this.gsap.to(this.$el, { y: '-110%', duration: 1, ease: 'expo.out' })
      }
    },
    moveDown (el) {
      if (el) {
        this.gsap.to(el.target, { y: '+110%', duration: 1, ease: 'expo.out' })
      } else {
        this.gsap.to(this.$el, { y: '+110%', duration: 1, ease: 'expo.out' })
      }
    }
  },
  watch: {
    actualSlide: function (newVal) {
      if (this.slideValue === undefined) return

      if (newVal > this.slideValue) this.moveUp()
      if (newVal < this.slideValue) this.moveDown()
      // ToDo: go back to center
    }
  }
}
