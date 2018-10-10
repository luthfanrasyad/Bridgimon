<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.frame {
  width: 375px;
  height: 667px;
  border-top: 20px solid #000000;
  border-bottom: 20px solid #000000;
  border-left: 5px solid #000000;
  border-right: 5px solid #000000;
  border-radius: 20px;
}
</style>
