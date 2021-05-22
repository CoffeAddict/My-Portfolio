<template>
  <div class="slide b-black">
    <h2 class="b-yellow">MyProjects<span class="t-black">.</span></h2>
    <div>
      <p>
        Hey! I'm Andrés Rodríguez, a {{ age }}-year-old frontend developer from <b>Argentina</b>.
        I have worked as a developer since 2018 and worked with a variety of
        technologies such as Vue, Typescript, and Node.js
      </p>
      <p>
        Currently I'm working in <b>Simplistic</b> as Developer — creating new features and bringing support to our clients using Shopify
      </p>
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
  mixins: [slideMixin]
}
</script>
