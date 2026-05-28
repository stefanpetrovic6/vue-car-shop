<template>
    <div>
<section class="py-5">
  <div class="container">
    <div class="row gx-5">
      <aside class="col-lg-6 sp2">
        <div class="border rounded-4 mb-3 d-flex justify-content-center mt-6">
         
            <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" :src="put" />
         
        </div>
        
        <!-- thumbs-wrap.// -->
        <!-- gallery-wrap .end// -->
      </aside>
      <main class="col-lg-6">
        <div class="ps-lg-3">
          <h4 class="title text-dark">
            {{this.$store.state.cars2.naziv}} <br />
            
          </h4>
          

          <div class="mb-3">
            <span class="h5">{{this.$store.state.cars2.cena}}</span>
            <span class="text-muted">/price</span>
          </div>

          <p class="stefan">
            {{this.$store.state.cars2.opis}}
          </p>
          <hr/>

          <div class="row">
            <dt class="col-3">Cilindri:</dt>
            <dd class="col-9">{{this.$store.state.cars2.broj_ventila}}</dd>

            <dt class="col-3">Broj Konja</dt>
            <dd class="col-9">{{this.$store.state.cars2.hp}}</dd>

            <dt class="col-3">Obrtni Moment</dt>
            <dd class="col-9">{{this.$store.state.cars2.obrtni_moment}}</dd>

            <dt class="col-3">Zapremina</dt>
            <dd class="col-9">{{this.$store.state.cars2.radna_zapremina}}</dd>
            <dt class="col-3">Gorivo</dt>
            <dd class="col-9">{{this.$store.state.cars2.vrsa_goriva}}</dd>
             <dt class="col-3">Motor</dt>
            <dd class="col-9">{{this.$store.state.cars2.motor}}</dd>
          </div>

          <hr />

         
         
        </div>
      </main>
    </div>
  </div>
</section>

        
    </div>
</template>
<script>



export default {
async created() {
let broj=this.$route.params.id
    await this.$store.dispatch("filter",broj)
   console.log(this.$store.state.cars2)
   this.put=require("../assets/"+this.$store.state.cars2.slika)


},
data() {
    return {
        put:''
    }
},


    
}
</script>


<style>
.icon-hover:hover {
  border-color: #3b71ca !important;
  background-color: white !important;
  color: #3b71ca !important;
}




.icon-hover:hover i {
  color: #3b71ca !important;
}

.sp2{

margin-top: 120px;

}
.rounded-4{

border-radius: 10px;

}


</style>