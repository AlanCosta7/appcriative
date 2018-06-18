<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-for="item in listaCurso" :key="item.uid">
          <v-card-media
            class="white--text"
            contain>
            <v-container         
            fluid
            style="min-height: 0;"
            grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item.tituloCurso}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div contain>
              <video width=100% height=100% controls>
                <source :src=item.videoUrl class="non-downloadable">
              </video>  
              <br><br>
              <span class="grey--text">{{item.autorCurso}}</span><br><br>
              <span>{{item.descricaoCurso}}</span><br><br>
              <v-btn :href=item.textoCurso color="red">PDF</v-btn>
            </div>
          </v-card-title>
          <v-card-actions>
          </v-card-actions>
        
        </v-card>
      </v-flex>
    </v-layout>
  </template>

  <script>
import { cursoRef } from "../helpers/firebase/firebaseconfig.js"

      export default {
        data () {
          return {
            
          }
        },
        firebase: {
            listaCurso: cursoRef
            },
            
    }
  </script>

  <style>
video.non-downloadable::-webkit-media-controls-enclosure{
 overflow: hidden;
}
video.non-downloadable::-webkit-media-controls-panel{
  width: calc(100% + 32px);
}
  </style>