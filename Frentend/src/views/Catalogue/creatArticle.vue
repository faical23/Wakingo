<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Nouvel article </h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Nouvel article</span>
                        </div>
                        </div>
                </div>
                <div class="card">
                    <!-- <v-card flat dense > -->
                         <!-- <div class="InformationsProduit"> -->
        <v-card class="SwitchOptions">
                <v-toolbar
                >
                <template v-slot:extension>
                    <v-tabs
                    v-model="tab"
                    align-with-title
                    >
                    <v-tabs-slider ></v-tabs-slider>

                    <v-tab
                        v-for="(item,n) in items"
                        :key="n"
                        @click='SwitchOptionsToAnother(item.Option)'

                    > 
                        <i :class="item.Icon"></i>
                        {{ item.Option }}
                    </v-tab >
                    </v-tabs>
                </template>
                </v-toolbar>
                <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="(item,i) in items"
                    :key="i"
                >
                    <v-card flat>

                    <v-card-text>
                        <!-- InformationGeneral -->
                        <div class="infoGeneral" v-if="SelectOptions == 'Informations Général'">
                        <div  class="InformationGeneral">
                           <div class="firstPart">
                               <div class="CodeArticle">
                                   <label for="CodeArticle">Code d'article *:</label><br>
                                   <input type="text"  v-model="CodeArticle"  placeholder="ART158">
                               </div>  
                               <div class="libeleArticle">
                                   <label for="CodeArticle">Libellé de l'article * :</label><br>
                                   <input type="text" v-model="libelleArticle">
                               </div>
                                <label class="TypeARTICLE" for="">Type d'article :</label>
                                <div class="radioPart">
                                    <input v-model="serviceSimple" type="radio">
                                    <label for="">Service simple</label><br>
                                    <input v-model="produitSimple"  type="radio">
                                    <label for="">Produit simple</label><br>
                                    <input v-model="articleAgamme"  type="radio">
                                    <label for="">Article à gamme</label>
                                </div>
                                <div class="activation_gestion_stock">
                                    <input type="checkbox" name="" id="">
                                    <label for="">Activer la gestion des stocks</label><br>
                                    <input type="checkbox" name="" id="">
                                    <label class="nePas" for="">Ne plus utiliser cet article</label>
                                </div>
                                <div class="tracabilite">
                                    <label for="">Type de traçabilité :</label><br>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                               
                           </div>
                           <div class="SecondPart">
                               <div class="Gamme1">
                                   <label for="Gamme1">Gamme 1 :</label><br>
                                   <select name="" id="">
                                       <option value=""></option>
                                   </select>
                               </div>
                               <div class="Gamme2">
                                   <label for="Gamme2">Gamme 2 :</label><br>
                                   <select name="" id="">
                                       <option value=""></option>
                                   </select>
                               </div>
                               <div class="FCM">
                                  <label for="Famille">Famille :</label><br>
                                   <select name="" id="">
                                       <option value=""></option>
                                   </select><br>
                                  <label for="Catégorie">Catégorie :</label><br>
                                   <select name="" id="">
                                       <option value=""></option>
                                   </select><br>
                                  <label for="Marque">Marque :</label><br>
                                   <select name="" id="">
                                       <option value=""></option>
                                   </select>
                                </div>
                           </div>
                           </div>
                           <div class="flex" >
                           <div class="priceDiv">
                               <div class="prix">
                                    <i class="fas fa-credit-card"></i>
                                    <h5>Prix :</h5>
                               </div> 
                               <hr> 
                               <div class="price_classe">
                                   <div>
                                       <label for="">Prix d’achat :</label><br>
                                   <div class="first_price_part">
                                       <select class="price" name="" id="">
                                           <option value=""></option>
                                       </select>
                                       <input type="text" placeholder="MAD" >
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                       </div>
                                   </div>
                                   <div class="PDV">
                                       <label class="prix_ventee" for="">Prix de vente public :</label><br>
                                   <div class="second_price_part">
                                       <select class="price_second_select" name="" id="">
                                           <option value=""></option>
                                       </select>
                                       <input type="text" placeholder="MAD" >
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                    </div>
                                   </div>
                                    <div>
                                        <div class="third_price_part">
                                            <label for="">TVA :</label><br>
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                        </div>
                               </div> 
                        </div>
                            <div class="logistique">
                               <div class="Logistique_Class">
                                    <i class="fas fa-truck"></i>
                                       <h5>Logistique:</h5>
                                </div>
                                <hr> 
                                <div class="select_section_logistique">
                                   <div class="log">
                                       <label for="">Unité de valorisation :</label>
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                   </div>
                                   <div class="log">
                                       <label for="">Conditionnement à l’achat :</label>
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                   </div>
                                   <div class="log">
                                       <label for="">Conditionnement à la vente :</label>
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                   </div>
                                   <div class="log">
                                       <label for="">Poids net :</label>
                                       <div class="KG">
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                       <input type="text" placeholder="KG">
                                       </div>
                                   </div>
                                   <div class="log">
                                       <label for="">Poids brut :</label>
                                       <div class="KG">
                                       <select name="" id="">
                                           <option value=""></option>
                                       </select>
                                       <input type="text" placeholder="KG">
                                       </div>
                                   </div>
                                   </div>
                               </div>
                               <div>
                               </div>
                               </div>
                               </div>
                        <div v-if="SelectOptions == 'Tarifs fournisseurs'" class="InformationFinanciéres">
                            <div class="InformationPiéce__Field"  v-if="PagePath !== '/Ventes/NouvelleCommande/Create'" >
                                    <h5>Date d'échéance :</h5>
                                    <input type="date" v-model="InformationsfinanciéresDateDécheance" />
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Remise globale :</h5>
                                    <div class="RemiseGlobal">
                                        <input type="number" placeholder="0,00" v-model="InformationsfinanciéresRemiseGlobal" @keyup="SendRemiseAndPortToArticleSpace" />
                                        <select name="pets" id="pet-select" v-model="InformationsfinanciéresRemiseGlobalType" @change="SendRemiseAndPortToArticleSpace">
                                            <option value="%">%</option>
                                            <option value="Montant">Montant</option>
                                        </select>
                                    </div>
                            </div>
                             <div class="InformationPiéce__Field">
                                    <h5>Port:</h5>
                                    <input class="Port" type="text" placeholder="0,00" v-model="InformationsfinanciéresPort"  @keyup="SendRemiseAndPortToArticleSpace"  />
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Tva/port:</h5>
                                    <select class="TVA" name="pets" id="pet-select" v-model="InformationsfinanciéresTVAPort"  @change="SendRemiseAndPortToArticleSpace">>
                                        <option value="20,00%">20,00%</option>
                                        <option value="14,00%">14,00%</option>
                                        <option value="10,00%">10,00%</option>
                                        <option value="7,00%">7,00%</option>
                                        <option value="0,00%">0,00%</option>
                                    </select>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Devise utilisée* :</h5>
                                    <select name="pets" id="pet-select"  v-model="InformationsfinanciéresDeviseUtilisée" @change="CheckDevisUtilisé()">
                                        <option value="MAD-Drham Marocain">MAD-Drham Marocain</option>
                                        <option value="EUR-Euro">EUR-Euro</option>
                                        <option value="USD-Dollar américan">USD-Dollar américan</option>
                                    </select>
                            </div>
                            <div v-if="DeviseNotMad"  class="InformationPiéce__Field">
                                    <h5>Taux de change :</h5>
                                    <div  class="TauxChange" >
                                        <input type="text" v-model="InformationsfinanciéresTauxChange" />
                                        <input type="text" value="MAD" disabled>
                                    </div>
                            </div>
                        </div>
                        <div v-if="SelectOptions == 'Échéancier'" class="Échéancier" >
                            <table >
                                <tr>
                                    <th>Type d'échéance</th>
                                    <th>Libellé</th>
                                    <th>Mode de paiment</th>
                                    <th>Délai</th>
                                    <th class="FDM">FDM</th>
                                    <th  class="LE">Le</th>
                                    <th>Montant</th>
                                    <th>Qualité</th>
                                    <th>#</th>
                                </tr>
                                 <tr  v-for="(Row,n) in EchéancierRow" :key="n">
                                    <td >
                                        <select name="pets" id="pet-select" v-model="Row.TypeEchéancier">
                                            <option selected="true">Sélectionner un type</option>
                                            <option value="Acomptes">Acomptes</option>
                                            <option value="écheance">écheance</option>
                                            <option value="Retunue">Retunue</option>

                                        </select>
                                    </td>
                                    <td >
                                        <input  type="text"  v-model="Row.LibilléEchéance"/>
                                        <!-- <input v-if ="Row.DélaiEchéance != '' &&  Row.LeEchéance == ''" type="text" :value="'100,00% ' + Row.DélaiEchéance + ' jours nets '"/> -->
                                        <!-- <input v-if ="Row.DélaiEchéance != '' && Row.LeEchéance != '' " type="text" :value="'100,00% ' + Row.DélaiEchéance + ' jours fin de mois le ' + Row.LeEchéance"/> -->

                                    </td>
                                    <td  >
                                        <select name="pets" id="pet-select" v-model="Row.ModePaimentEchéance">
                                            <option selected="true">Au choix du client</option>
                                            <option  value="Virement">Virement</option>
                                            <option  value="Chéque">Chéque</option>
                                            <option  value="Traite">Traite</option>
                                            <option  value="Espéces">Espéces</option>
                                            <option  value="Affacturage">Affacturage</option>
                                            <option  value="Autres">Autres</option>

                                        </select>
                                    </td>
                                    <td >
                                        <div class="FiledDélaiJours__zone">
                                            <input type="" placeholder="0"  v-model="Row.DélaiEchéance" @keyup="ChangeEchéancierRowLibillé(n)">
                                            <input type="text" placeholder="Jours" disabled>
                                        </div>
                                    </td>
                                    <td  class="FDM">
                                        <input class="Checkbox" type="checkbox" @click="Row.FDEEcheance == true ? Row.FDEEcheance = false : Row.FDEEcheance = true, ChangeEchéancierRowLibillé(n)">
                                    </td>
                                    <td class="LE">
                                        <input :disabled="Row.FDEEcheance != true" :style="Row.FDEEcheance != true ? 'background-color:#d9d9d9 !important;cursor: no-drop;' : 'background-color:white !important;'" type="text" placeholder="00" v-model="Row.LeEchéance" @keyup=" ChangeEchéancierRowLibillé(n)">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="0,00" v-model="Row.MontantEchéance">
                                    </td>
                                    <td>
                                        <div class="FiledDélaiJours__zone">
                                            <input placeholder="100,00" v-model="Row.QuotitéEchéance">
                                            <input type="text" placeholder="%" disabled>
                                        </div>
                                    </td>
                                    <td>
                                        <button  v-if="n > 0" class="DeleteRow" @click='DeleteRowEchéance(n)'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                            <div class="btnAjouter">
                                   <button class="AjouterUneEchéance" @click="NewEchéance()"><span>+</span> Ajouter une échéance</button>
                            </div>
                        </div>
                        <div  v-if="SelectOptions == 'Logistique'" class="Logistique" >
                            <div class="InformationPiéce__Field">
                                    <h5>Mode de livraison péféré :</h5>
                                    <select v-model="LogistiqueModeLivraison">
                                        <option value="Sélectionner un type">Sélectionner un type</option>
                                        <option value="livraison à domicile">livraison à domicile</option>
                                        <option value="flivraison gratuite">livraison gratuite</option>
                                        <option value="Mise à disposition en magazine">Mise à disposition en magazine</option>
                                        <option value="à la charge de l'acheteur">à la charge de l'acheteur</option>
                                        <option value="à la charge de vendeur">à la charge de vendeur</option>
                                    </select>
                            </div>
                             <div class="InformationPiéce__Field">
                                    <h5>Adresse de livraison :</h5>
                                    <textarea name=""  v-model="LogistiqueAdresseLivraison" ></textarea>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Adresse de facturation* :</h5>
                                    <textarea name="" v-model="LogistiqueAdresseFacturation" :style="DataIsSubmited && LogistiqueAdresseFacturation == '' ? 'border :1px solid rgb(170, 6, 6) !important' : ''"></textarea>
                                    <span v-if="DataIsSubmited && LogistiqueAdresseFacturation == '' " class="MessageErrorFiled">Ce champ est obligatoire .</span>
                            </div>
                        </div>
                        <div v-if="SelectOptions == 'Options'" class="Options">
                            <div class="InformationPiéce__Field">
                                    <h5>Modéle PDF :</h5>
                                    <select name="pets" id="pet-select" v-model="OptionsModèlePDF">
                                        <option value='Devis de vente-modéle corporate'>Devis de vente-modéle corporate</option>
                                        <option value="Proforma-modéle corporate">Proforma-modéle corporate</option>
                                    </select>
                                    <div class="AficheLesPhoto">
                                        <input type="Checkbox" checked="true" v-model="OptionsAficherphotoArticle" @click="this.OptionsAfficherphotoArticle  ? this.OptionsAfficherphotoArticle = false : this.OptionsAfficherphotoArticle = true">
                                        <h5>Afficher les photo d'article</h5>
                                    </div>
                                    <div class="AficheLesPhoto">
                                        <input type="Checkbox" checked="true" v-model="OptionsAfficherLesPrixArticle" @click="this.OptionsAfficherLesPrixArticle  ? this.OptionsAfficherLesPrixArticle = false : this.OptionsAfficherLesPrixArticle = true">
                                        <h5>Afficher les prix</h5>
                                    </div>
                            </div>
                        </div>
                        <div v-if="SelectOptions == 'Piéce Attachée'"  class="PiéceAttachée">
                            <input type="file" ref="PiéceAttachéeFile">
                            <p>veuillez sélectionner un fichier pdf de moins de 1 Mo.</p>
                        </div>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
        </v-card>
  <!-- </div> -->
                    <!-- </v-card> -->
                
                </div>
               
            </div>
          </div>
      </div>
