<template>
    <div class="AlertError">
        <v-alert type="error" class="AlertError" >
            Le formulaire contient des erreurs (Champs obligatoires non remplis ou incorrects)
        </v-alert>
    </div>
</template>



<script>
export default {
  name: "AlertError",
  emits:[],
  props:[],
  data: () => ({


  }),
  methods:{

  },
  mounted(){
  }
  
};
</script>
