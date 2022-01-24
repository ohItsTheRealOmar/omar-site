<template>
    <div class="slider containor">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item slide1 active">
        <div class="containor BG">
            <div class="row justify-content-between">
                <div class="col-3">
                </div>
                <div class="col ">
                    <div class="row">
                        <h1 id="My-Name-Title" class="my-name-again white">Omar Crespo-McLain</h1>
                    </div>
                    <div class="row">
                        
                        <div class="col w-100">
                        <h2 class="w-100 white">Your Local Website Dev</h2>
                        </div>
                    </div>
                    
                    <div class="row justify-content-center">
                 
                    </div>

                    
                </div>
                <div class="col-3">
                    
                </div>
            </div>
        
           
            <router-link class="w-auto" to="/CalendarPage"><button type="  button" class="raise   btn m-1 btn-dark">Content Calendar</button></router-link>
            <router-link class="w-auto" to="/FormPage"><button type=" button" class="raise fill button2 btn m-1 btn-outline-dark">Schedule Meeting</button></router-link>


            
        </div>

    </div>

    <div class="carousel-item slide2 ">
        <Slide2/>
    </div>

    <div class="carousel-item slide3">
        <div class="row justify-content-center">
            <h1 class="slide3-title white">Scheduel A Meeting or Get in Contact</h1>
        </div>
        <div class="row">
            <div class="col-3">
            </div>
            <div class="col">
                        <ul class=" list1 p-1 white ">
                        <h3>General Services </h3>
                        <li>Online Course Production & Building</li>
                        <li>Website Creation & Hosting</li>
                        <li>Social Media Content</li>
                        <li>Traffic Building</li>
                        <li>SEO</li>
                    </ul>
            </div>
            <div class="col-3">
            </div>
         </div>
        <div class="row justify-content-center ">
        <router-link class="w-auto" to="/CalendarPage"><button type="button" class="btn w-100  btn-outline-light">Content Calendar</button></router-link>
        <router-link class="w-auto" to="/FormPage"><button type="button" class="btn   w-100  btn-outline-light">Schedule Meeting</button></router-link>
        </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>
<script>
import Slide2 from "@/components/Slide2.vue"
export default {
    name:'Slider',
    components: { 
        Slide2
        
    }

}
</script>
<style>
@media screen and (max-width:768px){
  .white{
    font-size: 1.2em;
    justify-content: center;
}
#My-Name-Title{
    font-size: 4em;

}
.slide3-title{
    font-size: 2em;
}
}
.my-name-again{
    font-size: 5em;
}
.center{
    position: relative;
    top:2em;
}
.raise:hover,
.raise:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}
.white{
    color:white;
}
.slide1{
    background-color: black;
}
.BG{
    box-shadow: inset  1000px 1000px 1000px rgba(138, 43, 226, 0.4);
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://as.ftcdn.net/r/v1/pics/ba0bcb3d88cd20bdc80ba943f02f31e1e1c7ce61/home/discover_collections/21Sept/premium.webp");
}
.white{
color: white;
}
.button1:hover{
background-color: darkgray;
color:black;
}
.button2{
    color: white;
    border: white solid 2px;
}
h2{
    width: 100%;
    font-size: 3em;
}
.button2:hover{
    background-color: #ffffff;
    color:rgb(0, 0, 0);
}

.slider{
    margin:0;
    background-color: white;
}
.thead{
    color:black;
}
.list1{
    list-style: none;
    border: rgb(255, 255, 255) 1px solid;
}
.underline{
    text-decoration: underline black 2px;
}
.slide1, .slide2, .slide3{
    background-size: 100%;
    background-repeat: no-repeat;
    
}

.slide2{
    box-shadow: inset  1000px 1000px 1000px rgb(0, 0, 0, .6);
    background-size: cover;
    background-image: url('https://t4.ftcdn.net/jpg/03/64/56/23/240_F_364562300_oczSJOMIc7Y3FogcNN0xhSReZyNVXNmB.jpg');

}
.slide3{
    background-image: url('https://t4.ftcdn.net/jpg/01/76/25/31/240_F_176253130_7YZxBaa8XS9zkrbEfvbSrkIVR4Q2isNg.jpg');
       background-size:contain;
       background-position-x: 100%;
       background-color: black;
}
.carousel-item{
    height: 400px;
}
.xs{
    height: 70%;
}


.Long{
    height: 400px;
}
</style>
