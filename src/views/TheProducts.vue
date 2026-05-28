<template>

<div id="products">
<div class="container">
<div class="row justify-content-center">

<h2>Pronadjite vasa vozila po najboljim cenana</h2>



</div>
<input type="text" v-model="name"  @input='pretraga' placeholder="PRETRAZI" name="" id="">
</div>





<div class="container  d-flex justify-content-center "  v-if="!this.spinner">
  <div class="row mt-5">

<TheCarVue      v-for="auto in this.$store.getters.podaci"  :key="auto.naziv" :info="auto"  ></TheCarVue>



   
  
  
  
  </div>




</div>
<span  v-else  class="loader"></span>




</div>

</template>


<script>
import TheCarVue from '../components/TheCar.vue'



export default {
   
    components:{
        TheCarVue
    },
    data() {
      return {
        spinner:false,
        name:""
      }
    },
    methods: {
      pretraga(){
        
     let e=this.$store.state.carsrc.filter(x=>x.naziv.toLowerCase().includes(this.name.toLowerCase()))
     this.$store.commit("upisicardel",e)

      }
  


      
    },



}
</script>

<style>
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
} 
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #FF3D00;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>