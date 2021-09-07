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
                                    <option value="">Sélectionner un vendeur</option>
                                    <option v-for="n in 50 " :key="n" value="faical bhais">Dog</option>
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
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
        </v-card>
      <!-- <div class="InformationsProduit__Options">
        <button>
            <i class="far fa-file-alt"></i>
            Informations piéce
        </button>
        <button>
            <i class="fas fa-calculator"></i>
            Informations financiéres
        </button>
        <button>
            <i class="fad fa-calendar-alt"></i>
            Échéancier
        </button>
        <button>
            <i class="fas fa-truck"></i>
            Logistique
        </button>
        <button>
            <i class="fas fa-link"></i>
            Documents associés
        </button>
        <button>
            <i class="fas fa-cogs"></i>
            Options
        </button>

      </div>
      <div class="InformationPiéce">

      </div> -->
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
        SelectOptions:'Informations piéce'
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