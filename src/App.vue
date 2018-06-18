<template>
  <v-app dark>
      <v-navigation-drawer
      fixed
      temporary
      v-model="drawer">
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        v-if="userIsAuthenticated"
        @click="onLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Sair</v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="amber darken-4">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">CriAtive</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
        v-if="userIsAuthenticated"
        flat
        @click="onLogout">
        <v-icon left dark>exit_to_app</v-icon>
        Sair
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
          <main row>
              <v-card height="50px" flat>
              <div v-if="userIsAuthenticated" class="container">        
               <!--<cc-users></cc-users> -->
              </div>
              </v-card>
              <router-view></router-view>
             </main>
    <v-footer app fixed>
        <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  /* eslint-disable */
import CcUsers from './components/User/Main'

export default {
  data () {
      return {
        drawer: false,
      }
    },
    components: {
      CcUsers
    },
    computed: {
      menuItems () {
        let menuItems = [
          //{icon: 'lock_open', title: 'Cadastro', link: '/cadastro'},
          {icon: 'face', title: 'Entrar', link: '/'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
          {icon: 'school', title: 'CriAtive', link: '/criative'},
          {icon: 'subscriptions', title: '+Videos', link: '/plusvideos'},
          {icon: 'picture_as_pdf', title: '+Textos', link: '/plustextos'},
         // {icon: 'person', title: 'Perfil', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null || this.$store.getters.user !== undefined
      }
    },       
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      },
    }
  }
</script>

<style lang="stylus">
    @import './stylus/main';
</style>