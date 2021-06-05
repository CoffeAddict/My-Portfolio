<template>
  <div class="slide b-black">
    <h2 class="b-yellow">MyProjects<span class="t-black">.</span></h2>
    <div>
      <p>
        Most of the projects I worked are for internal use within companies but I worked in a large amount of web apps, mostly using Vue.
        <br>
        <br>
      </p>
      <h3>Here are some of my favourites <span>*</span>:</h3>
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.65);
  margin: 0 1em;
  transition: transform .3s ease;
}

.slide h3 {
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  span {
    position: absolute;
    font-size: .4em;
    right: 12px;
  }
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
      margin-top: .7em;
      font-size: 1.2em;
      position: relative;
      padding: 0 3px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 0;
        background-color: var(--yellow);
        height: 100%;
        transition: width 0.3s cubic-bezier(.22,.68,0,1.2);
        z-index: -1;
      }

      &:hover {
        cursor: pointer;

        &::before {
          width: 100%;
        }
      }
    }
  }
}

.disclaimer {
  font-size: .8em;
}
</style>
