<template>
  <div id="app">
    <the-menu></the-menu>
    <router-view/>
    <the-footer-vue></the-footer-vue>
  </div>
</template>

<script>
import TheFooterVue from './components/TheFooter.vue';


import TheMenu from './components/TheMenu.vue';


export default {

created() {
  if(localStorage.getItem('reg')){

this.$store.commit('loguj')


  }

this.$store.dispatch('dohvati')

  



},



  components:{
TheMenu,TheFooterVue
    



  }
 


}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
