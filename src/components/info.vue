<template>
  <div class="container" style = "">
    <div class="row">
      <div class="col">
        {{ this.$store.getters.doneTodos[this.$route.params.id]["name"] }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img :src= this.$store.getters.doneTodos[this.$route.params.id].image>
      </div>
    </div>
    <div class="row">
      <div class="col">
        {{ this.$store.getters.doneTodos[this.$route.params.id]["description"] }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/">back</router-link>
      </div>
    </div>
  </div>
</template>

<style>
  div {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e51;
    margin-top: 10px;

  } 
</style>
