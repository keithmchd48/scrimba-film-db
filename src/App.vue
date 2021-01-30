<template>
  <div id="app">
    <FilmList></FilmList>
  </div>
</template>

<script>
import FilmList from '@/views/FilmList'
export default {
  name: 'App',
  components: {FilmList}
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

body {
  margin: 0;
}

* {
    box-sizing: border-box;
  }
</style>
