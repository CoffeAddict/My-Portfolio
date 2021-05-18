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
  mounted () {
    this.checkFirstPosition()
  },
  methods: {
    checkFirstPosition () {
      if (this.actualSlide > this.slideValue) this.moveUp(0)
      if (this.actualSlide < this.slideValue) this.moveDown(0)
    },
    moveUp (el, height) {
      const element = el ? el.target : this.$el
      const localHeight = height || height === 0 ? height : '-102%'
      this.gsap.to(element, { y: localHeight, duration: 1, ease: 'expo.out' })
    },
    moveDown (el, height) {
      const element = el ? el.target : this.$el
      const localHeight = height || height === 0 ? height : '+102%'
      this.gsap.to(element, { y: localHeight, duration: 1, ease: 'expo.out' })
    },
    updateSlide (newSlide) {
      this.$emit('updateSlide', newSlide)
    }
  },
  watch: {
    actualSlide: function (newVal, oldVal) {
      if (this.slideValue === undefined) return

      if (newVal > this.slideValue) this.moveUp()
      if (newVal < this.slideValue) this.moveDown()

      console.log(this.$options.name, oldVal, this.slideValue)
      if (newVal === this.slideValue) {
        if (oldVal > this.slideValue) this.moveDown(false, 0)
        if (oldVal < this.slideValue) this.moveUp(false, 0)
      }
    }
  }
}
