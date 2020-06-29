<template>
    <div>
        <div class="title">
            <div class="underline"></div>
            <h3>{{ getTitle }}</h3>
        </div>
        <transition name="slideup">
            <div v-if="show" class="row">
                <product-card
                    v-for="(prod, index) in getProductos"
                    :key="index"
                    :prod="prod"
                    :type="type"
                    col="col-sm-6 col-lg-4"
                    >{{ prod.title }}
                </product-card>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '../components/ProductCard'

export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        type: String
    },
    computed: {
        getTitle() {
            if (this.type == 'mugs') {
                return 'Mugs'
            } else if (this.type == 'tshirts') {
                return 'T-shirts'
            } else {
                return 'Bags'
            }
        },
        getProductos() {
            if (this.type == 'mugs') {
                return this.getFilteredTazas
            } else if (this.type == 'tshirts') {
                return this.getFilteredCamisetas
            } else {
                return this.getFilteredBolsas
            }
        },
        ...mapGetters([
            'getFilteredTazas',
            'getFilteredCamisetas',
            'getFilteredBolsas'
        ])
    },
    components: {
        'product-card': ProductCard
    },
    mounted() {
        this.show = true
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/animations.scss';
@import '@/scss/global.scss';
</style>
