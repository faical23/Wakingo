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
                    Ajouter un nouveau compte
                </button>
                <button>
                    Ajouter un nouveau compte
                </button>
            </div>
      </div>

  </div>
</template>

<script>
    import SideBar from '../../components/SideBar/Index.vue'
    import NaVBar from '../../components/navbar.vue'
  export default {
    name: 'Home',
    data(){
        return{
            PagePath:'',
            // Alert:false,
            // ConfirmationSelectionerClient : false,
            // PopupAddNewClient:false,
            // PopupNewArticle:false,
            // LengthOfClientHave:'',
            // NameOfNewClientAdded:'',
            // LengthOfArticleHave:'',
            // DataNewArticleAdded:'',
            // PopupChoiserLesArticles :false,
            // DataChoiserArticles:'',
            // DataRemisAndPort:"",
            // Numero:'',
            // AlertError:false,
            // AlertSuccess : false,
            // AlertAnnuler : false,
            // AlertValidé:false,
            // Articles:'AA',
            // InformtionArticle:'BB',
            // RemarqueArticle : 'CC',
            // DisplayBtnEnregistrer : true,
            // ValideInsert : false,
            // Update : false,
            // UpdateSuccess : false,
            // ConditonURL :'',
            // CodeURLIfUpdate : '',
            // DataIfPageIsUPdating:'Empty',
            // ArticlesDataIfPageIsUPdating : "Empty",
            // RemarqueDataIfPageIsUpdating : "Empty",
            // LinkToNewCommande:'',
            // LinkToNewFacture:'',
            // NewAddVende : false,
            // Remproser : false,
            // RemproserSuccess:false
        }
    },
    components: {
    SideBar,
    // InformationsProduit,
    NaVBar,
    // AlertConfirmation,
    // PopupNewClient,
    // AddArticles,
    // Remarque,
    // PopupNewArticle,
    // ChoiserArticles,
    // PopupRemproser
    //   AlertErrorFailed
    },
    methods:{
      
    },
    watch: {

    },
    created() {
    },
  }
</script>