</template>

<script>
import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  export default {
    data () {
      return {
        tab: null,
        items: [
            {
                Option:'Informations général' ,
                Icon:'far fa-tag'
            },
            {
                Option:'Tarifs fournisseurs' ,
                Icon:'fas fa-shopping-cart'
            },
            {
                Option:'Tarif clients' ,
                Icon:'fa fa-chart-line</i>'
            },
            {
                Option:'Informations complémentaires' ,
                Icon:'fas fa-tags'
            },
            
            {
                Option:'Champs pérsonnalisés' ,
                Icon:'fas fa-edit'
            },
            {
                Option:'Piéce Attachée' ,
                Icon:'fas fa-file-contract'
            },
            {
                Option:'Options' ,
                Icon:'fas fa-cogs'
            },

        ],
        SelectOptions:'Informations Général',
        // informations piéce
        InformationsPiéceCilent:'',
        InformationsPiéceNémuro:this.Numero,
        InformationsPiéceDateDuDevis:'',
        InformationsPiéceNDeRéférence:'',
        InformationsPiéceVendeur:'',
        ScrollSearchClient:false,
        InformationsPiéceDateName:'',
        Clients:[
            {
                ClientName:"CLT1 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT2 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT3 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT4 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT5 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT6 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT7 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT8 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT9 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT10 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT11 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT12 - ESSAID CHASSE SA"
            },
            {
                ClientName:"CLT13 - ESSAID CHASSE SA"
            },
        ],
        ClientSelected:'Sélectioner un cient',
        // informations financiérs
        InformationsfinanciéresDateDécheance:"2021-08-05",
        InformationsfinanciéresRemiseGlobal:0,
        InformationsfinanciéresRemiseGlobalType:'%',
        InformationsfinanciéresPort:0,
        InformationsfinanciéresTVAPort:'20,00%',
        InformationsfinanciéresDeviseUtilisée:'MAD-Drham Marocain',
        InformationsfinanciéresTauxChange : 0,
        //échéancier
        EchéancierRow:[
            {
                TypeEchéancier : 'Sélectionner un type',
                LibilléEchéance : '100,00% comptant',
                ModePaimentEchéance:'Au choix du client',
                DélaiEchéance:'',
                FDEEcheance : false,
                LeEchéance:'',
                MontantEchéance:'',
                QuotitéEchéance:'',
            },
        ],
        //// Logistique
        LogistiqueModeLivraison : 'Sélectionner un type',
        LogistiqueAdresseLivraison:'',
        LogistiqueAdresseFacturation:'',
        ///// Options
        OptionsModèlePDF:'Devis de vente-modéle corporate',
        OptionsAfficherphotoArticle:true,
        OptionsAfficherLesPrixArticle:true,
        DataIsSubmited:false,
        CheckIfExportData:'',
        DeviseNotMad : false,

      }
    },
    props:['PagePath','ConfirmationSelectionerClient','NameOfNewClientAdded','Numero'],
     components: {
      SideBar,
      NaVBar,
    },
    methods:{
        RemoveElementFromSlideIngormation(){
            if(this.PagePath === '/Ventes/NouveauDevis/Proforma/Create'){
                this.items.splice(5,1)
                this.InformationsPiéceDateName ="Date de Devis * "
            }
            else if(this.PagePath === '/Ventes/NouvelleCommande/Create'){
                this.InformationsPiéceDateName ="Date de la commande * "
            }
        },
        SwitchOptionsToAnother(item){
            this.SelectOptions = item
            console.log(this.SelectOptions)
        },
        ChangeEchéancierRowLibillé(row){
            console.log(row)
             if(this.EchéancierRow[row].DélaiEchéance != '' && this.EchéancierRow[row].FDEEcheance != true)
             {
                 this.EchéancierRow[row].LibilléEchéance=`100,00%  ${this.EchéancierRow[row].DélaiEchéance}  jours nets`
             }
             if(this.EchéancierRow[row].DélaiEchéance == '' && this.EchéancierRow[row].FDEEcheance != false && this.EchéancierRow[row].LeEchéance == '')
             {
                 this.EchéancierRow[row].LibilléEchéance=`100,00%  fin de mois`
             }
            if(this.EchéancierRow[row].DélaiEchéance != '' && this.EchéancierRow[row].FDEEcheance != false && this.EchéancierRow[row].LeEchéance == '')
             {
                 this.EchéancierRow[row].LibilléEchéance=`100,00%  ${this.EchéancierRow[row].DélaiEchéance} Jours fin de mois  `
             }
            if(this.EchéancierRow[row].DélaiEchéance == '' && this.EchéancierRow[row].FDEEcheance != false && this.EchéancierRow[row].LeEchéance != '')
             {
                 this.EchéancierRow[row].LibilléEchéance=`100,00%  fin de mois le ${this.EchéancierRow[row].LeEchéance}`
             }
             if(this.EchéancierRow[row].DélaiEchéance != '' && this.EchéancierRow[row].FDEEcheance != false && this.EchéancierRow[row].LeEchéance != '')
             {
                 this.EchéancierRow[row].LibilléEchéance=`100,00% ${this.EchéancierRow[row].DélaiEchéance} jours fin de mois le ${this.EchéancierRow[row].LeEchéance}`
             }
             if(this.EchéancierRow[row].DélaiEchéance == '' && this.EchéancierRow[row].FDEEcheance != true ){
                 this.EchéancierRow[row].LibilléEchéance = '100,00% comptant'
             }

        },
        NewEchéance(){
            const NewRow ={
                TypeEchéancier : 'Sélectionner un type',
                LibilléEchéance : '100,00% comptant',
                ModePaimentEchéance:'Au choix du client',
                DélaiEchéance:'',
                FDEEcheance : false,
                LeEchéance:'',
                MontantEchéance:'',
                QuotitéEchéance:'',
            }
            this.EchéancierRow.push(NewRow)
        },
        DeleteRowEchéance(row){
           this.EchéancierRow.splice(row,1); 
        },
        GetTodayDate(){
            let GetDate = new Date();
            let Year = GetDate.getFullYear()
            let Month = GetDate.getMonth()
            let Day = GetDate.getDay()
            let TodayDate = `${Year}-0${Month}-0${Day}`
            this.InformationsPiéceDateDuDevis = TodayDate;
        },
        ClientSelectionerBeforeConfirmation(params){
            this.$emit('AlertSelectionerClient', params);
            this.ScrollSearchClient = false
            this.InformationsPiéceCilent = params
        },
        NewClient(){
            this.$emit('AddNewClient',this.Clients);
            this.ScrollSearchClient = false
        },
        CheckDevisUtilisé(){
            
            if (this.InformationsfinanciéresDeviseUtilisée === "EUR-Euro") {
                this.DeviseNotMad = true
                this.InformationsfinanciéresTauxChange = 10.80
            }
            else if(this.InformationsfinanciéresDeviseUtilisée === "USD-Dollar américan"){
                this.DeviseNotMad = true
                this.InformationsfinanciéresTauxChange =9.60
            }
            else{
                this.DeviseNotMad = false
            }
        },
        CheckBoxAfficherImage(){
            this.OptionsAfficherphotoArticle  ? this.OptionsAfficherphotoArticle = false : this.OptionsAfficherphotoArticle = true
        },
        SendRemiseAndPortToArticleSpace(){
            let RemisAndPort ={
                Remise:this.InformationsfinanciéresRemiseGlobal,
                RemiseType:this.InformationsfinanciéresRemiseGlobalType,
                Port:this.InformationsfinanciéresPort,
                PortTVA:this.InformationsfinanciéresTVAPort
            }
            this.$emit('SendRemiseAndPortToArticleSpace',RemisAndPort)
        }
    },
    watch: { 
            ConfirmationSelectionerClient: function () {
                document.querySelector('.SearchClientButton').innerHTML =  this.InformationsPiéceCilent
                this.$emit('ConfirmationSelectionerClientToFalse')
            },
            NameOfNewClientAdded : function (){
                document.querySelector('.SearchClientButton').innerHTML =  this.NameOfNewClientAdded
                const NewClient ={"ClientName":this.NameOfNewClientAdded}
                this.Clients.push(NewClient)
            },
            '$store.state.InsertVendreData': function() {
                let FacturesInformation={
                    "Informations_Piéce":{
                        "Client_Name" :  this.InformationsPiéceCilent,
                        "Numéro" :   this.InformationsPiéceNémuro,
                        // "Date_Devis" :   this.InformationsPiéceDateDuDevis,
                        "N_De_référence" :   this.InformationsPiéceNDeRéférence,
                        "Vendeur" :   this.InformationsPiéceVendeur,
                    },
                    "Informations_Financiéres":{
                        // "Date_déchéance" :  this.InformationsfinanciéresDateDécheance,
                        "Remise_global" :   this.InformationsfinanciéresRemiseGlobal,
                        "Type_remise global" :   this. InformationsfinanciéresRemiseGlobalType,
                        "Port" :   this.  InformationsfinanciéresPort,
                        "TVA/Port" :   this.InformationsfinanciéresTVAPort,
                        "Devise_utilisée" :   this.InformationsfinanciéresDeviseUtilisée,
                        "TauxChange_If_DeviseUtilisée_Not_MAD":this.InformationsfinanciéresTauxChange
                    },
                    "écheancier":{
                        "Echéancier" :this.EchéancierRow
                    },
                    "Logistique":{
                        "Mode_Livraison":this.LogistiqueModeLivraison,
                        "Adresse_Livraison":this.LogistiqueAdresseLivraison,
                        "AdresseFacturation":this.LogistiqueAdresseFacturation
                    },
                    "Options":{
                        "Modèle_PDF":this.OptionsModèlePDF,
                        "AfficherPhotoArticle " : this.OptionsAfficherphotoArticle ,
                    }
                }
                    if(this.PagePath === '/Ventes/NouveauDevis/Proforma/Create'){
                        FacturesInformation.Informations_Piéce.Date_Devis = this.InformationsPiéceDateDuDevis
                        FacturesInformation.Informations_Financiéres.DateEcheance = this.InformationsfinanciéresDateDécheance
                    }
                    else if(this.PagePath === '/Ventes/NouvelleCommande/Create'){
                        FacturesInformation.Informations_Piéce.Date_de_commande = this.InformationsPiéceDateDuDevis
                        FacturesInformation.Options.AfficherPrixArticle = this.InformationsPiéceDateDuDevis
                        FacturesInformation.PiéceAttachée = this.$refs.PiéceAttachéeFile
                    }

                this.$store.commit('GetInformationVentes',FacturesInformation)
                this.DataIsSubmited = true;
            },
            '$store.state.Réinitialiser': function() {
                this.$forceUpdate();
                console.log('reinitaliser from informations article')
            }
    },
    mounted(){
        this.GetTodayDate()
        this.RemoveElementFromSlideIngormation()
    },
  }
   
</script>