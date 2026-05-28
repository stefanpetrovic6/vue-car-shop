<template>

<div class="app">
<!--Banner Start -->
     <section class="banner_main">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-12">
                  <div class="text-bg">
                     <h1>Najbolji auto za Vas</h1>
                     <strong>Najbolje Cene</strong>
                     <span>Duga tradicija</span>
                     <p>
                        Saznajte zasto smo prvi izbor svim kupcima vec godinama!
                        
                     </p>
                     <a href="#">PROCITAJ VISE</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!--Banner End -->

      <!--Car Start -->
     <div  class="car">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>BRENDOVI FAVORITI </h2>
                     <span>Proverite nasu siroku ponudu luksuznih automobila i uverite se u nas kvalitet</span>
                  </div>
               </div>
            </div>
            <div class="row mt-4">
<TheManufacturerVue  v-for="auto in proizvodjaci"   :ime="auto.ime" :src="auto.slika"    :key="auto.ime"  ></TheManufacturerVue>
            </div>
         </div>
      </div>

 <div class="choose sp ">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Zasto izabrati nas</h2>
                     <span class='sf'>Odaberite naš salon automobila za svoju sljedeću kupovinu automobila i  <br> doživite razliku. </span>
                  </div>
               </div>
            </div>
            <div class="row">
             <ChooseBoxVue    v-for="komm in choose"   :broj="komm.broj" :tekst="komm.tekst"    :key="komm.broj"     ></ChooseBoxVue>
            </div>
         </div>


     </div>
         </div>
</template>








<style>

@import url('https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700');
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');



.sp{

background-color: rgb(9, 9, 9);
color:#fff

}



.multi {
     color: #f6d601;
     font-weight: bold;
     font-size: 40px;
}

.color_chang {
     color: #0c0c0e;
font-size: 33px;

}















.choose {
     margin-top: 90px;
}

.choose .titlepage h2 {
     padding-bottom: 20px;
}

.choose .titlepage span {
     font-size: 17px;
     line-height: 28px;
     color: #0c0c0e;
}

.choose .choose_box {
     text-align: center;
}

.choose .choose_box span {
     color: #fff;
     background-color: #23262d;
     border-radius: 60px;
     border: #f6d601 solid 5px;
     padding: 20px 27px;
     display: inline-block;
     font-size: 20px;
     margin-bottom: 20px;
}

.choose .choose_box p {
     color: #5c5c5c;
     font-size: 16px;
     line-height: 28px;
     margin-bottom: 50px;
}









.cutomer {
     margin-top: 40px;
     padding-bottom: 120px;
     background: #23262d;
     padding-top: 60px;
}

.cutomer .titlepage h2 {
     color: #fff;
}

.cutomer_Carousel .carousel-caption {
     position: inherit;
     padding: 0;
}




.cross_img {
     margin-bottom: -55px;
}

.cross_img figure {
     margin: 0;
     position: relative;
     z-index: 1;
}

.cutomer_box {
     text-align: center;
}

.our {
     background: #fff;
     margin: 0px 40px;
}

.cross_layout {
     transform: skew(-20deg);
}

.test_box {
     padding: 40px 50px;
     transform: skew(20deg);
}

.cutomer_Carousel .test_box h4 {
     font-size: 17px;
     color: #030000;
     line-height: 18px;
     display: block;
     padding-bottom: 2px;
     padding-top: 30px;
}

.cutomer_Carousel .test_box span {
     font-size: 17px;
     line-height: 28px;
     color: #f6d601;
}

.cutomer_Carousel .test_box p {
     font-size: 17px;
     line-height: 28px;
     color: #1c1b1b;
     font-style: Italic;
     padding-bottom: 20px;
}

.cutomer_Carousel .carousel-indicators {
     bottom: -50px;
}

.cutomer_Carousel .carousel-indicators li {
     width: 45px;
     height: 13px;
     background: #f6d601;
     border-radius: 10px;
}

.cutomer_Carousel .carousel-indicators li.active {
     background: #ffffff;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
     display: none;
}



h1 {
     font-size: 24px;
     font-family: 'Righteous', cursive;
}

h2 {
     font-size: 22px;
     font-family: 'Righteous', cursive;
}

h3 {
     font-size: 18px;
     font-family: 'Righteous', cursive;
}


.text-bg strong {
     font-family: 'Righteous', cursive;
     font-size: 40px;
     line-height: 50px;
     color: #fff;
     padding-bottom: 10px;
     display: block;
}
.text-bg span {
     font-family: 'Righteous', cursive;
     color: #f6d601;
     font-size: 40px;
     line-height: 50px;
     font-weight: bold;
     padding-bottom: 20px;
     display: block;
}


