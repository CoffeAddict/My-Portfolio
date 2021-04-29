<template>
  <div
    :style="cssVars"
    class="b-black t-white main-container">
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
  },
  data () {
    return {
      cssVars: {
        // General
        '--content-width': '1400px',
        '--content-padding': '1em',
        // Layout
        '--menu-height': '5em',
        // Breakpoints
        '--tablet-breakpoint': '900px',
        '--mobile-breakpoint': '600px'
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  height: 100vh;
}
</style>
