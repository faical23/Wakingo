<template>
  <div class="HomePage">
      <SideBar/>
      <div class="Content">
          This Is home Page
      </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar/Index.vue'

  export default {
    name: 'Home',

    components: {
      SideBar,
      
    },
  }
</script>
