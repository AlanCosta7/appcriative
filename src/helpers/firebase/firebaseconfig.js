/* eslint-disable */
import {initializeApp} from 'firebase'
import * as firebase from 'firebase'

// Initialize Firebase
const config = initializeApp({
  apiKey: "AIzaSyAUTf9v0FZkw9SAJhFkAFuzdtrpg5HsqlI",
  authDomain: "criative-2018-js.firebaseapp.com",
  databaseURL: "https://criative-2018-js.firebaseio.com",
  storageBucket: "criative-2018-js.appspot.com",
  })

  export const database = config.database();
  export const userRef = database.ref('usuarios')
  export const cursoRef = database.ref('Category')
  export const textoRef = database.ref('Texto')
  export const videoRef = database.ref('Video')

  
