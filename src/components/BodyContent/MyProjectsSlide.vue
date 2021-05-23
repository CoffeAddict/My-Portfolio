<template>
  <div class="slide b-black">
    <h2 class="b-yellow">MyProjects<span class="t-black">.</span></h2>
    <div>
      <p>
        Most of the projects I have worked on are for internal use within companies.<br>
        In the past {{ age }} years I worked in a large amount of web apps, mostly using Vue.
        <br>
        <br>
      </p>
      <h3>Here are some of my favourites*:</h3>
      <div class="image-slide">
        <a
          v-for="(item, i) in imgList"
          :key="i"
          :href="item.link"
          target="_blank">
          <img
            :src="item.src"
            :alt="item.title">
          <label>{{ item.title }}</label>
        </a>
      </div>
    </div>
    <div class="disclaimer">
      Disclaimer: This web apps are not my property and have not been entirely developed by me. This web apps may or not be developed with Vue.js
    </div>
    <ChangeSlide
      :direction="'up'"
      @keydown.enter="updateSlide('prev')"
      @keydown.space="updateSlide('prev')"
      @click="updateSlide('prev')"/>
    <ChangeSlide
      @click="updateSlide()"/>
  </div>
</template>

<script>
import slideMixin from '@/mixins/slideMethods'

export default {
  name: 'MyProjectsSlide',
  mixins: [slideMixin],
  data () {
    return {
      age: new Date(Date.now() - new Date('11/1/17').getTime()).getFullYear() - 1970,
      imgList: [
        {
          src: require('@/assets/img/webpage1.jpg'),
          link: 'https://www.curehydration.com/',
          title: 'Cure Hydration'
        },
        {
          src: require('@/assets/img/webpage2.jpg'),
          link: 'https://allswellhome.com/',
          title: 'Allswell'
        },
        {
          src: require('@/assets/img/webpage3.jpg'),
          link: 'https://loefflerrandall.com/',
          title: 'Loeffler Randall'
        },
        {
          src: require('@/assets/img/webpage4.jpg'),
          link: 'https://www.branchfurniture.com/',
          title: 'Branch'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
img {
  max-width: 200px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #000;
  margin: 0 1em;
}

.image-slide {
  display: flex;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    text-decoration: none;

    label {
      margin-top: .5em;
      font-size: 1.2em;
    }
  }
}
</style>
