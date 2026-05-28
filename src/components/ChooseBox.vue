<template>
<div class="col-md-12">
                  <div class="choose_box">
                     <span>{{broj}}</span>
                     <p>{{tekst}}</p>
                  </div>
               </div>
    
</template>


<style>


</style>




<script>
export default {
props:{
broj: {
      type: String,
      required: true
    },
tekst: {
      type: String,
      required: true
    }
}


    
}
</script>





