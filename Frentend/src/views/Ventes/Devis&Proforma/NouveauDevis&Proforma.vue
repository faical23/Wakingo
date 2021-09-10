<template>
  <div class="HomePage">
      <div   v-if='Alert || PopupAddNewClient' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()">fdsfs</div>
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                        <h2>Devis / Proforma : DEV-07092021-4 </h2>
                        <p>Cette page vous permet de créer et mettre à jour un devis / Proforma</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <router-link to="/" class="RoutlinkZone">Gestion des devis / Proforma</router-link>>
                            <span  class="RoutlinkZone">Devis / Proforma : DEV-07092021-4</span>
                        </div>
                        <div  class="NouvelleDevisProforma__Header__Right__Btns">
                            <button>
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
                            <button>
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
                <!-- <AlertErrorFailed/> -->
                <InformationsProduit @AlertSelectionerClient="ActiveAlertConfirmation"
                 :ConfirmationSelectionerClient="ConfirmationSelectionerClient" 
                 @ConfirmationSelectionerClientToFalse="ConfirmationSelectionerClientToFalse()"
                 @AddNewClient='OpenNewClientPopup'
                 :NameOfNewClientAdded='NameOfNewClientAdded'/>
                <AlertConfirmation
                         v-if="Alert" @AlertAnnuler="DisabledAlert()
                         " @ConfirmationAlert='ConfirmationAlertCSelectionerClient()'
                 />
                 <PopupNewClient v-if="PopupAddNewClient" @RemovePopupAddClient='PopupAddNewClient=false'  @SuccessNewClient='NewClientIsAdded' :LengthOfClientHave='LengthOfClientHave'   />
            </div>
            <div class="EspaceAddArticles">
                <AddArticles/>
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
    // import AlertErrorFailed from '../../../components/Vendes/AlertFailedEmty.vue'
    import NaVBar from '../../../components/navbar.vue'
  export default {
    name: 'Home',
    data(){
        return{
            Alert:false,
            ConfirmationSelectionerClient : false,
            PopupAddNewClient:false,
            LengthOfClientHave:'',
            NameOfNewClientAdded:'papapa'
        }
    },
    components: {
      SideBar,
      InformationsProduit,
      NaVBar,
      AlertConfirmation,
      PopupNewClient,
      AddArticles,
    //   AlertErrorFailed
    },
    methods:{
        DeleteAllPopup(){
            this.Alert=false
            this.ConfirmationSelectionerClient = false
            this.PopupAddNewClient=false
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
            console.log(this.NameOfNewClientAdded)
        }

    }
  }
</script>

