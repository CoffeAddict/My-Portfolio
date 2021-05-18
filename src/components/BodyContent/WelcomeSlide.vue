<template>
    <div
        class="main-background b-yellow">
        <h2>wel<br>come</h2>
        <div class="black-section"></div>
        <ul>
          <li v-for="(link, i) in pageLinks" :key="i" >
            <a
              @click.prevent="$emit('updateSlide', actualSlide + 1)"
              :href="link.url">
              {{ link.text }}<span>.</span>
            </a>
          </li>
        </ul>
        <ChangeSlide
          @click="updateSlide()"/>
    </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'

export default {
  name: 'BodyContent',
  mixins: [slideMixin],
  mounted () {
    this.initialAnimation()
  },
  data () {
    return {
      pageLinks: [
        {
          text: 'About Me',
          url: ''
        }
      ]
    }
  },
  methods: {
    initialAnimation () {
      const timeline = this.gsap.timeline()
      this.gsap.from('.main-background h2', { x: 200, duration: 1, ease: 'expo.out' })
      timeline
        .from('.main-background .black-section', { x: -5000, duration: 1.3, ease: 'power4.out' })
        .fromTo('.main-background ul li', { opacity: 0, x: 35 }, { opacity: 1, x: 65, duration: 0.5, stagger: 0.15 })
    }
  }
}
</script>

<style scoped lang="scss">
.main-background {
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}

h2 {
  color: var(--white);
  font-family: 'Bebas Neue';
  font-size: 20em;
  line-height: .8em;
  margin: 0 auto;
  margin-right: 80px;
  z-index: 2;
}

.black-section {
  background: var(--black);
  height: 112%;
  width: 410px;
  position: absolute;
  right: -70px;
  transform: rotate(10deg);
  z-index: 1;
}

ul {
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    $cubic-bezier: cubic-bezier(.22,.68,0,1.71);
    $animation-delay: .2s;

    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 10px;
    white-space: nowrap;
    transition: width .7s $cubic-bezier;
    transition-delay: $animation-delay;
    width: 0;
    max-width: fit-content;

    &:hover {
      width: 150px;
      background: var(--black);

      span {
        color: var(--yellow);
      }
    }

    a {
      text-decoration: none;
      color: var(--white);
      transition: text-shadow .5s ease;
      padding: 0 3px;
    }

    span {
      color: var(--black);
      transition: color .3s ease;
      transition-delay: $animation-delay;
    }
  }
}
</style>
