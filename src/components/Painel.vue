<template>
    <div id="app">
      <app-registration @userRegistered="userRegistered" :users="unregisteredUsers"></app-registration>
    </div>
  </template>
  
  <script>
         /* eslint-disable */
    import Registration from '../components/Home.vue';
  export default {
      data() {
          return {
              registrations: [],
              users: []
          }
      },
      computed: {
          unregisteredUsers() {
              return this.users.filter((user) => {
                  return !user.registered;
              });
          }
      },
      methods: {
        userRegistered(user) {
            const date = new Date;
            this.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
        },
          userUnregistered(registration) {
            const user = this.users.find(user => {
                return user.id == registration.userId;
            });
            user.registered = false;
            this.registrations.splice(this.registrations.indexOf(registration), 1);
          }
      },
      components: {
          appRegistration: Registration,
      }
  }
  </script>