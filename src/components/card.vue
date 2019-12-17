<template>
    <router-link :to="'/item/' + product.id">
    <div class="col-md-4">
        <div class="product-details">
            <img :src = product.image>
            <h3>{{product.name}}</h3>
            <p>
                {{product.description}}
            </p>
            <p>
                {{product.price}}
            </p>
        </div>
    </div>
    </router-link>
</template>

<script>
    module.exports = {
    props: ['product'],
    name: 'card',
    data: function() {
        return {

        }
    }
}
</script>