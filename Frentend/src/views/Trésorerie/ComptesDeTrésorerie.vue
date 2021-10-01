<template>
  <div class="HomePage">
      <div   v-if='Alert || PopupAddNewClient || PopupNewArticle || PopupChoiserLesArticles || Remproser' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>
      <SideBar/>
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
            <div class="BtnsTésorerie">
                <button>
                    <i class="fas fa-university"></i>
                    Ajouter un nouveau compte
                </button>
                <button>
                    <i class="fas fa-sync-alt"></i>
                     Transferts compte à compte
                </button>
            </div>
            <div class="TableZone">
                <Table/>
            </div>
      </div>

  </div>
</template>

<script>
    import SideBar from '../../components/SideBar/Index.vue'
    import NaVBar from '../../components/navbar.vue'
    import Table from '../../components/Tésorerie/Table.vue'

  export default {
    name: 'Home',
    data(){
        return{
            PagePath:'',

        }
    },
    components: {
    SideBar,
    NaVBar,
    Table

    },
    methods:{
      
    },
    watch: {

    },
    created() {
    },
  }
</script>
