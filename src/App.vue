<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Operador Logistico</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="280"
     >
      <!-- Sub group menu de navegacion -->
      <v-card
        class="mx-auto"
        >
        <v-list>
          <!-- Inicio -->
          <v-list-item to = "Home" >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <!-- Login -->
          <v-list-item  to = "Login"> <!-- to = "Login" -->
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <!-- Rol/tablas -->
          <v-list-group 
            :value="true"
            prepend-icon="mdi-shield-account"
            >
            <template v-slot:activator>
              <v-list-item-title>Rol</v-list-item-title>
            </template>
                <!-- Administrador -->
                <v-list-group
                  :value="true"
                  no-action
                  sub-group
                  >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Administrador</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  
                  <v-list-item
                    v-for="([title, icon, rout], i) in administrador"
                    :key="i"
                    :to="rout"
                    link
                    >
                    <v-list-item-title v-text="title"></v-list-item-title>
        
                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>
                <!-- Vendedor -->
                <v-list-group
                  no-action
                  sub-group
                  >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Vendedor</v-list-item-title>
                    </v-list-item-content>
                  </template>
        
                  <v-list-item
                    v-for="([title, icon], i) in vendedor"
                    :key="i"
                    link
                    >
                    <v-list-item-title v-text="title"></v-list-item-title>
        
                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>
                <!-- Almacenero -->
                <v-list-group
                  no-action
                  sub-group
                  >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Almacenero</v-list-item-title>
                    </v-list-item-content>
                  </template>
        
                  <v-list-item
                    v-for="([title, icon], i) in almacenero"
                    :key="i"
                    link
                    >
                    <v-list-item-title v-text="title"></v-list-item-title>
        
                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

          </v-list-group>

          <!-- Logout -->
          <v-list-item  @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>

          <!-- configuraciones -->
          <v-list-item to = "About"> <!-- to = "About" -->
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">

      <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import swal from 'sweetalert';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: null,
    administrador: [
      ['Tabla Usuarios', 'mdi-card-account-details', 'Usuarios'],
      ['Tabla Categorías', 'mdi-group', 'Categorias'],
      ['Tabla Artículos', 'mdi-sitemap', 'Articulos'],
      //['Configuracion', 'mdi-cog-outline'],
    ],
    vendedor: [
      ['En construcción', 'mdi-gantry-crane'],
    ],
    almacenero: [
      ['En construcción', 'mdi-gantry-crane'],
    ],
  }),

   methods:{

     logout(){
      localStorage.removeItem("token");
      swal("Sesion cerrada", "Te esperamos pronto.", "info");
      this.$router.push('/')
    }
    }
}
</script>
