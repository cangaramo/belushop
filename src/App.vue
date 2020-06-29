<template>
    <div id="app" :class="{ noscroll: blockScroll }">
        <!--
        <vue-scroll-progress-bar
            @complete="handleComplete"
            height="2px"
            backgroundColor="#87cecc"
        /> -->
        <nav-bar></nav-bar>
        <div class="content">
            <router-view :key="$route.fullPath" />
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { EventBus } from '@/main.js'

export default {
    data() {
        return {
            blockScroll: false
        }
    },
    components: {
        NavBar,
        MyFooter: Footer
    },
    created() {
        this.$store.dispatch('fetchTazas')
        this.$store.dispatch('fetchCamisetas')
        this.$store.dispatch('fetchBolsas')
        EventBus.$on('block-scroll', () => {
            this.blockScroll = true
        })
        EventBus.$on('unblock-scroll', () => {
            this.blockScroll = false
        })
    }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';

.noscroll {
    height: 100vh;
    overflow: hidden;
}

body {
    font-family: $body;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $dark;
}

.content {
    padding-top: 25px;
    padding-bottom: 50px;
}

@media (min-width: 576px) and (max-width: 768px) {
    .container {
        max-width: 640px;
    }
}

@media (min-width: 768px) and (max-width: 992px) {
    .container {
        max-width: 770px;
    }
}
</style>
