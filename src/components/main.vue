<template>
    <div>
        <div>
        <div class = "row" style = "margin-bottom: 5%; margin-left: 5%; margin-right: 5%" >
            <div class = "col-md-4">
                <h1>Shopping</h1>
            </div>
        </div>
        <div class = "row" style = "margin-bottom: 5%; margin-left: 5%; margin-right: 5%">
            <div class = "col-md-4">
                <input v-model.trim="inputSearch" type="text" placeholder="Search"/>
            </div>
        </div>
        </div>
        <div>
            <div is="card" v-for="product in filteredProducts" :product="product" :key="product.id">
            </div>
        </div>
    </div>
</template>

<script>
import card from './card.vue'
export default {
    components: {
    card,
},
data(){
    return {
        inputSearch: ''
    }
},
computed: {
    filteredProducts() {
        let that = this;
        return this.$store.getters.doneTodos.filter(function(product) {
            return ((product.name.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1) ||
            (product.description.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1));
        });
    }
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
        margin-top: 60px;
    }
</style>
