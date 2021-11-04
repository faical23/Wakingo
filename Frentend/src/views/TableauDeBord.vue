<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
      <Navbar />
     
      <div class="Content_tableau_de_bord">
         <div class="entete_tableau_de_bord">
            <h4>Tableau de bord</h4>
            <span>Tableau de bord</span>
         </div>
         <v-card class="card_tableau_de_bord" style="border-top: 3px solid #3c8dbc;" flat dense >
           <v-card-tittle class="card_tittle_tableau_de_bord">
             <h5>Rapport commercial 2021</h5>
             <div class="tableau_de_bord_btns">
             <v-btn flat>
               <v-icon >mdi-minus-thick</v-icon>
             </v-btn>
             <v-btn>
               <v-icon>mdi-format-superscript</v-icon>
               </v-btn>
             </div>
           </v-card-tittle>
           <hr>
           <div class="charts_div">
             <div>
               <p>C.A TTC</p>
                <div>
                  <apexchart width="900" style="height:400px" :fill="fill" type="area" :options="options" :yaxis="yaxis" :series="serie"></apexchart>
                </div>
             </div>
            <div id="chart">
              <p style="">Stats. Factures de vente (Nbre)</p>
              <apexchart type="donut" :fill="fill" :options="chartOptions" :label="label" :series="series"  style="height:229;" width="500"></apexchart>
            </div>
           </div>
           <hr>
           <div class="total_tableau_de_bord">
             <div v-for="total in totals" :key="total">
               <span style="font-size:20px">{{ total.number }}</span><br>
               <label for="">{{ total.label }}</label>
             </div>
           </div>
         </v-card>
          <div class="colored_cards" style="display:flex;flex-wrap: wrap;">
            <div class="cored_cards">
                <div class="colored_cards_div">
                  <div style="display:flex; justify-content:space-between;">
                    <div>
                  <h3>26</h3>
                  <p>Devis</p>
                  </div>
                  <v-icon class="document" color=#009752>
                    mdi-file-outline
                  </v-icon>
                  </div>
                </div>
                <div class="details">
                  <p>Plus de détails</p>
                  <i class="fa fa-arrow-circle-right"></i>
                </div>
            </div>
            <div class="cored_cards_devis">
                <div class="colored_cards_div_devis">
                  <div style="display:flex; justify-content:space-between;">
                    <div>
                  <h3>21</h3>
                  <p>Factures de vente</p>
                  </div>
                  <v-icon class="document_devis" color=#D81B60>
                    mdi-file-outline
                  </v-icon>
                  </div>
                </div>
                <div class="details_devis">
                  <p>Plus de détails</p>
                  <i class="fa fa-arrow-circle-right"></i>
                </div>
            </div>
            <div class="cored_cards_tre">
                <div class="colored_cards_div_tre">
                  <div style="display:flex; justify-content:space-between;">
                    <div>
                  <h3>830,00</h3>
                  <p>Trésorerie</p>
                  </div>
                  <i class="document_tre" color=#0daed6>
                    DHS
                  </i>
                  </div>
                </div>
                <div class="details_tre">
                  <p>Plus de détails</p>
                  <i class="fa fa-arrow-circle-right"></i>
                </div>
            </div>
            <div class="cored_cards">
                <div class="colored_cards_div">
                  <div style="display:flex; justify-content:space-between;">
                    <div>
                  <h3>65</h3>
                  <p>Clients</p>
                  </div>
                  <v-icon class="document" color=#009752>
                   mdi-account-multiple
                  </v-icon>
                  </div>
                </div>
                <div class="details">
                  <p>Plus de détails</p>
                  <i class="fa fa-arrow-circle-right"></i>
                </div>
            </div>
            <div class="cored_cards_fournisseur">
                <div class="colored_cards_div_fournisseur">
                  <div style="display:flex; justify-content:space-between;">
                    <div>
                  <h3>15</h3>
                  <p>Fournisseurs</p>
                  </div>
                  <v-icon class="document_fournisseur" color=#c0594c>
                    mdi-account-multiple
                  </v-icon>
                  </div>
                </div>
                <div class="details_fournisseur">
                  <p>Plus de détails</p>
                  <i class="fa fa-arrow-circle-right"></i>
                </div>
            </div>
          </div>
      </div>
       </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar/Index.vue'
  import Navbar from '../components/navbar/navbar.vue'
  import VueApexCharts from 'vue-apexcharts'
 
  

  export default {
    name: 'Home',

    components: {
      SideBar,
      Navbar,
      apexchart: VueApexCharts,
      
    },
     data: () => ({
        series: [90, 10],
          chartOptions: {
            labels: ['Impayées ', 'Payées', 'Partiellement', 'À encaisser'],
            chart: {
              type: 'donut',
            },
            position:'bottom',
            fill: {
              colors: ['#f56954', '#00a65a']
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          options: {
            chart: {
              id: 'vuechart-example',
               fill: {
          colors: ['#3c8dbc']
        },
        },
          xaxis: {
            categories: ['janv', 'fevr', 'mars', 'Avr','mai', 'juin', 'juill', 'aout', 'sept' , 'oct','nov' , 'déc']
          },
        
        yaxis: {
          categories: [19]
        },
      },
      serie: [{
        name: 'series-1',
        data: [0, 0,  0, 0, 0, 0, 0, 91 , 20 , 10, 0],
      }],
      totals:[
        {
          number:'21.366.944.89',
          label:'facturation',
          color:'blue'
        },
        {
          number:'21.365.864,89',
          label:'EN COURS',
        },
        {
          number:'21.366.944.89',
          label:'En retard'
        },
        {
          number:'1.080,00',
          label:'ENCAISSÉ'
        },
      ]
    
     })
  }
</script>
