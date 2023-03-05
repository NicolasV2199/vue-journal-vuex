<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <h1>Hola mundo</h1>

  <button @click="goToDayBook" class="btn btn-primary">Prueba</button>
  <button @click="goToDayBook" class="btn btn-secondary">Prueba</button>
  <button @click="goToDayBook" class="btn btn-success">Prueba</button>


</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },

  methods:{
    goToDayBook(){
      this.$router.push({name: 'no-entry'});
    }
  }
}
</script>
