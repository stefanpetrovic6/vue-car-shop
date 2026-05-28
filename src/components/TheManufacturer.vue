<template>


  <div class="col-md-4   padding_leri">
                  <div class="car_box">
                     <figure><img :src="src" alt="#"/></figure>
                     <h3>{{ime}}</h3>
                  </div>
               </div>

    
</template>


<script>
export default {
    
props:{
  ime: {
      type: String,
      required: true
    },
      src: {
      type: String,
      required: true
    }



}



}
</script>









<style>





</style>