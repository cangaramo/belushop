<template>
    <div class="nav-bar">
        <div class="container" v-view="logoViewport">
            <!-- Mobile -->
            <div class="d-block d-md-none">
                <div class="row">
                    <div class="col-4">
                        <router-link :to="{ name: 'home' }">
                            <img
                                class="logo"
                                src="@/assets/logo-transparent.png"
                            />
                        </router-link>
                    </div>
                    <div class="col-8">
                        <div class="d-flex float-right pt-4">
                            <button class="open-search" @click="showSearchBar">
                                <i class="fas fa-search"></i>
                            </button>
                            <button class="open-menu" @click="openMenu">
                                <img src="@/assets/menu-aqua.png" />
                            </button>
                        </div>
                    </div>
                </div>
                <div v-show="showSearch" class="w-100 mt-5">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <input @input="search" v-model="term" type="text" placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
            <!-- Desktop menu -->
            <div class="d-none d-md-block">
                <div class="row">
                    <div class="col-4 col-lg-3 px-0">
                        <router-link :to="{ name: 'home' }">
                            <!-- eslint-disable-next-line prettier/prettier -->
                            <img class="logo" src="@/assets/logo-transparent.png" 
                            />
                        </router-link>
                    </div>
                    <div class="col-4 pr-0">
                        <div class="nav px-2">
                            <collections></collections>
                        </div>
                    </div>
                    <div class="col-4 col-lg-5 pl-0">
                        <div class="nav float-right">
                            <div class="search-box">
                                <i class="fas fa-search"></i>
                                <!-- eslint-disable-next-line prettier/prettier -->
                                <input @input="search" v-model="term" type="text" placeholder="Search..."
                                />
                            </div>
                            <router-link class="mr-0" :to="{ name: 'contact' }"
                                >Contact</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <transition
            name="fade"
            v-on:after-enter="afterEnter"
            v-on:after-leave="afterLeave"
        >
            <div v-show="blockScroll" class="mobile-menu">
                <div class="container">
                    <button class="close-menu pt-4" @click="closeMenu">
                        <img src="@/assets/close-white.png" />
                    </button>
                </div>
                <transition name="upshort">
                    <div class="container" v-if="showContent">
                        <img class="logo" src="@/assets/logo-transparent.png" />
                        <div class="mt-5">
                            <div class="nav">
                                <collections></collections>
                                <router-link :to="{ name: 'contact' }"
                                    >Contact</router-link
                                >
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
import { EventBus } from '@/main.js'
import CollectionsLinks from '@/components/CollectionsLinks'

export default {
    data() {
        return {
            term: '',
            blockScroll: false,
            showContent: false,
            showSearch: false
        }
    },
    components: {
        collections: CollectionsLinks
    },
    methods: {
        logoViewport(e) {
            if (e.type == 'exit') {
                EventBus.$emit('logo-entered')
            } else if (e.type == 'enter') {
                EventBus.$emit('logo-exit')
            }
        },
        search() {
            const path = '/search?term=' + this.term
            this.$router.push(path)
        },
        showSearchBar() {
            this.showSearch = !this.showSearch
        },
        openMenu() {
            EventBus.$emit('block-scroll')
            this.blockScroll = true
        },
        closeMenu() {
            EventBus.$emit('unblock-scroll')
            this.blockScroll = false
        },
        afterEnter: function() {
            this.showContent = true
        },
        afterLeave: function() {
            this.showContent = false
        }
    },
    created() {
        EventBus.$on('close-menu', () => {
            if (this.blockScroll) {
                this.closeMenu()
            }
        })
        EventBus.$on('clear-search', () => {
            if (this.showSearch) {
                this.showSearch = false
            }
            this.term = ''
        })
    }
}
</script>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/animations.scss';

.mobile-menu {
    position: absolute;
    top: 0;
    background: $aqua;
    width: 100%;
    height: 100vh;
    z-index: 3;
    text-align: left;
    padding-top: 15px;

    .nav {
        padding-left: 15px;
    }
}

.nav-bar {
    padding: 15px 0;
    .logo {
        height: 100px;
    }
    .close-menu,
    .open-menu {
        float: right;
        background: none;
        border: none;
        &:focus {
            outline: none;
        }
    }
    .open-menu {
        img {
            height: 30px;
            width: 30px;
        }
    }
    .close-menu {
        img {
            height: 20px;
            width: 20px;
        }
    }
    .fa-search {
        color: $aqua;
        margin-right: 10px;
    }
    .open-search {
        background: white;
        border: none;
        padding-top: 4px;
        .fas {
            font-size: 17px;
        }
        &:focus {
            outline: none;
        }
    }
    .search-box {
        border: none;
        border-bottom: 1px solid #dcf0f1;
        margin-right: 30px;
        position: relative;
        top: -6px;
        padding-bottom: 4px;
        input {
            border: none;
            width: calc(100% - 50px);
            @media (min-width: 768px) {
                width: 100px;
            }
            @media (min-width: 992px) {
                width: 200px;
            }
            &:focus {
                outline: none;
            }
        }
        &:focus-within {
            box-shadow: 0 4px 3px -3px $aqua;
        }
    }
    .nav {
        display: flex;
        flex-direction: column;
        @media (min-width: 768px) {
            padding-top: 40px;
            flex-direction: row;
        }
        a {
            text-decoration: none;
            color: $dark;
            font-size: 23px;
            margin-bottom: 30px;
            width: fit-content;
            border-bottom: 2px solid transparent;
            padding-bottom: 6px;
            &:hover {
                border-bottom: 2px solid white;
                transition: border 0.3s;
            }
            @media (min-width: 768px) {
                font-size: 16px;
                display: block;
                margin-bottom: 0;
                margin-top: 0;
                margin-right: 20px;
                font-weight: bold;
                padding-bottom: 3px;
                border-bottom: 2px solid white;
                transition: margin-top 0.3s;
                &:hover {
                    border-bottom: 2px solid $aqua;
                    margin-top: -6px;
                    transition: all 0.3s;
                }
                &.router-link-exact-active {
                    border-bottom: 2px solid $aqua;
                }
                &.router-link-active {
                    border-bottom: 2px solid $aqua;
                }
            }
            @media (min-width: 992px) {
                margin-right: 46px;
            }
        }
    }
}
</style>
