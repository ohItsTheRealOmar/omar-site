<template>
  <div> 
    <Navbar/>   
  <router-view/>
  <TheFooter/>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
name: 'App',
components:{
  Navbar,
  TheFooter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}


h1, h2, h3 {
font-family: 'Cinzel', serif;
}
p{
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