.sf{

color: #fff!important;


}




body {
     color: #666666;
     font-size: 14px;
     font-family: 'Poppins', sans-serif;
     line-height: 1.80857;
     font-weight: normal;
}





.car {
     background: #fff;
     margin-top: 90px;
}

.car .titlepage h2 {
     color: #030100;
     margin-bottom: 20px;
}

.car .titlepage span {
     color: #23262d;
     font-size: 17px;
     line-height: 28px;
}

.padding_leri {
     padding-right: 0;
     padding-left: 0;
}

.car_box {
     text-align: center;
}

.car_box figure {
     margin: 0;
}

.car_box figure img {
     width: 50%;
     height: 50%;
}

.car_box h3 {
     color: #0c0c0e;
     background-color: #f6d601;
     font-size: 30px;
     line-height: 28px;
     height: 84px;
     align-items: center;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     margin-top: 30px;
     padding: 0;
}


.container{
width:85%!important

}


.banner_main {
     background: url(../assets/banner.jpg);
     background-repeat: no-repeat;
     min-height: 500px;
     display: flex;
     justify-content: center;
     align-content: center;
     align-items: center;
     background-size: 100% 100%;
 
}
.text-bg {
     text-align: center;
     padding-bottom: 50px;
}

.text-bg h1 {
     color: #fff;
     font-size: 42px;
     line-height: 90px;
     padding-bottom: 8px;
     font-weight: bold;
}

.text-bg strong {
     font-family: 'Righteous', cursive;
     font-size: 30px;
     line-height: 50px;
     color: #fff;
     padding-bottom: 10px;
     display: block;
}

.text-bg span {
     font-family: 'Righteous', cursive;
     color: #f6d601;
     font-size: 40px;
     line-height: 50px;
     font-weight: bold;
     padding-bottom: 20px;
     display: block;
}

.text-bg p {
     color: #fff;
     font-size: 12px;
     line-height: 28px;
     padding-bottom: 60px;
}

.text-bg a {
     font-family: 'Righteous', cursive;
     font-size: 17px;
     background-color: #fff;
     color: #000;
     padding: 13px 0px;
     width: 100%;
     max-width: 190px;
     text-align: center;
     display: inline-block;
     transition: ease-in all 0.5s;
}

.text-bg a:hover {
     background-color: #f6d601;
     color: #000;
     transition: ease-in all 0.5s;
     border-radius: 26px;
}


</style>



<script>
import ChooseBoxVue from '../components/ChooseBox.vue'

import TheManufacturerVue from '../components/TheManufacturer.vue'



export default {

components:{
TheManufacturerVue,ChooseBoxVue


},
data() {
     return {
           proizvodjaci:[
    {
       "ime":"Audi",
       "slika":require('@/assets/audi.png')

    },
     {
       "ime":"BMW",
       "slika":require("@/assets/bmw.png")

    },
     {
       "ime":"Mercedes",
       "slika":require("@/assets/merc.png")

    }
             

           ],


     choose:[
{
broj:"01",
tekst:"Širok Asortiman Vrhunskih Vozila: Naš salon nudi impresivan izbor novih automobila koji zadovoljavaju različite potrebe i stilove vožnje. Bez obzira tražite li obiteljski SUV, sportski automobil ili ekonomičan gradski automobil, imamo vozilo koje odgovara vašim željama."


},
{
broj:"02",
tekst:"Povoljne Cijene i Povlastice: Ponosimo se konkurentnim cijenama i atraktivnim financijskim opcijama koje čine kupovinu automobila jednostavnom i pristupačnom. Naš tim financijskih stručnjaka pomoći će vam pronaći najbolji plan financiranja koji odgovara vašem budžetu."


},
{
broj:"03",
tekst:"Vrhunska Kvaliteta i Sigurnost: Sva naša vozila prolaze stroge inspekcije kako bi osigurali da su sigurna i pouzdana. Bez obzira odabirete li novi ili rabljeni automobil, garantiramo vrhunsku kvalitetu i pouzdanost."


},
{
broj:"04",
tekst:"Inovativni Dostupni Dodaci: Uz naš asortiman dodataka i nadogradnji, možete personalizirati svoje vozilo prema svojim željama i potrebama. Nudimo najnovije tehnološke inovacije i dodatnu opremu kako bismo osigurali da vaše iskustvo vožnje bude besprekorno."


},




     ]      



     }
},

    
}
</script>