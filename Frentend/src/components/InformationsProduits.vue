<template>
  <div class="InformationsProduit">
        <v-card class="SwitchOptions">
                <v-toolbar
                >
                <template v-slot:extension>
                    <v-tabs
                    v-model="tab"
                    align-with-title
                    >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab
                        v-for="item in items"
                        :key="item"
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
                    v-for="item in items"
                    :key="item"
                >
                    <v-card flat>

                    <v-card-text>
                        <div v-if="SelectOptions == 'Informations piéce'" class="InformationPiéce">
                            <div class="InformationPiéce__Field">
                                    <h5>Client* :</h5>
                                    <input type="text" name="city" list="cityname" placeholder ="Sélectioner un cient"/>
                                    <datalist id="cityname">
                                    <option v-for="n in 50 " :key="n"  value="faical bahis"/>
                                    </datalist>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Numéro* :</h5>
                                    <input type="text" placeholder ="DEV-07092021-4"/>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Date du devis* :</h5>
                                    <input type="date" />
                            </div>
                            <div class="InformationPiéce__Field">
                                <h5>N de référence :</h5>
                                    <input type="text" placeholder ="DEV-07092021-4"/>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Vendeur :</h5>
                                <select name="pets" id="pet-select">
                                    <option value="">Sélectionner un type</option>
                                    <option v-for="n in 50 " :key="n" value="faical bhais">faical</option>
                                </select>
                            </div>

                        </div>
                        <div v-if="SelectOptions == 'Informations financiéres'" class="InformationFinanciéres">
                            <div class="InformationPiéce__Field">
                                    <h5>Date d'échéance* :</h5>
                                    <input type="date" />
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Remise globale :</h5>
                                    <div class="RemiseGlobal">
                                        <input type="number" placeholder="0,00"/>
                                        <select name="pets" id="pet-select">
                                            <option value="dog">%</option>
                                            <option value="cat">Montant</option>
                                        </select>
                                    </div>
                            </div>
                             <div class="InformationPiéce__Field">
                                    <h5>Port:</h5>
                                    <input class="Port" type="text" placeholder="0,00"/>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Tva/port:</h5>
                                    <select class="TVA" name="pets" id="pet-select">
                                        <option value="dog">20,00%</option>
                                        <option value="cat">14,00%</option>
                                        <option value="dog">10,00%</option>
                                        <option value="cat">7,00%</option>
                                        <option value="cat">0,00%</option>
                                    </select>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Devise utilisée* :</h5>
                                    <select name="pets" id="pet-select">
                                        <option value="dog">MAD-Drham Marocain</option>
                                        <option value="cat">EUR-Euro</option>
                                        <option value="dog">USD-Dollar américan</option>
                                    </select>
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
                                 <tr>
                                    <td >
                                    <select name="pets" id="pet-select">
                                        <option selected="true" disabled="disabled">Sélectionner un type</option>
                                        <option v-for="n in 3" :key="n" value="faical bhais">Acomptes</option>
                                    </select>
                                    </td>
                                    <td >
                                        <input type="text" placeholder="100,00% comptant"/>
                                    </td>
                                    <td  >
                                        <select name="pets" id="pet-select">
                                            <option selected="true" disabled="disabled">Au choix du client</option>
                                            <option v-for="n in 3" :key="n" value="faical bhais">Virement</option>
                                        </select>
                                    </td>
                                    <td >
                                        <div class="FiledDélaiJours__zone">
                                            <input type="number" placeholder="0">
                                            <input type="text" placeholder="Jours" disabled>
                                        </div>
                                    </td>
                                    <td  class="FDM">
                                        <input class="Checkbox" type="checkbox">
                                    </td>
                                    <td class="LE">
                                        <input type="number" placeholder="00">
                                    </td>
                                    <td>
                                        <input type="number" placeholder="0,00">
                                    </td>
                                    <td>
                                        <div class="FiledDélaiJours__zone">
                                            <input type="text" placeholder="100,00">
                                            <input type="text" placeholder="%" disabled>
                                        </div>
                                    </td>
                                    <td>
                                        <button class="DeleteRow">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                            <div class="btnAjouter">
                                   <button class="AjouterUneEchéance"><span>+</span> Ajouter une échéance</button>
                            </div>
                        </div>
                        <div  v-if="SelectOptions == 'Logistique'" class="Logistique" >
                            <div class="InformationPiéce__Field">
                                    <h5>Mode de livraison péféré :</h5>
                                    <select name="pets" id="pet-select">
                                        <option selected="true" disabled="disabled">Sélectionner un type</option>
                                        <option v-for="n in 3" :key="n" value="faical bhais">Acomptes</option>
                                    </select>
                            </div>
                             <div class="InformationPiéce__Field">
                                    <h5>Adresse de livraison :</h5>
                                    <textarea name="" ></textarea>
                            </div>
                            <div class="InformationPiéce__Field">
                                    <h5>Adresse de facturation* :</h5>
                                    <textarea name="" ></textarea>
                            </div>
                        </div>
                        <div v-if="SelectOptions == 'Options'" class="Options">
                            <div class="InformationPiéce__Field">
                                    <h5>Modéle PDF :</h5>
                                    <select name="pets" id="pet-select">
                                        <option>Devis de vente-modéle corporate</option>
                                        <option>Proforma-modéle corporate</option>
                                    </select>
                                    <div class="AficheLesPhoto">
                                        <input type="Checkbox" checked="true">
                                        <h5>Aficher les photo d'article</h5>
                                    </div>
                            </div>
                        </div>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
        </v-card>
   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
            {
                Option:'Informations piéce' ,
                Icon:'far fa-file-alt'
            },
            {
                Option:'Informations financiéres' ,
                Icon:'fas fa-calculator'
            },
            {
                Option:'Échéancier' ,
                Icon:'fad fa-calendar-alt'
            },
            {
                Option:'Logistique' ,
                Icon:'fas fa-truck'
            },
            {
                Option:'Documents associés' ,
                Icon:'fas fa-link'
            },
            {
                Option:'Options' ,
                Icon:'fas fa-cogs'
            },

        ],
        SelectOptions:'Informations piéce',
      }
    },
    methods:{
        SwitchOptionsToAnother(item){
            this.SelectOptions = item
            console.log(this.SelectOptions)
        }
    }
  }
</script>