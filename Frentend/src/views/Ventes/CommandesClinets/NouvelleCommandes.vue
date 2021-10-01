<template>
  <div class="HomePage">
      <div   v-if='Alert || PopupAddNewClient || PopupNewArticle || PopupChoiserLesArticles ' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                        <h2>Commande client  : {{GetNuméro()}} </h2>
                        <p>Cette page vous permet de créer et mettre à jour une commande client</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <router-link to="/" class="RoutlinkZone">Gestion des commandes clients</router-link>>
                            <span  class="RoutlinkZone">Commande client : {{GetNuméro()}}</span>
                        </div>
                        <div v-if="DisplayBtnEnregistrer" class="NouvelleDevisProforma__Header__Right__Btns">
                            <button @click="GetAllDataFromChildComponent()">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="15px" height="15px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                                <g>
                                    <g id="save">
                                        <path d="M357,0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V102L357,0z M229.5,408
                                            c-43.35,0-76.5-33.15-76.5-76.5s33.15-76.5,76.5-76.5c43.35,0,76.5,33.15,76.5,76.5S272.85,408,229.5,408z M306,153H51V51h255V153
                                            z"/>
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                </svg>
                                Enregistrer
                            </button>
                            <button @click="Réinitialiser()">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="15px" height="15px" viewBox="0 0 92.33 92.33" style="enable-background:new 0 0 92.33 92.33;" xml:space="preserve"
                                        >
                                    <g>
                                        <path d="M70.598,16.753c-1.722-1.24-4.113-0.852-5.349,0.866c-1.242,1.716-0.853,4.113,0.865,5.35
                                            c13.613,9.818,18.021,27.857,10.482,42.89c-4.082,8.138-11.088,14.202-19.726,17.066c-8.636,2.871-17.877,2.2-26.013-1.879
                                            c-8.134-4.083-14.197-11.088-17.066-19.722c-2.866-8.642-2.197-17.877,1.886-26.014c4.958-9.89,14.458-16.779,25.413-18.429
                                            c0.074-0.008,0.137-0.036,0.211-0.053l0.157,7.571c0.021,0.839,0.542,1.585,1.321,1.889c0.782,0.305,1.672,0.11,2.25-0.496
                                            l10.904-11.379c0.794-0.828,0.764-2.142-0.062-2.933L44.492,0.577c-0.606-0.582-1.499-0.739-2.267-0.399
                                            c-0.251,0.108-0.476,0.269-0.662,0.462c-0.372,0.389-0.585,0.919-0.579,1.479l0.151,7.212c-0.385-0.063-0.78-0.087-1.188-0.027
                                            c-13.418,2.021-25.052,10.46-31.125,22.571C-1.499,52.451,6.85,77.584,27.424,87.901c5.989,3.005,12.362,4.429,18.646,4.429
                                            c15.306,0,30.065-8.439,37.382-23.028C92.688,50.884,87.284,28.782,70.598,16.753z"/>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                                Réinitialiser
                            </button>
                        </div>
                    </div>
                </div>
                <div class="ValideOrAnnulerBtnsOrlinks" v-if="AlertSuccess">
                    <v-btn
                    color="success"
                    dark
                    @click="ValideInsertData()"
                    >
                    Valider
                    </v-btn>
                    <v-btn
                    color="warning"
                    dark
                    @click="AnnulerInsertData()"
                    >
                    Anunuler
                    </v-btn>
                </div>
                <v-alert  v-if="AlertError" type="error" class="AlertError" >
                    Le formulaire contient des erreurs (Champs obligatoires non remplis ou incorrects)
                </v-alert>
                <v-alert v-if="AlertSuccess" type="success" class="AlertError">
                     La nouvelle commande a bien été enregistré!
                </v-alert>
                <v-alert v-if="AlertAnnuler" type="success" class="AlertError">
                     La commande bien été annulé!
                </v-alert>
                <v-alert v-if="AlertValidé" type="success" class="AlertError">
                     Le bon de  commande a bien été Validé!
                </v-alert>
                <InformationsProduit
                :PagePath='PagePath'
                :Numero='Numero'
                 @AlertSelectionerClient="ActiveAlertConfirmation"
                 :ConfirmationSelectionerClient="ConfirmationSelectionerClient" 
                 @ConfirmationSelectionerClientToFalse="ConfirmationSelectionerClientToFalse()"
                 @AddNewClient='OpenNewClientPopup'
                 :NameOfNewClientAdded='NameOfNewClientAdded'
                 @SendRemiseAndPortToArticleSpace='GetRemiseAndPortTFromArticleSpace'
                 />
                <AlertConfirmation
                    v-if="Alert" @AlertAnnuler="DisabledAlert()"
                    @ConfirmationAlert='ConfirmationAlertCSelectionerClient()'
                 />
                 <PopupNewClient v-if="PopupAddNewClient" @RemovePopupAddClient='PopupAddNewClient=false'  @SuccessNewClient='NewClientIsAdded' :LengthOfClientHave='LengthOfClientHave'   />
                <PopupNewArticle  v-if="PopupNewArticle" @RemovePopupAddClient='PopupNewArticle=false' :LengthOfArticleHave='LengthOfArticleHave' @SuccessNewClient='SuccessNewClient'/>
                <ChoiserArticles v-if="PopupChoiserLesArticles" @RemovePopupChoiserArticle='PopupChoiserLesArticles = false'  @GetAllThisArticles='GetAllThisArticles'/>
            </div>
            <div class="EspaceAddArticles">
                <AddArticles
                :PagePath='PagePath'
                @NewArticlePopup='OpneNewArticlePopup'
                :DataNewArticleAdded='DataNewArticleAdded' 
                @ChoiserArticles='PopupChoiserLesArticles = true' 
                :DataChoiserArticles='DataChoiserArticles' 
                :DataRemisAndPort='DataRemisAndPort'
                />                
            </div>
            <div class="EspaceRemarque">
                <Remarque/>
            </div>
            <div class="LastBtnEnregistrer">
                            <button @click="GetAllDataFromChildComponent()">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="15px" height="15px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                                <g>
                                    <g id="save">
                                        <path d="M357,0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V102L357,0z M229.5,408
                                            c-43.35,0-76.5-33.15-76.5-76.5s33.15-76.5,76.5-76.5c43.35,0,76.5,33.15,76.5,76.5S272.85,408,229.5,408z M306,153H51V51h255V153
                                            z"/>
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                </svg>
                                Enregistrer
                            </button>
            </div>
      </div>

  </div>
