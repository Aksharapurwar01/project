<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Homee data="Akshara is Here"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Homee from '../components/Home.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Homee,
    
  }
}
</script>
