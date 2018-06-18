<template>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-list two-line>
                        <template v-for="(item, index) in listaTexto">
                          <v-list-tile
                            :key="item.uid"
                            avatar
                            ripple>
                            <v-list-tile-content>
                              <v-list-tile-title>{{ item.titulotxt }}</v-list-tile-title>
                              <v-list-tile-sub-title class="text--primary">{{ item.autortxt }}</v-list-tile-sub-title>
                              <v-list-tile-sub-title>{{ item.descricaotxt }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-btn round color="red" :href=item.textotxt>
                              <v-icon>picture_as_pdf</v-icon>
                            </v-btn> 
                          </v-list-tile>
                          <v-divider v-if="index + 1 < listaTexto.length" :key="index"></v-divider>
                        </template>
                </v-list>
              </v-card>
            </v-flex>
        </v-layout>
      </template>
    
      <script>
    import { textoRef } from "../helpers/firebase/firebaseconfig.js"
    
          export default {
            data () {
              return {
                selected: [2],
              }
            },
            firebase: {
                listaTexto: textoRef
                },
                
        }
      </script>
    
      <style>
    
      </style>