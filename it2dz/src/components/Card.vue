<template>
    <div class="container" style = "">
        <div class="row">
            <div class="col">
                {{ this.card.name }}
            </div>
        </div>
        <div class="row">
            <div class="col">
              <img :src="this.card.im">
            </div>
        </div>
        <div class="row">
            <div class="col">
                {{ this.card.description }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link to="/">back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            card: []
        }
    },
    mounted() {
        this.card = this.$store.getters.CARDS.findIndex(x => x.code == this.$router.params.id);
    }
}
</script>
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