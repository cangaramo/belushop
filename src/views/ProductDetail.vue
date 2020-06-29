<template>
    <div class="productDetail container">
        <div class="breadcrumbs">
            <router-link class="back" to="/">Home</router-link>
            <i class="arrow-back fas fa-angle-left"></i>
            <router-link class="back" :to="back">{{ getTitle }}</router-link>
        </div>
        <div class="row mt-3">
            <div class="col-sm-6 pr-sm-5 order-last order-sm-first">
                <img :src="product.image" />
            </div>
            <div class="col-sm-6 my-4 my-sm-0">
                <h3>{{ product.title }}</h3>
                <h4 class="my-3">£{{ product.price }}</h4>
                <div class="description" v-html="product.description"></div>
                <a :href="product.url" target="_blank">
                    <button class="cool-button">Buy</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            id: null,
            type: null
        }
    },
    created() {
        this.id = this.$route.params['id']
        this.type = this.$route.params['type']
    },
    computed: {
        back() {
            return '/collection/' + this.type
        },
        product() {
            if (this.type == 'mugs') {
                return this.getTazaById(this.id)
            } else if (this.type == 'tshirts') {
                return this.getCamisetaById(this.id)
            } else {
                return this.getBolsaById(this.id)
            }
        },
        getTitle() {
            if (this.type == 'mugs') {
                return 'Mugs'
            } else if (this.type == 'tshirts') {
                return 'T-shirts'
            } else {
                return 'Bags'
            }
        },
        ...mapGetters(['getTazaById', 'getCamisetaById', 'getBolsaById'])
    }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/global.scss';

.productDetail {
    text-align: left;
    img {
        width: 100%;
    }
    h3 {
        font-weight: bold;
        font-family: $title;
    }
    .cool-button {
        margin-top: 10px;
    }

    .description {
        margin-top: 25px;
        margin-bottom: 15px;
        p {
            margin-bottom: 4px;
        }
    }
}
</style>
