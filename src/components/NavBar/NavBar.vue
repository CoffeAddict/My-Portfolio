<template>
  <div
    class="d-flex navbar-container">
    <div class="d-flex container">
      <h1>Andres Rodriguez<span class="t-yellow">.</span></h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-container {
  min-height: var(--menu-height);
  max-height: var(--menu-height);
}

.container {
  align-items: center;
  justify-content: space-between;
}

.language-controls a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
