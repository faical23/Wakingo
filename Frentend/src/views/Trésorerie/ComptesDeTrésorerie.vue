<template>
  <div class="HomePage">
      <div  v-if='PopupNewCompteSHow' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>
      <SideBar />
      <PopupNewCompte v-if='PopupNewCompteSHow' @RemovePopupNewCompte='PopupNewCompteSHow = false' @NewCompteSaved='NewCompteSaved'/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                        <h2>Comptes de trésorerie</h2>
                    </div>

                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <router-link to="/" class="RoutlinkZone">Comptes de trésorerie</router-link>
                        </div>

                    </div>
                </div>
            </div>
            <v-alert v-if="SuccessNewCompte" type="success" class="Alert">
                Le compte a bien été ajouté!
            </v-alert>
            <div class="BtnsTésorerie">
                <button @click="PopupNewCompteSHow = true">
                    <i class="fas fa-university"></i>
                    Ajouter un nouveau compte
                </button>
                <button>
                    <i class="fas fa-sync-alt"></i>
                     Transferts compte à compte
                </button>
            </div>
            <div class="TableZone" style="margin:20px !important">
                <Table :PathPage='PathPage' :NewCompteAdded='NewCompteAdded' />
            </div>
      </div>

  </div>
</template>

<script>
    import SideBar from '../../components/SideBar/Index.vue'
    import NaVBar from '../../components/navbar/navbar.vue'
    import Table from '../../components/Tésorerie/Table.vue'
    import PopupNewCompte from '../../components/Tésorerie/PopupNewCompte.vue'
  export default {
    name: 'Home',
 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
      PathPage:'',
      PopupNewCompteSHow:false,
      NewCompteAdded:'',
      SuccessNewCompte:false,

    }),
    components: {
      SideBar,
      NaVBar,
      Table,
      PopupNewCompte
     
    },
    methods: {
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
        },
        NewCompteSaved(Data){
            this.NewCompteAdded = Data
            this.PopupNewCompteSHow = false
            this.SuccessNewCompte = true
        }

    },
    created(){
        this.PathPage = this.$router.currentRoute.path
        this.GethPagePath()
    }
  }
</script>

<style >
    div .btn{
        margin-left: 30% ;
    }
    .HomePage{
      font-size: 20px;
    }
</style>