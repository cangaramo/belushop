<template>
    <div class="home">
        <div class="home-banner" :style="{ backgroundImage: `url(${path})` }">
            <transition name="fadeleft">
                <div v-if="show" class="text container">
                    <h1><span class="break">Browse our</span> products</h1>
                    <button class="cool-button">Start shopping</button>
                </div>
            </transition>
        </div>

        <collections></collections>

        <featured></featured>
    </div>
</template>

<script>
import CollectionsBlock from '../components/CollectionsBlock'
import FeaturedProducts from '../components/FeaturedProducts'

export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        path() {
            return require('../assets/bg-mugs.jpg')
        }
    },
    components: {
        collections: CollectionsBlock,
        featured: FeaturedProducts
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

.content {
    margin-top: 0;
}

.home-banner {
    width: 100%;
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;
    height: 90vh;
    @media (min-width: 768px) {
        height: calc(100vh - 130px);
    }

    .text {
        padding-top: 100px;

        @media (min-width: 768px) {
            height: calc(100vh / 4);
        }

        h1 {
            font-family: $title;
            text-align: left;

            .break {
                display: block;
                @media (min-width: 768px) {
                    display: inline;
                }
            }
        }

        .cool-button {
            float: left;
            margin-top: 20px;
        }
    }
}
</style>
