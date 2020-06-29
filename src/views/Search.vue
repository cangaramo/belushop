<template>
    <div class="container search-results">
        <div class="breadcrumbs">
            <router-link class="back" to="/">Home</router-link>
            <i class="arrow-back fas fa-angle-left"></i>
            <a class="active">Search</a>
        </div>
        <div class="title mt-4">
            <div class="underline"></div>
            <h3 v-if="products.length == 0">No results found</h3>
            <h3 v-else-if="term == ''">Showing all results</h3>
            <h3 v-else>Results for {{ term }}</h3>
        </div>
        <div class="row mt-5">
            <product-card
                v-for="(prod, index) in products"
                :key="index"
                :prod="prod"
                type="mugs"
                col="col-sm-4 col-lg-3"
                >{{ prod.title }}
            </product-card>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard'

export default {
    data() {
        return {
            term: ''
        }
    },
    computed: {
        ...mapGetters(['searchProduct']),
        products() {
            return this.searchProduct(this.term)
        }
    },
    components: {
        'product-card': ProductCard
    },
    created() {
        this.term = this.$route.query.term
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/global.scss';

.search-results {
    min-height: 460px;
}
</style>
