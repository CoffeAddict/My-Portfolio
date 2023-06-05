<template>
    <div
      :tabindex="tabIndex"
      class="main-background b-yellow">
      <Welcome/>
      <div class="black-section"></div>
      <ul>
        <li v-for="(link, i) in pageLinks" :key="i" >
          <a
            @keydown.enter="updateSlide(link.id)"
            @keydown.space="updateSlide(link.id)"
            @click.prevent="updateSlide(link.id)"
            :href="link.url">
            {{ link.text }}<span>.</span>
          </a>
        </li>
      </ul>
      <ChangeSlide
        :actualSlide="actualSlide"
        :slideValue="slideValue"
        @keydown.enter="updateSlide()"
        @keydown.space="updateSlide()"
        @click="updateSlide()"/>
    </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'
import Welcome from '@/components/Icons/Welcome.vue'

export default {
  name: 'BodyContent',
  mixins: [slideMixin],
  components: {
    Welcome
  },
  mounted () {
    this.initialAnimation()
  },
  data () {
    return {
      pageLinks: [
        {
          id: 1,
          text: 'My Projects',
          url: 'my-projects'
        },
        {
          id: 2,
          text: 'About Me',
          url: 'about-me'
        },
        {
          id: 3,
          text: 'Contact',
          url: 'contact'
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

.main-background {
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}

.welcome-svg {
  // font-size: 20em;
  height: 75%;
  margin: 0 auto;
  margin-right: 80px;
  z-index: 2;
  user-select: none;
}

.black-section {
  background: var(--black);
  height: 100vh;
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
    $cubic-bezier: cubic-bezier(.22,.68,0,1.2);
    $animation-delay: .2s;

    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 10px;
    white-space: nowrap;
    transition: width .7s $cubic-bezier;
    // transition-delay: $animation-delay;
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

@media screen and (max-width: $tablet-breakpoint) {
  .welcome-svg {
    height: 40%;
    margin: 0 auto;
    margin-bottom: 20vh;
  }

  ul {
    z-index: 1;
    bottom: 15vh;
  }
}
</style>
