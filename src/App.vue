<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-link :to="{ name: 'HelloWorld' }">Home</router-link>
    <router-link to="/installers">Installers Page</router-link>
    <router-link to="/faq">FAQ Page</router-link>
    <router-link to="/installation">Installation Page</router-link>
    <router-link to="/other">Other Page</router-link>
    <router-link to="/robpin">Robpin Page</router-link>
    <router-link to="/contactus">Contact Us Page</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
