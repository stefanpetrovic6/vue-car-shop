import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
userPodaci:[
{
'ime':'Admin',
'email':'admin@gmail.com',
'sifra':'admin'

}


],
ulogovan:false,
admin:false,

cars:[],
carsrc:[],
cars2:""

  },
  getters: {
podaci(state){

return state.cars

}

  },
  mutations: {

dodajkor(state,newval){

state.userPodaci.push(newval)




},
admin(state){

  state.admin=true;
  localStorage.setItem("admin","da")
  
  
  
  
  },
  adminodjava(state){

    state.admin=false;
  
    
    
    
    
    },

loguj(state){


  state.ulogovan=true
  localStorage.setItem('reg','da')




},
odjavi(state){

state.ulogovan=false

},

upisicar(state,newData){

state.cars=newData.data


},
upisisrc(state,newData){

  state.carsrc=newData.data
  
  
  },
upisicardel(state,newData){

  state.cars=newData
  
  
  },
upisicar2(state,newData){

  state.cars2=newData
  
  
  },


  },
  actions: {

    async dohvati(context){

      await axios.get("https://testapi.io/api/stefanp1/resource/cars").then(response => {
       context.commit('upisicar', response.data);
       context.commit('upisisrc', response.data);
       
     })





},
async filter(context,payload){

  await axios.get("https://testapi.io/api/stefanp1/resource/cars/"+payload).then(response => {
    context.commit('upisicar2', response.data);
   
 })





}





  },
  modules: {
  }
})
