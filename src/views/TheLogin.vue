<template>
    <section class="vh-300 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-400">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-1 mt-md-1 pb-1">

              <h2 class="fw-bold mb-4 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="email" v-model='email' id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input type="password" v-model='pass' id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p v-if="greska">NEISPRAVNI EMAIL IL SIFRA</p>

              <p class="small mb-1 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button @click='login' data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            

            </div>

            <div>
              <p class="mb-3">Don't have an account? <router-link to="/register">Register</router-link> 
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
export default {
  data() {
    return {
      'email':'',
      'pass':'',
      greska:false



    }
  },


  methods: {
    login(){

      let o=this.$store.state.userPodaci

      let reMail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      var reSifra=/^[A-Za-z0-9]{4,}$/

        if(!reMail.test(this.email)||!reSifra.test(this.pass)){

alert("Morate uneti sifru koja ima barem 4 slova i email u formatu:stefan@gmail.com")

        }


       else{
        

 for(let i of o){
          if(i.email==this.email&&i.sifra==this.pass){
               if(i.email=='admin@gmail.com'){
                  this.$store.commit("admin")


               }
                var logovan=true
           this.$store.commit('loguj')
           console.log('uspesno ste se logovali')
           this.$router.push('/cars')

            

          }
          if(logovan!=true){
            this.greska=true
            }
       

       }

       }

      




    }
  },


}
</script>






<style>

.gradient-custom {
/* fallback for old browsers */
background: #6a11cb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}


</style>