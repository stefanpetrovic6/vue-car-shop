<template>
    

<section class="vh-300 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
  <div class="mask d-flex align-items-center h-300 gradient-custom-3">
    <div class="container mt-4 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-2 col-lg-7 col-xl-5">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-2">
              <h4 class="text-uppercase text-center mb-5">Create an account</h4>

              <form>

                <div data-mdb-input-init class="form-outline mb-4 col-12">

               <the-form-vue vrsta="text" v-model='ime'   ></the-form-vue>                  

                  
                  
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                     
                </div>
              

                <div data-mdb-input-init class="form-outline mb-4 col-12">
                     <the-form-vue vrsta="email" v-model='mail'   ></the-form-vue>

                  
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                  
                </div>

                <div data-mdb-input-init class="form-outline mb-4 col-12">
                     <the-form-vue vrsta="password" v-model='pass'   ></the-form-vue>

                  
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4 col-12">
                        <the-form-vue vrsta="password" v-model='pass2'   ></the-form-vue>

                 
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  <br>
                  <label v-if='greske.passnema' class="form-label text-danger" for="form3Example4cdg">Sifre moraju biti popunjene</label>
                  <br>
                  <label  v-if='greske.passiste' class="form-label text-danger" for="form3Example4cg">Sifre moraju biti iste i moraju biti popunjene</label>
                  <br>
                  <label v-if='greske.mailime' class="form-label text-danger" for="form3Example4cdg">Ime I mail moraj biti popunjeni</label>
                </div>

              

                <div class="d-flex justify-content-center">
                  <button  type="button" data-mdb-button-init @click='registruj'
                    data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



</template>

<script>
import TheFormVue from '@/components/TheForm.vue'




export default {

components:{
TheFormVue


},



data() {
    return {
        
        ime:'',
        mail:'',
        pass:'',
        pass2:'',
        greske:{
         mailime:false,
         passiste:false,
         passnema:false

        }
    }
    
},


    
methods: {
    registruj(){
    
if(this.pass==''||this.pass2==''){


this.greske.passnema=true

}
else{

this.greske.passnema=false


}



if(this.pass!=this.pass2){

this.greske.passiste=true

}
else{

this.greske.passiste=false

}


if(this.ime==''||this.mail==''){

this.greske.mailime=true



}

else{
this.greske.mailime=false


}


if(this.greske.mailime==false&&this.greske.passiste==false&&this.greske.passnema==false){



let objekat={
'ime':this.ime,
'email':this.mail,
'sifra':this.pass



}

this.$store.commit('dodajkor',objekat)

this.$router.push('/login')





}







    }


},



}
</script>







<style>


.gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}


</style>