</template>

<script>
    import SideBar from '../../../components/SideBar/Index.vue'
    import InformationsProduit from '../../../components/Vendes/InformationsProduits.vue'
    import AlertConfirmation from '../../../components/Vendes/AlertConfirmation.vue'
    import PopupNewClient from '../../../components/Vendes/NewClient.vue'
    import AddArticles from '../../../components/Vendes/EspaceArticle.vue'
    import Remarque from '../../../components/Vendes/Remarque.vue'
    import PopupNewArticle from '../../../components/Vendes/NewArticle.vue'
    import ChoiserArticles from '../../../components/Vendes/ChoiserArticles.vue'


    // import AlertErrorFailed from '../../../components/Vendes/AlertFailedEmty.vue'
    import NaVBar from '../../../components/navbar.vue'
  export default {
    name: 'Home',
    data(){
        return{
            PagePath:'',
            Alert:false,
            ConfirmationSelectionerClient : false,
            PopupAddNewClient:false,
            PopupNewArticle:false,
            LengthOfClientHave:'',
            NameOfNewClientAdded:'',
            LengthOfArticleHave:'',
            DataNewArticleAdded:'',
            PopupChoiserLesArticles :false,
            DataChoiserArticles:'',
            DataRemisAndPort:"",
            Numero:'',
            AlertError:false,
            AlertSuccess : false,
            AlertAnnuler : false,
            AlertValidé:false,
            Articles:'AA',
            InformtionArticle:'BB',
            RemarqueArticle : 'CC',
            DisplayBtnEnregistrer : true
        }
    },
    components: {
    SideBar,
    InformationsProduit,
    NaVBar,
    AlertConfirmation,
    PopupNewClient,
    AddArticles,
    Remarque,
    PopupNewArticle,
    ChoiserArticles,
    
    //   AlertErrorFailed
    },
    methods:{
        GetNuméro(){
            var today = new Date();
            var date = `${today.getDate()}0${(today.getMonth()+1)}${today.getFullYear()}`
            this.Numero= ` CDV-${date}-5`
            return this.Numero
        },
        DeleteAllPopup(){
            this.Alert=false
            this.ConfirmationSelectionerClient = false
            this.PopupAddNewClient=false
            this.PopupNewArticle = false
            this.PopupChoiserLesArticles  = false
        },
        ActiveAlertConfirmation(){
            this.Alert = true;
        },
        DisabledAlert(){
            this.Alert = false;
        },
        ConfirmationAlertCSelectionerClient(){
            this.ConfirmationSelectionerClient  = true
            this.Alert = false;
        },
        ConfirmationSelectionerClientToFalse(){
             this.ConfirmationSelectionerClient  = false
        },
        OpenNewClientPopup(client){
            this.PopupAddNewClient=true
            this.LengthOfClientHave =client.length
        },
        NewClientIsAdded(client){
            this.PopupAddNewClient=false
            this.NameOfNewClientAdded = client
        },
        OpneNewArticlePopup(articleLength){
            this.PopupNewArticle=true
            this.LengthOfArticleHave = articleLength
            console.log(this.LengthOfArticleHave )
        },
        SuccessNewClient(article){
            this.PopupNewArticle=false
            this.DataNewArticleAdded = article
        },
        GetAllThisArticles(ArticlesGetted){
            this.PopupChoiserLesArticles = false
            this.DataChoiserArticles = ArticlesGetted
        },
        GetRemiseAndPortTFromArticleSpace(RemisAndPort){
            this.DataRemisAndPort = RemisAndPort
            console.log(RemisAndPort)
        },
        GetAllDataFromChildComponent(){
            this.$store.commit('ActiveToInsert')
        },
        ValideInsertData(){
            this.AlertAnnuler = false,
            this.AlertSuccess = false
            this.AlertValidé = true
            this.RemarqueArticle = this.$store.state.RemarqueArticle
            console.log(this.Articles,this.InformtionArticle,this.RemarqueArticle)
            ///// AXIOS REQUEST HER
        },
        AnnulerInsertData(){
            this.AlertAnnuler = true
            this.AlertSuccess = false

        },
        Réinitialiser(){
            // this.$forceUpdate();
            // this.$router.go()	// Refreshes pag
            console.log("reanlisation")
            this.$store.commit('RéinitialiserCompenent')
        }
    },
    watch: {
            '$store.state.InformationVentes': function() {
                 this.AlertError = false
                let InformationsArticles = this.$store.state.InformationVentes
                if(InformationsArticles?.Informations_Piéce?.Client_Name !== ''
                    && InformationsArticles?.Informations_Piéce?.Numéro !== ''
                    && InformationsArticles?.Logistique?.AdresseFacturation !== ''
                    && this.AlertError != true
                ){
                    this.AlertSuccess = true
                    this.AlertError = false  
                    this.DisplayBtnEnregistrer = false
                    this.InformtionArticle = InformationsArticles
                }
                else{
                    this.AlertError = true
                    this.AlertSuccess = false
                    this.DisplayBtnEnregistrer = true
                }
            },
            '$store.state.InformationsArticles': function() {
                let InformationsArticles = this.$store.state.InformationsArticles
                InformationsArticles.Articles.forEach(element =>{
                    if(element.nameArticle != 'Sélectioner un client' && (element.Qté != '0' && element.Qté != '' && !isNaN(element.Qté) ) &&( element.Price != '0' && element.Price != '' && !isNaN(element.Price))&& this.AlertError != true){
                        this.AlertSuccess = true
                        this.AlertError = false
                        this.Articles = InformationsArticles
                        this.DisplayBtnEnregistrer = false
                    }
                    else{
                        this.AlertError = true
                        this.AlertSuccess = false
                        this.DisplayBtnEnregistrer = true
                    }
                })
            }
    },
    created() {
        this.PagePath = this.$router.currentRoute.path
      console.log(this.PagePath);
    },
  }
</script>
