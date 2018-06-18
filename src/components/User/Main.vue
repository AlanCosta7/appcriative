<script>
    /* eslint-disable */
  export default {
      computed: {
          name () {
              return this.$store.state.user.name
          },
      }
  }
</script>

<template>
  <div>
  <v-chip color="green" text-color="white">
      <v-avatar>
          <v-icon>account_circle</v-icon>
      </v-avatar>
      {{ name }}</v-chip>    
  </div>
</template>