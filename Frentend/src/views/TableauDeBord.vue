<template>
  <div class="HomePage">
      <SideBar/>
      <div class="Content">
          this is Tableau de Bord
          
      </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar/Index.vue'
  import Vue from "vue";
  import JsonExcel from "vue-json-excel";
 
  Vue.component("downloadExcel", JsonExcel);

  export default {
    name: 'Home',

    components: {
      SideBar,
      
    },
  }
</script>
