/* eslint-disable */
import {initializeApp} from 'firebase'
import * as firebase from 'firebase'

// Initialize Firebase
const config = initializeApp({
  apiKey: "apiKey"
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  storageBucket: "storageBucket",
  })

  export const database = config.database();
  export const userRef = database.ref('usuarios')
  export const cursoRef = database.ref('Category')
  export const textoRef = database.ref('Texto')
  export const videoRef = database.ref('Video')

  
