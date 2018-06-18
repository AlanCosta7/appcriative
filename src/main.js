/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import {store} from './store'
import AlertCmp from './components/Shared/Alert.vue'
import VueFire from 'vuefire'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VForm,
  VTextField,
  VAlert,
  VDataTable,
  VTooltip,
  VSelect,
  VPagination,
  VChip,
  VAvatar,
  VSwitch,
  VDialog,
  VDivider,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VForm,
    VTextField,
    VAlert,
    AlertCmp,
    VDataTable,
    VTooltip,
    VSelect,
    VPagination,
    VChip,
    VAvatar,
    VSwitch,
    VDialog,   
    VDivider,   
    transitions
  },
  theme: {
    primary: "#03A9F4",
    secondary: "#E8EAF6",
    accent: "#1A237E",
    error: "#F44336",
    warning: "#FFC107",
    info: "#2196f3",
    success: "#00C853"
  }
})

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})