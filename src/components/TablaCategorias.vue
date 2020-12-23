<template>
    <div>
        <v-data-table
        :headers="headers"
        :items="categorias"
        :loading="cargando"
        loading-text="Loading... Please wait"
        sort-by="id"
        class="elevation-1"
        >
        <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Tabla Categorías</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Nueva Categoría
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripcion"
                        auto-grow
                        counter="240"
                      ></v-textarea>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Está seguro que desea cambiar el estado de la categoría?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-checkbox-marked-outline
          
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    </div>
</template>

<script>
//import axios from "axios" se pasó al main

export default {
    data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      { text: 'ID', align: 'center', value: 'id', sortable: false },
      { text: 'Nombre', align: 'center', value: 'nombre' },
      { text: 'Descripcion', align: 'center', value: 'descripcion' },
      { text: 'Estado', align: 'center', value: 'estado' },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false },
    ],
    categorias: [],
    editedIndex: -1,
    editedItem: {
      id: '',
      nombre: '',
      descripcion: '',
      estado: '',
    },
    defaultItem: {
      id: '',
      nombre: '',
      descripcion: '',
      estado: '',
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva Categoría' : 'Editar Categoría'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.cargando = true
    this.initialize()
  },

  methods: {
    
    list() {
      
      this.$axios.get('/categoria/list')
        .then( (response) => {
          this.categorias = response.data
          this.cargando = false
        })
        .catch( error => {
          return error
        })
    },

    initialize () {
      this.list()
    },

    editItem (item) {
      
      this.editedIndex = this.categorias.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.list()
    },

    deleteItem (item) {
      this.editedIndex = this.categorias.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if(this.editedItem.estado === 1){
        this.$axios.put('/categoria/deactivate', {id : this.editedItem.id})
      } else {
        this.$axios.put('/categoria/activate', {id : this.editedItem.id})
      }
      this.list()
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.list()
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.list()
    },

    save () {
      if (this.editedIndex > -1) {
          let objetoBusqueda = {
          nombre : this.editedItem.nombre,
          descripcion : this.editedItem.descripcion,
          id : this.editedItem.id,
          }
          this.$axios.put('/categoria/update', objetoBusqueda)
          Object.assign(this.categorias[this.editedIndex], this.editedItem)
      } else {
        let objetoBusqueda = {
          nombre : this.editedItem.nombre,
          descripcion : this.editedItem.descripcion,
          estado : 1
          }
          this.$axios.post('/categoria/add', objetoBusqueda)
        this.categorias.push(this.editedItem)
      }
        this.close()
    },
  },
}
</script>