<template>
  <div class="HomePage">
      <div   v-if='Alert || PopupAddNewClient || PopupNewArticle || PopupChoiserLesArticles  || PopupAcompte' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                        <h2>Devis / Proforma : {{Numero}} </h2>
                        <p>Cette page vous permet de créer et mettre à jour un devis / Proforma</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <router-link to="/" class="RoutlinkZone">Gestion des devis / Proforma</router-link>>
                            <span  class="RoutlinkZone">Devis / Proforma : {{Numero}} </span>
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
                <div class="ValideOrAnnulerBtnsOrlinks">
                    <v-btn
                    color="success"
                    dark
                     v-if="AlertSuccess "
                    @click="ValideInsertData()"
                    >
                    Valider
                    </v-btn>
                    <v-btn
                    color="warning"
                    dark
                     v-if="AlertSuccess"
                    @click="AnnulerInsertData()"
                    >
                    Annuler
                    </v-btn>
                    <v-btn
                    color="primary"
                    dark
                    v-if="ValideInsert"
                    @click="PopupAcompte = true"
                    >
                    <i class="far fa-credit-card"></i>
                    Acompte
                    </v-btn>
                    <router-link :to="`/Ventes/NouvelleCommande/NewCommande/${LinkToNewCommande}`" class="RoutlinkZone">
                        <v-btn
                        color="primary"
                        dark
                        v-if="ValideInsert"
                        >
                        <i class="fas fa-share"></i>
                        Commander
                        </v-btn>
                    </router-link>
                    <router-link :to="`/Ventes/NouvelleFacture/NouvelleFacture/${LinkToNewFacture}`" class="RoutlinkZone">
                        <v-btn
                        color="primary"
                        dark
                        v-if="ValideInsert"
                        >
                        <i class="fas fa-share"></i>
                        Facturer
                        </v-btn>
                    </router-link>
                        <router-link v-if="ValideInsert" :to="`/Ventes/NouveauDevis/Proforma/Update/${Numero}`" class="RoutlinkZone">
                             <v-btn
                                color="warning"
                                dark
                                v-if="ValideInsert"
                                @click="SwitchToUpdateMode()"
                                >
                            <i class="fas fa-unlock-alt"></i>
                            Forcer la mise à jour
                            </v-btn>

                            </router-link>

                    <v-btn
                        color="warning"
                        dark
                        v-if="ValideInsert"
                        @click="AnnulerInsertData()"
                        >
                        <i class="fas fa-ban"></i>
                        Annuler
                    </v-btn>
                    <v-btn
                        color="primary"
                        dark
                        v-if="ValideInsert"
                        @click="NewDevis()"
                        >
                        <i class="fas fa-plus"></i>
                        New Devis
                    </v-btn>
                    <v-btn
                        color="primary"
                        dark
                        v-if="Update"
                        @click="UpdateDataVende()"
                        >
                        <i class="fas fa-ban"></i>
                        Update
                    </v-btn>
                </div>
                <div class="IconsAfterValide" v-if="AlertSuccess || ValideInsert || UpdateSuccess">
                    <i class="fas fa-eye"></i>
                    <i class="fas fa-envelope"></i>
                    <i class="fas fa-file-pdf"></i>
                    <i class="fas fa-file-import"></i>
                </div>
                <v-alert  v-if="AlertError" type="error" class="AlertError" >
                    Le formulaire contient des erreurs (Champs obligatoires non remplis ou incorrects)
                </v-alert>
                <v-alert v-if="AlertSuccess" type="success" class="AlertError">
                    Le nouveau devis a bien été enregistré!
                </v-alert>
                <v-alert v-if="AlertAnnuler" type="success" class="AlertError">
                     Le devis a bien été annulé!
                </v-alert>
                <v-alert v-if="AlertValidé" type="success" class="AlertError">
                     Le devis a bien été Validé!
                </v-alert>
                
                <v-alert v-if="UpdateSuccess" type="success" class="AlertError">
                     Le devis a bien été modifié!
                </v-alert>
                <v-alert v-if="NewAcompteSuccess" type="success" class="AlertError">
                      L'acompte a bien été enregistré!
                </v-alert>
                <InformationsProduit
                :PagePath='PagePath'
                :DataIfPageIsUPdating='DataIfPageIsUPdating'
                :ConditonURL='ConditonURL'
                :CodeURLIfUpdate='CodeURLIfUpdate'
                :Numero='Numero'
                 @AlertSelectionerClient="ActiveAlertConfirmation"
                 :ConfirmationSelectionerClient="ConfirmationSelectionerClient" 
                 @ConfirmationSelectionerClientToFalse="ConfirmationSelectionerClientToFalse()"
                 @AddNewClient='OpenNewClientPopup'
                 :NameOfNewClientAdded='NameOfNewClientAdded'
                 @SendRemiseAndPortToArticleSpace='GetRemiseAndPortTFromArticleSpace'
                 />
                <AlertConfirmation
                         v-if="Alert" @AlertAnnuler="DisabledAlert()
                         " @ConfirmationAlert='ConfirmationAlertCSelectionerClient()'
                 />
                 <PopupNewClient v-if="PopupAddNewClient" @RemovePopupAddClient='PopupAddNewClient=false'  @SuccessNewClient='NewClientIsAdded' :LengthOfClientHave='LengthOfClientHave'   />
                <PopupNewArticle  v-if="PopupNewArticle" @RemovePopupAddClient='PopupNewArticle=false' :LengthOfArticleHave='LengthOfArticleHave' @SuccessNewClient='SuccessNewClient'/>
                 <ChoiserArticles v-if="PopupChoiserLesArticles" @RemovePopupChoiserArticle='PopupChoiserLesArticles = false'  @GetAllThisArticles='GetAllThisArticles'/>
                <PopupAcompte  v-if="PopupAcompte" @RemovePopupAcompte="PopupAcompte=false" @NewAcompteSubmited="PopupAcompte=false,NewAcompteSuccess=true"/>
            </div>
            <div class="EspaceAddArticles">
                <AddArticles
                :PagePath='PagePath'
                :ArticlesDataIfPageIsUPdating='ArticlesDataIfPageIsUPdating'
                 @NewArticlePopup='OpneNewArticlePopup'
                 :DataNewArticleAdded='DataNewArticleAdded' 
                 @ChoiserArticles='PopupChoiserLesArticles = true' 
                 :DataChoiserArticles='DataChoiserArticles' 
                 :DataRemisAndPort='DataRemisAndPort'/>                
            </div>
            <div class="EspaceRemarque">
                <Remarque  :RemarqueDataIfPageIsUpdating ="RemarqueDataIfPageIsUpdating"/>
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
    import PopupAcompte from '../../../components/Vendes/AcomptePopup.vue'


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
            DisplayBtnEnregistrer : true,
            ValideInsert : false,
            Update : false,
            UpdateSuccess : false,
            ConditonURL :'',
            CodeURLIfUpdate : '',
            DataIfPageIsUPdating:'Empty',
            ArticlesDataIfPageIsUPdating : "Empty",
            RemarqueDataIfPageIsUpdating : "Empty",
            LinkToNewCommande:'',
            LinkToNewFacture:'',
            NewAddVende : false,
            PopupAcompte:false,
            NewAcompteSuccess : false
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
    PopupAcompte
    
    //   AlertErrorFailed
    },
    methods:{
        GetNuméro(){
                let URl = this.$router.currentRoute.path
                var today = new Date();
                var date = `${today.getDate()}0${(today.getMonth()+1)}${today.getFullYear()}`
                if(URl.includes('Create')){
                        this.Numero= `DEV-${date}-5`
                        this.LinkToNewCommande = `CDV-${date}-5`
                        this.LinkToNewFacture = `FAC-${date}-5`
                }
                 else if(URl.includes('Update') || URl.includes('update')){
                        let CodeIfUpdate  = URl.substring(URl.lastIndexOf('/') + 1)
                        this.Numero=  CodeIfUpdate
                        this.LinkToNewCommande = `CDV-${date}-5`
                        this.LinkToNewFacture = `FAC-${date}-5`

                 }
        },
        DeleteAllPopup(){
            this.Alert=false
            this.ConfirmationSelectionerClient = false
            this.PopupAddNewClient=false
            this.PopupNewArticle = false
            this.PopupChoiserLesArticles  = false
            this.PopupAcompte=false
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
            this.AlertAnnuler = false
            this.$store.commit('ActiveToInsert')
            console.log("get data child component")
        },
        ValideInsertData(){
            this.AlertAnnuler = false
            this.AlertAnnuler = false,
            this.AlertSuccess = false
            this.AlertValidé = true
            this.ValideInsert = true
            this.RemarqueArticle = this.$store.state.RemarqueArticle
            console.log(this.Articles,this.InformtionArticle,this.RemarqueArticle)
            ///// AXIOS REQUEST HER
        },
        AnnulerInsertData(){
            this.AlertAnnuler = true
            this.AlertSuccess = false
            this.ValideInsert = false
            this.AlertValidé = false
            this.DisplayBtnEnregistrer = true
            this.UpdateSuccess = false
            this.NewAddVende = true
            history.pushState(null, '', '/Ventes/NouveauDevis/Proforma/Create');  
            
            //// AXIOS TO ANNULER WHERE 

        },
        Réinitialiser(){
            this.$store.commit('RéinitialiserCompenent')
            ///rEALISATION HER
        },
        SwitchToUpdateMode(){
            this.Update = true
            this.AlertValidé = false
            this.ValideInsert = false;
            this.UpdateSuccess = false
        },
        UpdateDataVende(){
                        this.$store.commit('ActiveToInsert')
                        this.ValideInsert = true
                        this.Update = false
                        let InformationsArticles = this.$store.state.InformationVentes
                        if(InformationsArticles?.Informations_Piéce?.Client_Name !== ''
                            && InformationsArticles?.Informations_Piéce?.Numéro !== ''
                            && InformationsArticles?.Logistique?.AdresseFacturation !== ''
                            ){
                            this.AlertError = false
                            let InformationsArticles = this.$store.state.InformationsArticles
                            if(InformationsArticles  != 'Empty' ){
                                    this.AlertError = false
                                    InformationsArticles.Articles.forEach(element =>{
                                    if(element.nameArticle != 'Sélectioner un client' && (element.Qté != '0' && element.Qté != '' && !isNaN(element.Qté) ) &&( element.Price != '0' && element.Price != '' && !isNaN(element.Price) && this.AlertError != true)){
                                        this.UpdateSuccess = true
                                        this.AlertError = false
                                        console.log('aright')
                                        // AXIOS TO UPDATE her
                                    }
                                    else{
                                        this.UpdateSuccess = false
                                        this.AlertError = true
                                        console.log('vide')
                                    }
                                })
                            }
                            console.log(InformationsArticles)
                        }
                        else{
                            this.UpdateSuccess = false
                            this.AlertError = true
                            console.log('vide')
                        }
                        console.log(InformationsArticles)
        },
        NewDevis(){
            this.Update = false
            this.AlertValidé = false
            this.ValideInsert = false;
            this.UpdateSuccess = false;
            this.DisplayBtnEnregistrer = true
            this.UpdateSuccess = false
            this.AlertAnnuler = false
            this.AlertValidé = false
            this.ValideInsert = false
            this.NewAddVende = true
            this.NewAcompteSuccess =false
            this.$store.commit('RéinitialiserCompenent')
            history.pushState(null, '', '/Ventes/NouveauDevis/Proforma/Create');  

            //// reanlisation her
        },
        GetPathURL(){
            let URl = this.$router.currentRoute.path
            let Condition= ''
            let CodeIfUpdate = ''
            if(URl.includes('Create')){
                Condition = 'Create'
            }
            else if(URl.includes('Update') || URl.includes('update')){
                Condition = 'Update'
                CodeIfUpdate  = URl.substring(URl.lastIndexOf('/') + 1)
                this.Update = true
                this.DisplayBtnEnregistrer = false
                //// get data from axios where element = code 
                /// and send data from props to the child components
                //  and sedn data to the vuex store 
                this.DataIfPageIsUPdating = {
                                    "Informations_Piéce":{
                                        "Client_Name" :  "CLT8 - ESSAID CHASSE SA",
                                        "Numéro" :    CodeIfUpdate,
                                        "Date_Devis" :   "09-08-2019",
                                        "N_De_référence" :   this.InformationsPiéceNDeRéférence,
                                        "Vendeur" :   this.InformationsPiéceVendeur,
                                    },
                                    "Informations_Financiéres":{
                                        "Remise_global" :   10,
                                        "Type_remise global" :   "%",
                                        "Port" :   9,
                                        "TVA/Port" :   "20,00%",
                                        "Devise_utilisée" :   'MAD-Drham Marocain',
                                        "TauxChange_If_DeviseUtilisée_Not_MAD":9.60
                                    },
                                    "écheancier":[
                                                { 
                                                TypeEchéancier : 'Sélectionner un type',
                                                LibilléEchéance : '100,00% comptant',
                                                ModePaimentEchéance:'Au choix du client',
                                                DélaiEchéance:'',
                                                FDEEcheance : false,
                                                LeEchéance:'',
                                                MontantEchéance:'',
                                                QuotitéEchéance:'',
                                                }
                                            ],
                                    "Logistique":{
                                        "Mode_Livraison":'Sélectionner un type',
                                        "Adresse_Livraison":"ABCDEF",
                                        "AdresseFacturation":"ABCDEF"
                                    },
                                    "Options":{
                                        "Modèle_PDF":"Devis de vente-modéle corporate",
                                        "AfficherPhotoArticle " : true,
                                        "AfficherPrixArticle" : true
                                    },
                                    'PiéceAttachée':"File"
                                    }
                this.ArticlesDataIfPageIsUPdating={
                    "Articles" : '',
                    "Total_Global":{
                            "Total_Brut":150,
                            "Remise":10,
                            "Total_HT":122,
                            "TVAt":42,
                            "Transport_HT":12,
                            "TVA_Port":8,
                            "Total_TTC":122,
                    },
                    "Table_TVA" :''

                }
                this.RemarqueDataIfPageIsUpdating = 'Remarque from Updating page or url code'
                

            }
            
            // this.Numero= "dsdsdq"
            this.ConditonURL = Condition
            this.CodeURLIfUpdate = CodeIfUpdate
        },

    },
    watch: {
            '$store.state.InformationVentes': function() {
                let InformationsArticles = this.$store.state.InformationVentes
                    if((this.ConditonURL == 'Create' || this.NewAddVende ) && this.ValideInsert != true){
                        this.AlertError = false
                        if(InformationsArticles?.Informations_Piéce?.Client_Name !== ''
                        && InformationsArticles?.Informations_Piéce?.Numéro !== ''
                        && InformationsArticles?.Logistique?.AdresseFacturation !== ''
                        && this.AlertError != true
                    ){
                        this.AlertError = false  
                        this.DisplayBtnEnregistrer = false
                        this.InformtionArticle = InformationsArticles
                    }
                    else{
                        this.AlertError = true
                        this.AlertSuccess = false
                        this.DisplayBtnEnregistrer = true

                    }
                }

            },
            '$store.state.InformationsArticles': function() {
                let InformationsArticles = this.$store.state.InformationsArticles
                if((this.ConditonURL == 'Create' || this.NewAddVende ) && this.ValideInsert != true){
                    InformationsArticles.Articles.forEach(element =>{
                        if(element.nameArticle != 'Sélectioner un client' && (element.Qté != '0' && element.Qté != '' && !isNaN(element.Qté) ) &&( element.Price != '0' && element.Price != '' && !isNaN(element.Price))&& this.AlertError != true){
                            if( this.ValideInsert == false){
                                this.AlertSuccess = true
                            }
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
            }
    },
    created() {
        this.PagePath = this.$router.currentRoute.path
        this.GetPathURL()
        this.GetNuméro()

    },
  }
</script>
