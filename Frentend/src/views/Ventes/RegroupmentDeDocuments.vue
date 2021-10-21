<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Regroupement de documents de vente</h2>
                       <p>Cette page vous permet de saisir un regroupement de documents de vente</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Regroupement de documents de vente</span>
                        </div>
                        <div >
                        </div>
                    </div>
                </div>
                <div class="card3">
                    <v-card flat dense >
                  <v-content>
                    <v-form class="recherche_rapide_content" >
                        <v-col cols="2" >
                        <h5>Période :</h5>
                        <div class="SearchBydate">
                            <label for="">Date</label>
                            <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                        </div>

                        </v-col>
                        <v-col cols="3">
                        <h5>Document à générer :</h5>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="Client">Commande client</option>
                            <option value="Coommercial">Bon de livraison</option>
                            <option value="Projet">Facture de vente</option>
                        </select>
                        </v-col>
                        <v-col cols="3">
                        <h5>Générer à partir de :</h5>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="Client">Devis / performat </option>
                            <option value="Coommercial">Commande client</option>
                            <option value="Projet">Bon de livraison </option>
                        </select>
                        </v-col>                       
                        <v-col cols="2">
                        <h5>Client</h5>
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
                    <div >
                        <div class="Documents_à_inclure">
                            <i class="fas fa-cogs"></i>
                            <h5>Pour chaque document généré :</h5>
                        </div>
                        <hr>
                        <div class="boxs">
                        <input type="checkbox" >
                        <p>Regrouper les lignes d’article</p>
                        </div>
                        <div class="boxs">
                        <input type="checkbox" >
                        <p>Copier les lignes texte</p>
                        </div>
                        <div class="boxs">
                        <input type="checkbox" >
                        <p>Générer un sous total par document de base</p>
                        </div>
                    </div>
                   </v-content>
                </v-card>
                
                </div>
                <div class="nouveau-bon">
                 <router-link
                    to= ""
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <i class="fas fa-play-circle"></i>
                            Lancer la recherche
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



