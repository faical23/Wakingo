<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Rapport commercial</h2>
                       <p>Cette page vous permet de générer un rapport commercial pour une période</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Rapport commercial</span>
                        </div>
                        <div >
                        </div>
                        
                    <div>
                         <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <i class="fas fa-play-circle"></i>
                            Générer le rapport
                        </v-btn>
                    </router-link>
                    </div>
                    </div>
                </div>
                <div class="card2">
                    <v-card flat dense >
                  <v-content>
                    <v-form class="recherche_rapide_content" >
                        <v-col cols="4" >
                        <h5>Période :</h5>
                        <div class="SearchBydate">
                            <label for="">De</label>
                            <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                            <label for="">Au</label>
                            <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
                        </div>

                        </v-col>
                        <v-col cols="2">
                        <h5>Grouper par :</h5>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="Client">Client</option>
                            <option value="Coommercial">Coommercial</option>
                            <option value="Projet">Projet</option>
                        </select>
                        </v-col>                       
                        <v-col cols="2">
                        <h5>Devis:</h5>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="Eur">Eur-Euro</option>
                            <option value="MAD">MAD(Dirham Marocain)</option>
                            <option value="USD">(Dollar Américain)</option>
                        </select>
                        </v-col>  
                        <div>
                        </div>                     
                    </v-form>
                    <div class="Documents_à_inclure">
                    <h5>Documents à inclure :</h5>
                    <div class="boxs">
                    <input type="checkbox" >
                    <p>Devis</p>
                    </div>
                    <div class="boxs">
                    <input type="checkbox" >
                    <p>Bons de commande</p>
                    </div>
                    <div class="boxs">
                    <input type="checkbox" >
                    <p>Bons de livraion </p>
                    </div>
                    <div class="boxs">
                    <input type="checkbox" >
                    <p>Factures</p>
                    </div>
                    </div>
                    <div class="boxs">
                    <input type="checkbox" >
                    <p>Inclure uniquement les documents en cours.</p>
                    </div>
                    
                  </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon">
                 <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <i class="fas fa-play-circle"></i>
                            Générer le rapport
                        </v-btn>
                    </router-link>
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
      }

  }
</script>
