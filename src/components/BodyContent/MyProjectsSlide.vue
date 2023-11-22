<template>
  <div
    :tabindex="tabIndex"
    class="slide b-black">
    <h2 class="b-yellow">MyProjects<span class="t-black">.</span></h2>
    <div>
      <p>
        Most of the projects I worked on are for internal use within companies, but I also worked on the development of webapps.
        <br>
        <br>
      </p>
      <h3>Here are some of my favourites <span>*</span>:</h3>
      <div class="slider-container">
        <keenSlider :slides="projectSlides"/>
      </div>
    </div>
    <div class="disclaimer">
      Disclaimer: This web apps are not my property and have not been entirely developed by me. This web apps may or may not be developed with Vue.js
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
import keenSlider from '@/components/Global/KeenSlider.vue'
import projectSlides from '@/components/BodyContent/ProjectSlides.vue'

export default {
  name: 'MyProjectsSlide',
  mixins: [slideMixin],
  components: {
    keenSlider
  },
  data () {
    return {
    }
  },
  computed: {
    tabIndex () {
      return this.actualSlide === this.slideValue ? '1' : '-1'
    },
    projectSlides () {
      return projectSlides
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

.slide p {
  margin-bottom: 0;
}

.slide h3 {
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  letter-spacing: 0;

  span {
    position: absolute;
    font-size: .4em;
    right: 12px;
  }
}

p {
  margin-bottom: 0;
}

h3 {
  margin-top: 0;
}

.disclaimer {
  font-size: .8em;
}

.slider-container {
  max-width: 750px;
  margin: 0 auto;
}

@media screen and (max-width: $tablet-breakpoint) {
  .slide {
    .image-slide {
      max-width: 100%;
      flex-wrap: wrap;

      a {
        width: 100%;

        label {
          background-color: var(--yellow);
          font-weight: bold;
          padding: 5px;
          letter-spacing: 0.05em;

          &::before {
            display: none;
          }
        }
      }

      img {
        display: none;
      }
    }

    h3 {
      span {
        right: 8px;
      }
    }
  }

  .slider-container {
    max-width: 500px;
  }

  .slide .arrow-container.arrow-down {
      bottom: 3.5em;
  }
}
</style>
