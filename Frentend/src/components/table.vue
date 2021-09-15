<template>

    <v-card class="tableDevis">
        <v-card-title class="table-title">
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Liste des bons de livraison / proforma
            
        </v-card-title>
        <div class="table-btn-group">
        <v-btn>
          <v-icon  class=" mdi-file-pdf-outline" color="white" >
               mdi-file-pdf-outline
          </v-icon>
             copier
        </v-btn>
        <export-excel :data="desserts" :fields="headers">
            <v-btn>
              exel
           </v-btn>
        </export-excel>
        
        <v-btn>
          Pdf
        <v-icon
        class="mdi-file-pdf-outline"
        color="black"
        >mdi-file-pdf-outline</v-icon>
        </v-btn>
        <v-btn>
        imprimer
        </v-btn>
        </div>
        <v-card-content>
                <v-data-table
                v-model="selected"
                :headers="headers"
                :items="desserts"
                :single-select="singleSelect"
                item-key="date"
                show-select
                class="elevation-1"
            >
             <template v-slot:[`item.iron`]="{ item }">
                <v-col cols="2" class="btnnnn">
               <v-btn class="action-btn">
                  <v-icon
                    color="black"
                    size="15"
                    class="action-icon"
                  >
                    mdi-cog
                  </v-icon>
              {{ item.iron }} 
              </v-btn>
              <v-btn 
                @click="toggleSelect = !toggleSelect"
                  
                >
                  <v-icon size="15">mdi-arrow-down-drop-circle</v-icon>
                </v-btn>
                <v-select
                  v-if="toggleSelect"
                  :menu-props="{value: toggleSelect}"
                  items="Duplique"
                >
                  Duplique
                </v-select>
            
              </v-col>
             </template>
             <template v-slot:[`item.protein`]="{ item }">
              <v-chip
                label
                class="ma-2"
                color="red"
                 text-color="white"
                 
              >
              {{ item.protein }} 
              </v-chip>
             
             </template>
             </v-data-table>
        </v-card-content>
        <v-row>
        <v-col cols="2">
              <v-select
               class="select"
                :items="items"
                label="Pour la séléction"
              ></v-select>
            </v-col>
        <v-col cols="2">
            <v-btn
            color="primary"
            class="btnn"
            >Envoyer</v-btn>
        </v-col> 
        </v-row>   
    </v-card>
</template>


<script>
  export default {
    data: () => ({
        toggleSelect: false,
        singleSelect: false,
        selected: [],
         items: [
           'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
      ],
           
        headers: [
          {
            text: 'Date de livraison',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Numéro', value: 'calories' , icon:'mdi-sort', btn:'up'},
          { text: 'Client', value: 'fat' , icon:'mdi-sort'},
          { text: 'Contité livrée', value: 'carbs', icon:'mdi-sort' },
          { text: 'Etat', value: 'protein' , icon:'mdi-sort'},
          { text: '#' , value:"iron", icon:'mdi-sort'},
        ],
        iron:{iron:"action"},
        desserts: [
          {
            date: '01/01/2021',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
             date: '01/01/2021',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
            date: '10/01/2021',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
            date: '07/01/2021',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
            date: '03/01/2021',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: "Clôturé(e)",
           iron:"action"
          },
          {
             date: '11/01/2021',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: "Clôturé(e)",
           iron:"action",
          },
          {
            date: '06/01/2021',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: "Clôturé(e)",
           iron:"action"
          },
          {
            date: '30/01/2021',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
             date: '09/01/2021',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: "Clôturé(e)",
            iron:"action"
          },
          {
            date: '06/01/2021',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: "Clôturé(e)",
           iron:"action"
          },
        ],
      
    }),
  }
</script>






<style >
.btnn{
    margin-top: 22px;
}

.select{
    margin-left: 10px;
}
</style>