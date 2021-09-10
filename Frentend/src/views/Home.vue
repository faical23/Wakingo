<template>
  <v-app class="grey lighten-4">
 <navbar />
 
  </v-app>
 
</template>


<script>

  // import HelloWorld from '../components/HelloWorld'
  import navbar from '../components/navbar'

  export default {
    name: 'Home',

    components: {
      navbar,
    
    },
  }
</script>
