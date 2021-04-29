<template>
    <div class="d-flex footer-container">
      <div class="d-flex container">
        <div class="d-flex footer-sign">
          <div>
            {{ year }} -&nbsp;<b>Andres Rodriguez</b>&nbsp;- <span>Buenos Aires, Argentina</span>
          </div>
        </div>
        <div class="d-flex icons-container">
          <a
            target="_blank"
            class="t-white"
            href="https://www.instagram.com/cafeadicto_/">
            <IconInstagram/>
          </a>
          <a
            target="_blank"
            class="t-white"
            href="https://www.linkedin.com/in/arodriguezesteban/">
            <IconLinkedin/>
          </a>
          <a
            target="_blank"
            class="t-white"
            href="https://github.com/CoffeAddict">
            <IconGithub/>
          </a>
        </div>
      </div>
    </div>
</template>

<script>

import IconInstagram from '@/components/Icons/InstagramIcon.vue'
import IconLinkedin from '@/components/Icons/LinkedinIcon.vue'
import IconGithub from '@/components/Icons/GithubIcon.vue'

export default {
  name: 'Footer',
  components: {
    IconInstagram,
    IconLinkedin,
    IconGithub
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="scss">
.footer-container {
  min-height: var(--menu-height);
}

a {
  $size: 2em;
  width: $size;
  height: $size;
  margin-right: 1em;
  transition: all 0.3s cubic-bezier(.22,.68,0,1.71);
}

a:hover {
  color: var(--yellow);
  transform: scale(1.1);
}

.icons-container {
  padding-left: 1em;
}

span {
  white-space: nowrap;
}

.container {
  justify-content: space-between;
  align-items: center;
}
</style>
