<template>
  <div class="b-black t-white main-container">
    <NavBar/>
    <BodyContent/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import BodyContent from '@/components/BodyContent/BodyContent'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'Layout',
  components: {
    NavBar,
    BodyContent,
    Footer
  }
}
</script>

<style scoped lang="scss">
.main-container {
  height: 100vh;
}

.b-black {
  background-color: var(--black_alt);
}
</style>
