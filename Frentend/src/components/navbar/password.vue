<template>
<div class="profil-card">
     <navbar />
     <div class="card-profil-information-container">
         <div style="display:flex">
         <div>
             <h3>Mon compte Wakingo</h3>
         </div>
         <div class="emplacement">
             <span >Mon compte  >  Changement de mot de passe</span>
         </div>
         </div>
         <div class="card-profil-information">
             <div>
             <h1>Changement de mot de passe</h1>
             <span>Cette page vous permet de modifier facilement votre mot de passe</span>
             </div>
             <hr>
             <div class="infos">
                <template>
                           <v-form>
                                <v-container class="password-container">
                                    
                                          <v-col
                                            cols="12"
                                            sm="12">
                                            <p>Veuillez entrer votre nouveau mot de passe, puis confirmez-le avant de cliquer sur Enregistrer</p>
                                          </v-col>
                                    
                                        <v-col
                                        cols="12"
                                        sm="8">
                                            <v-text-field
                                            label="Ancien mot de passe"
                                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            :type="show3 ? 'text' : 'password'"
                                            name="input-10-2"
                                            hint="At least 8 characters"
                                            class="input-group--focused"
                                            outlined
                                             @click:append="show3 = !show3">
                                           
                                            </v-text-field>
                                        </v-col>
                                     
                                        <v-col
                                        cols=""
                                        sm="8">
                                             <v-text-field
                                            label="Nouveau mot de passe"
                                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]"
                                            :type="show3 ? 'text' : 'password'"
                                            name="password1"
                                            v-model="password1"
                                            hint="At least 8 characters"
                                            class="input-group--focused"
                                            outlined
                                             @click:append="show3 = !show3">
                                           
                                            </v-text-field>
                                        </v-col>
                                     
                                        <v-col
                                        cols=""
                                        sm="8">
                                             <v-text-field
                                            label="confirmation de nouveau mot de passe"
                                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show3 ? 'text' : 'password'"
                                            v-model="password2"
                                            name="password2"
                                           
                                            class="input-group--focused"
                                            outlined
                                            v-on:blur="validate"
                                            >
                                           
                                            </v-text-field>
                                            <span v-if="validate = !validate" class="danger">Le nouveau mot de passe et sa confirmation ne correspondent pas</span>
                                            
                                        </v-col>
                                    
                                     <div class="enregistrer-password">
                                    <v-btn
                                        small
                                        color="primary"
                                        dark
                                        >
                                        <v-icon
                                                color="white"
                                                size="15"
                                                class="check-password"
                                                >
                                                mdi-check-bold
                                                </v-icon>
                                                Enregistrer
                                        </v-btn>
                                    </div>
                                </v-container>
                            </v-form>
                 </template> 
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

     data () {
      return {
        show3: true,
        // validate:true,
        password1: '',
        password2: '',
        rules: {
          required: value => !!value || 'Required.',
        //   validate: validate => !!validate || 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        //   passwordMatch: () =>('Le nouveau mot de passe et sa confirmation ne correspondent pas')
        },
      }
    },

 components:{
     navbar,
 },
  methods: {
   
    validate: function() {
        this.password1 === this.password2
    }
  }
    }
</script>
