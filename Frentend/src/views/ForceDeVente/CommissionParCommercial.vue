<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Commission par commercial</h2>
                    <span>Cette page vous permet de calculer la commission par commercial pour une période donnée</span>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Commission par commercial</span>
                        </div>
                        <div >
                        </div>
                    <div>
                    </div>
                    </div>
                </div>
                        <v-alert v-if="successAlert == true" :value="successAlert " type="success">
                            La Marque d'articles a bien été ajouté!
                            </v-alert>
                            <v-alert v-if="errorAlert == true" type="error">
                            We're so sorry , something went wrong , please check you informations and try again , thank you!
                            </v-alert>
                <div class="card_commition_par_commercial">
                    <v-card flat dense >
                        <v-content>
                             <v-col>
                                 <div class="commition_par_commercial_container">
                                    <div class="SearchBydate_com">
                                        <h5>De</h5><br>
                                        <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                                    </div>
                                    <div class="jusquau">
                                        <h5>Jusqu'Au</h5><br>
                                        <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
                                     </div>
                                     <div>
                                        <h5>Commercial *:</h5><br>
                                        <select name="" id="">
                                            <option>test</option>
                                        </select>
                                    </div>
                                    <div>
                                        <!-- <h5>hi</h5> -->
                                        <v-btn class="commition_calcul_btn">
                                            <i class="fas fa-play-circle"></i>
                                            Calculer la commition
                                        </v-btn>
                                    </div>
                                 </div>
                             </v-col>
           
                        </v-content>
                    </v-card>
                     
                </div>
                
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  export default {
      
      components: {
        SideBar,
        NaVBar,
        },
      
      data: () => ({
          PathPage:'',
          dialog: false,
          enregistrer:false,
          Libellé:'',
          DataNouvelleMarque:'',
          successAlert:false,
          errorAlert:false,

    }),
    methods: {
         GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
          console.log(this.PathPage )
        },
   
    },
     created(){
        this.PathPage = this.$router.currentRoute.path
        this.GethPagePath()
    }
    
  }
</script>