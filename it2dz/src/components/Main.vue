<template>
    <div class = "row">
          <div v-for="product in this.products" :key="product.card">
              <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="product-details">
                  <img :src = product.im :click>
                  <h3>{{product.name}}</h3>
                  <p>
                    {{product.description}}
                  </p>
                  <p>
                      {{product.price}}
                  </p>
                </div>
              </div>
          </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.products = this.$store.getters.CARDS;
    }
}
</script>