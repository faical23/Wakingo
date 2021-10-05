<template>
  <v-app>
    <v-content>
        <v-form class="recherche_rapide_content" >
          <v-row>
             <!-- <v-spacer></v-spacer> -->
             <v-icon>
                mdi-calendar-month
              </v-icon>
              
            <v-col cols="2" >
              <h5>Date de livraison:</h5>
              <DatePicker label="Start Date" @change="date=>(startDate=date)">from</DatePicker>
            </v-col>
              <v-icon>
                mdi-calendar-month
              </v-icon>
            <v-col cols="2" >
             <v-spacer>></v-spacer>
              <DatePicker label="End Date" @change="date=>(endDate=date)"></DatePicker>
            </v-col>
            <v-col cols="2">
            <h5>Etat:</h5>
              <v-select
                :items="items"
                label="Tous"
              ></v-select>
            </v-col>
            <v-col cols="2">
            <h5>Client:</h5>
              <v-select
                :items="items"
                label="Tous"
              ></v-select>
            </v-col>
            <v-col cols="3">
            <h5>Numéro:</h5>
             <v-text-field ></v-text-field>
            </v-col>
          </v-row>
          
        </v-form>
    </v-content>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";


export default {
  name: "App",
  data() {
    

    return {
      endDate: "",
      startDate: "",
     
              
    };


  
  },
  components: {
    DatePicker,
    
  }
};
</script>