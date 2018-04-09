<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>

import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}
</style>
