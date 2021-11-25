<template>
    <div class="d-flex footer-container">
      <div class="d-flex container">
        <div class="d-flex footer-sign">
          <div>
            {{ year }} -&nbsp;<b>Andres Rodriguez</b>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
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

span {
  white-space: nowrap;
}

.container {
  justify-content: space-between;
  align-items: center;
}
</style>
