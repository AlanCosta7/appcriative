<template>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card v-for="item in listaVideo" :key="item.uid">
              <v-card-media
                class="white--text"
                contain>
                <v-container         
                fluid
                style="min-height: 0;"
                grid-list-lg>
                  <v-layout row wrap>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{item.amb_titulo}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <video width=100% fluid controls>
                    <source :src=item.amb_videoUrl>
                  </video>  <br><br>
                  <span class="grey--text">{{item.amb_autor}}</span><br><br>
                  <span>{{item.amb_descricao}}</span><br>
                </div>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    
      <script>
    import { videoRef } from "../helpers/firebase/firebaseconfig.js"
    
          export default {
            data () {
              return {
                
              }
            },
            firebase: {
                listaVideo: videoRef
                },
                
        }
      </script>
    
      <style>
    
      </style>