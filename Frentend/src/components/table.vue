<template>
    <v-card>
        <v-card-title class="text-p blue lighten-4  black--text">
            <v-icon>
                mdi-clipboard-list-outline
            </v-icon>
            Liste des bons de livraison
        </v-card-title>
        <v-icon>
            mdi-sort
        </v-icon>
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
    data () {
      return {
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
          { text: 'Numéro', value: 'calories' , icon:'mdi-sort'},
          { text: 'Client', value: 'fat' , icon:'mdi-sort'},
          { text: 'Contité livrée', value: 'carbs', icon:'mdi-sort' },
          { text: 'Etat', value: 'protein' , icon:'mdi-sort'},
          { text: '#', value: 'iron' , icon:'mdi-sort'},
        ],
        desserts: [
          {
            date: '01/01/2021',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
             date: '01/01/2021',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            date: '10/01/2021',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            date: '07/01/2021',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            date: '03/01/2021',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
             date: '11/01/2021',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            date: '06/01/2021',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            date: '30/01/2021',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
             date: '09/01/2021',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            date: '06/01/2021',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
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