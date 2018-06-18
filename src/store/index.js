/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { userRef } from "../helpers/firebase/firebaseconfig.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      email: '',
      uid: ''
    },
    usuario: {
        name: '',
        tipoUsuario: '',
        email: '',
        uid: ''
      },
      loading: false,
      error: null
},
mutations: {
  setUser (state, payload) {
      state.user = payload
    },
    setUsuario (state, payload) {
        state.usuario = payload
      },
    setLoading (state, payload) {
        state.loading = payload
      },
    setError (state, payload) {
        state.error = payload
      },
    clearError (state) {
        state.error = null
      }  
},
actions: {
    signUserUp ({commit}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                email: user.email,
                uid: user.uid,
              }
              commit('setUser', newUser)
            }
          )
          .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            }
          )
    },
    signUserIn ({commit}, payload) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                email: user.email,
                uid: user.uid,
              }
              commit('setUser', newUser)
              console.log(user)
              //window.localStorage.setItem('user', JSON.stringify({email: newUser.email, uid: newUser.uid}))  
            }
          )
          .catch(
            error => {
              var errorCode = error.code
              var errorMessage = error.message
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            })
    },
    onperfil ({commit, getters}, payload){
        const user = getters.user
        var uid = user.uid
        userRef.child(uid).update({perfil: 
              {email: user.email, 
              uid: user.uid,
              name: payload.name, 
              tipoUsuario: payload.tipoUsuario
              }
        })
        commit('setUsuario', {email: user.email, 
          uid: user.uid,
          name: payload.name, 
          tipoUsuario: payload.tipoUsuario,
          })
    },
    logout ({commit}) {
        firebase.auth().signOut()
        commit('setUser', null)
        commit('setUsuario', '')
        window.localStorage.removeItem('user')
  
      }, 
      clearError ({commit}) {
        commit('clearError')
      }
    },
getters: {
    user (state) {
      return state.user
    },
    usuario (state) {
        return state.usuario
    },
    
    loading (state) {
        return state.loading
    },
    error (state) {
        return state.error
    }
}
})