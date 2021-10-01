<template>
<div class="profil-card">
     <navbar />
     <div class="card-profil-information-container">
         <h3>Mon compte Wakingo</h3>
         <div class="card-profil-information">
             <div>
             <h1>Parametres utilisateur</h1>
             <span>Cette page vous pertmet de configurer vos parametres utilisateur</span>
             </div>
             <hr>
             <div class="infos">
                 <div class="information-de-connexion">
                    <h5>
                    <v-icon
                    color="#0073b7"
                    size="20"
                    >
                    mdi-account
                    </v-icon>
                    Informations connexion</h5>
                    <hr>
                    <h4>Adress de connexion : <span>chaima.marzouk@gmail.com</span></h4>
                        <div>
                            <template>
                                <v-form>
                                    <v-container>
                                    <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        
                                        >
                                        <v-text-field
                                            v-model="first"
                                            label="Nom *"
                                            outlined
                                        ></v-text-field>
                                        </v-col>

                                        <v-col
                                        cols="12"
                                        sm="6"
                                        
                                        >
                                        <v-text-field
                                            v-model="first"
                                            label="Prenom *"
                                            outlined
                                        ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                </v-form>
                                </template>
                        </div>
                  <h5>
                    <v-icon
                    color="#0073b7"
                    size="20"
                    >
                    mdi-phone
                    </v-icon>
                    Coordonnées</h5>
                    <hr>
                    <div class="coordonnees">
                         <template>
                                <v-form>
                                    <v-container>
                                    <v-row>
                                    <v-col
                                        cols="12"
                                        sm="4"
                                        
                                        >
                                        <v-text-field
                                            v-model="Telephone"
                                            label="Telephone *"
                                            outlined
                                        ></v-text-field>
                                        </v-col>

                                        <v-col
                                        cols="12"
                                        sm="4"
                                        
                                        >
                                        <v-text-field
                                            v-model="Mobile"
                                            label="Mobile *"
                                            outlined
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        sm="4"
                                        
                                        >
                                        <v-text-field
                                            v-model="Email"
                                            label="E-mail *"
                                            outlined
                                        ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                </v-form>
                                </template>
                    </div>
                        <span>*Champ obligatoire</span>
                 </div>
                 <div class="adress">
                      <h5>
                    <v-icon
                    color="#0073b7"
                    size="20"
                    >
                    mdi-map-marker
                    </v-icon>
                    Adress</h5>
                    <hr>
                    <div>
                        <template>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        sm="12">
                                        <h4>Adresse *</h4>
                                            <v-text-field
                                            v-model="Adress"
                                            label="Adress"
                                            outlined>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </template>
                    </div>
                    <div class="code-postale-div">
                        <template>
                            <v-form>
                                <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    sm="6">
                                        <h4>Code Postale </h4>
                                        <v-text-field
                                        v-model="codeP"
                                        label="Code Postale"
                                        outlined>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                    cols="12"
                                    sm="6">
                                        <h4>Ville *</h4>
                                        <v-text-field
                                        v-model="Ville"
                                        label="Ville *"
                                        outlined>
                                        </v-text-field>
                                    </v-col>
                                </v-row>        
                                </v-container>
                            </v-form>
                        </template>
                    </div>
                    <div class="pays-div">
                        <template>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        sm="12">
                                        <h4>Pays *</h4>
                                            <v-text-field
                                            v-model="Pays"
                                            label="Pays"
                                            outlined>
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </template>
                    </div>
                 </div>
             </div>
    <div class="enregistrer">
        <hr>
        <v-btn
              small
              color="primary"
              dark
            >
            <v-icon
                    color="white"
                    size="15"
                    class="check-icon"
                    >
                    mdi-check-bold
                    </v-icon>
              Enregistrer
            </v-btn>
    </div> 
         </div>
     </div>
<div>

</div>
</div>
   
  
</template>

<script>
import navbar from './navbar.vue'

export default {
    name: 'Profil-card',

    data: () => ({
      first: 'Chaima',
      last: 'Marzouk',
      Email:'marzouk.chaima.82 @gmail.com',
      Mobile:'0666666666',
      Telephone:'05000000',
      Ville:'agadir',
      codeP: 1234,
      Pays:'Maroc'
    }),

 components:{
     navbar,
 }
    }
</script>
