<template>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
              <v-toolbar>
                  <v-toolbar-title class="text-md-center">Cadastro</v-toolbar-title>
              </v-toolbar>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignup">
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="E-mail"
                        id="email"
                        v-model="email"
                        type="email"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Senha"
                        id="password"
                        v-model="password"
                        type="password"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirma senha"
                        id="confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        :rules="[comparePasswords]"></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit">Cadastrar</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>
  
  <script>
    /* eslint-disable */
    export default {
      data () {
        return {
          email: '',
          password: '',
          confirmPassword: ''
        }
      },
      computed: {
        comparePasswords () {
          return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
        },
        user () {
          return this.$store.getters.user
        }
      },
      watch: {
        user (value) {
          if (value !== null && value !== undefined) {
            this.$router.push('/profile')
          }
        }
      },
      methods: {
        onSignup () {
          this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        }
      }
    }
  </script>