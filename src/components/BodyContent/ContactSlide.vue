<template>
  <div
    :tabindex="tabIndex"
    class="slide b-black">
    <h2 class="b-yellow">Contact<span class="t-black">.</span></h2>
    <div>
      <p>
        You can find me in any of my social media
      </p>
    </div>
    <div class="social-media-link">
      <a
        v-for="(item, i) in socialLink"
        :key="i"
        :href="item.url"
        target="_blank"
        class="item">
        <div>
          <component :is="item.icon"/>
          <br>
          <label>{{ item.title }}</label>
        </div>
      </a>
    </div>
    <div class="disclaimer">
      {{ message }}
    </div>
    <ChangeSlide
      :actualSlide="actualSlide"
      :slideValue="slideValue"
      :direction="'up'"
      @keydown.enter="updateSlide('prev')"
      @keydown.space="updateSlide('prev')"
      @click="updateSlide('prev')"/>
  </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'
import GithubIcon from '@/components/Icons/GithubIcon.vue'
import InstagramIcon from '@/components/Icons/InstagramIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'

export default {
  name: 'ContactSlide',
  mixins: [slideMixin],
  components: {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon
  },
  data () {
    return {
      socialLink: [
        {
          title: 'CoffeAddict',
          url: 'https://github.com/CoffeAddict',
          icon: 'GithubIcon'
        },
        {
          title: 'arodriguezesteban',
          url: 'https://www.linkedin.com/in/arodriguezesteban/',
          icon: 'LinkedinIcon'
        }
      ],
      message: 'Made with ❤️ using Vue'
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

p {
  margin-bottom: 5em;
}

.social-media-link {
  display: flex;
}

.item {
  background: var(--yellow);
  width: 13em;
  height: 15em;
  padding: 2em;
  text-align: center;
  margin: 0 1em;
  transition: transform .2s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }

  > div {
    color: var(--white);
    width: 100%;
    height: fit-content;

    svg {
      width: 5em;
      margin-bottom: 2em;
    }

    label {
      font-size: 1em;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: $tablet-breakpoint) {
  .social-media-link {
    flex-wrap: wrap;

    a {
      width: 100%;
      height: fit-content;
      padding: .5em;
      margin-bottom: 1em;

      &:hover {
        transform: none;
      }

      div {
        display: flex;
        align-items: center;

        svg {
          margin: 0;
          margin-right: 1em;
          width: 3em;
        }
      }
    }
  }
}
</style>
