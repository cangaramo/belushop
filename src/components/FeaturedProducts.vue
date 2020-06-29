<template>
    <div class="featured container">
        <h3>Featured</h3>
        <div class="trigger-animation" v-view.once="collectionsVisible"></div>
        <transition name="fadelong">
            <div v-if="show" class="row">
                <product-card
                    v-for="(prod, index) in getProductos"
                    :key="index"
                    :prod="prod"
                    :type="getType(prod.id)"
                    col="col-sm-6 col-md-3"
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
        getProductos() {
            return this.getDestacados
        },
        ...mapGetters(['getDestacados'])
    },
    components: {
        'product-card': ProductCard
    },
    methods: {
        getType(id) {
            var type = 's'
            var digit = id.toString()[0]
            switch (digit) {
                case '1':
                    type = 'mugs'
                    break
                case '2':
                    type = 'tshirts'
                    break
                case '3':
                    type = 'bags'
                    break
            }
            return type
        },
        collectionsVisible(e) {
            console.log('aaaa')
            if (e.type == 'enter') {
                const vm = this
                vm.show = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/animations.scss';

.featured {
    margin-top: 60px;
    h3 {
        font-family: $title;
        padding: 20px 0;
    }
    .trigger-animation {
        height: 1px;
        width: 1px;
    }
}
</style>
