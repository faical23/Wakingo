<template>
   <nav>
      <v-toolbar flat app  dense class="light-blue darken-3">
          <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase white--text">
            
              <h5 class="">KPUB</h5>
                
          </v-toolbar-title>
        

          <v-spacer></v-spacer>
          
          
    <v-menu
      v-for="([text], index) in btns"
      :key="text"
      class="v-menu"
      offset-y
      offset-x
      
     
    >
     
      <template v-slot:activator="{ attrs, on } ">
               
         <!-- user btn  -->
        <v-tab flat
          :color="index"
          class="white--text ma-5 light-blue darken-3"
          
          v-bind="attrs"
          v-on="on"
          
        >
        <v-icon
          color="white"
           size="15"
        >
          mdi-account-circle

        </v-icon>
        <span class="user">Chaima MARZOUK</span>

        </v-tab>

           <!-- settings btn  -->
        <v-tab flat
          :color="index"
          class="white--text ma-5 light-blue darken-3"  
        >
        <v-icon
          color="white"
           size="15"
        >
          mdi-cog
        </v-icon>
        <span class="sittings">Paramètres</span>
        </v-tab>

         <!-- help btn  -->
        <v-tab flat
          :color="index"
          class="white--text ma-5 light-blue darken-3"  
        >
        <v-icon
          color="white"
           size="15"
        >
          mdi-help-circle
        </v-icon >
        <span class="help">Aide</span>
        </v-tab>

        
      </template>
     <v-list>
        <v-list-item
          v-for="item in items"
          :key="item"
          link
        >
         
              <v-icon small>
                  {{ item.icon }}
              </v-icon>
              <v-icon small>
                  {{ item.icon2 }}
              </v-icon>
            

            <v-list-item-content>
                  <v-list-item-title >
                    <span class="item">{{ item.text }}</span>
                    <span class="config">{{ item.text2 }}</span>
                  </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
            <v-container>
                <v-checkbox
                v-model="checkbox"
                label="kpub"
                >
                </v-checkbox>
            </v-container>
        
      </v-list>
       
         <v-btn
            block
            elevation="1"
            >
            <span class="logout">  
                <v-icon small>
                   mdi-power-standby
                </v-icon>
                   Logout
             </span>
         </v-btn>
    </v-menu>
   
  
      </v-toolbar>
     
   </nav>
</template>



<script>
    export default {
         name: 'navbar',
         
           
     data: () => ({
      btns: [
        [ 'lg'],
      ],
      
      items: [
        { text: 'Mon compte', icon: 'mdi-account' },
        { text: 'Mot de passe', icon: 'mdi-lock' },
        { text2: 'config', icon2: 'mdi-cog' },
     
      ],
      
    }),
    

  }
    
    
</script>

<style>

.user{
    margin-left: 4px;
}

.help{
     margin-left: 4px;
}
.sittings{
     margin-left: 4px;
}
.config{
     margin-left: 7px;
}

span{
    font-size: 12px;
    
}

.item{
    font-size: 10px;
    margin-left: 4px;
}

.v-menu{
    margin-top: 300px;
}


</style>