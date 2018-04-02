<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="" :to="{name: child.path}">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text" :to="{name: item.path}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">{{app}}</span>
      </v-toolbar-title>
      <!-- <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down"></v-text-field> -->
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout row wrap>
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-btn fab bottom right color="pink" dark fixed @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="1000px">
      <newsform>
        <v-btn @click.native="close">cancelar</v-btn>
      </newsform>
    </v-dialog>
  </v-app>
</template>

<script>
import dashboard from "./components/DashBoard";
import newsform from "./components/NewsForm";
export default {
  components: {
    dashboard,
    newsform
  },
  data: () => ({
    app: "WP HUACHIPA",
    dialog: false,
    drawer: null,
    items: [
      { icon: "dashboard", text: "Dashboard", path: "home" },
      // { icon: "history", text: "Frequently contacted" },
      // { icon: "content_copy", text: "Duplicates" },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Noticias",
        model: true,
        children: [
          { icon: "add", text: "Nueva noticia", path: "news-form" },
          { icon: "list", text: "Listar noticias", path: "news-list" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Categorias",
        model: false,
        children: [
          { icon: "add", text: "Nueva categoria", path: "category-form" },
          { icon: "list", text: "Listar categorias", path: "category-list" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Notas",
        model: false,
        children: [
          { icon: "add", text: "Nueva Nota", path: "note-form" },
          { icon: "list", text: "Listar Notas", path: "note-list" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Eventos",
        model: false,
        children: [
          { icon: "add", text: "Nuevo Evento", path: "event-form" },
          { icon: "list", text: "Listar Eventos", path: "event-list" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Documentos",
        model: false,
        children: [
          { icon: "add", text: "Nuevo Documento", path: "document-form" },
          { icon: "list", text: "Listar Documentos", path: "document-list" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Lugares",
        model: false,
        children: [
          { icon: "add", text: "Nuevo Lugar", path: "place-form" },
          { icon: "list", text: "Listar Lugares", path: "place-list" }
        ]
      },
      { icon: "settings", text: "Ajustes", path: "settings" }
      // { icon: "help", text: "Help" },
      // { icon: "phonelink", text: "App downloads" },
      // { icon: "keyboard", text: "Go to the old version" }
    ]
  }),
  methods: {
    close() {
      this.dialog = false;
    }
  }
};
</script>