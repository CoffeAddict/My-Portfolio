<template>
  <div
    v-for="(slide, i) in slides"
    :key="i"
    class="keen-slider__slide">
    <a
      :href="slide.link"
      target="_blank">
      <img
        :src="slide.src"
        :alt="slide.title"
        height="113"
        width="200">
      <label>{{ slide.title }}</label>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProjectSlides',
  data () {
    return {
      slides: [
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
        },
        {
          src: require('@/assets/img/webpage5.png'),
          link: 'https://triburst.com/',
          title: 'Triburst'
        },
        {
          src: require('@/assets/img/webpage6.png'),
          link: 'https://www.todosgamers.com/',
          title: 'TodosGamers'
        },
        {
          src: require('@/assets/img/webpage7.png'),
          link: 'https://press.sandbox.game/#/en/',
          title: 'The Sandbox'
        },
        {
          src: require('@/assets/img/webpage8.png'),
          link: 'https://www.renwicksport.com/',
          title: 'Renwick'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables';

img {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.65);
  margin: 0 1em;
  transition: transform .3s ease;
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-decoration: none;

  img:hover + label::before {
    width: 100%;
  }

  label {
    margin-top: .7em;
    font-size: 1.2em;
    font-weight: 500;
    position: relative;
    padding: 0 3px;
    text-shadow: 1px 1px 1px #00000080;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 0;
      background-color: var(--yellow);
      height: 100%;
      transition: width .3s cubic-bezier(.22,.68,0,1.2);
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
</style>
