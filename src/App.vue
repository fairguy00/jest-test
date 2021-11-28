<template>
  <div id='app'>
    <todo-title></todo-title>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TodoTitle from './components/TodoTitle.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    TodoTitle
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
