<template>
  <div class="slide b-black">
    <h2 class="b-yellow">Contact<span class="t-black">.</span></h2>
    <div>
      <p>
        You can find me in any of my social media
      </p>
    </div>
    <div class="social-media-link">
      <div
        v-for="(item, i) in socialLink"
        :key="i"
        class="item">
        <a
          target="_blank"
          :href="item.url">
          <component :is="item.icon"/>
          <br>
          <label>{{ item.title }}</label>
        </a>
      </div>
    </div>
    <ChangeSlide
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
          title: 'cafeadicto_',
          url: 'https://www.instagram.com/cafeadicto_/',
          icon: 'InstagramIcon'
        },
        {
          title: 'arodriguezesteban',
          url: 'https://www.linkedin.com/in/arodriguezesteban/',
          icon: 'LinkedinIcon'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
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
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 1em;
  border-radius: 5px;
  transition: transform .2s ease;

  &:hover {
    transform: scale(1.05);
  }

  a {
    color: var(--white);
    width: 100%;
    text-decoration: none;

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
</style>
