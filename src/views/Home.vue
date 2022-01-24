<template>
  <div class=" containor home">
    <Slider/>
    <AboutMe/>
    <div class="Title1 ">
      <h1>Skill Set</h1>
    </div>
    <Skillset/>
    
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import Skillset from '../components/Skillset.vue'
import AboutMe from '../components/AboutMe.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Slider,
    Skillset,
    AboutMe,
    
  }
}
</script>
<style>
.home{
  background-color: black;
}
.Title1 h1{
  position: relative;
  top:50%;
  color: white;
}
 .Title1{
   background-repeat: no-repeat;
   height: 300px;
   background-size:cover;
   background-attachment: fixed;
   background-image: url("https://t3.ftcdn.net/jpg/03/01/18/62/240_F_301186238_xfC2fMA34CGimxYe70nHZ3UhoBlAv8Mj.jpg");
 }
</style>