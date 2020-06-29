import Vue from 'vue'
import VueRouter from 'vue-router'
import Collection from '../views/Collection.vue'
import Administrador from '../views/Administrador'
import ProductDetail from '../views/ProductDetail'
import AnadirTaza from '../views/AnadirTaza'
import Home from '../views/Home'
import Contact from '../views/Contact'
import Search from '../views/Search'
import { EventBus } from '@/main.js'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/collection/:type',
        name: 'collection',
        component: Collection,
        props: true
    },
    {
        path: '/administrar',
        name: 'administrar',
        component: Administrador,
        children: [
            {
                path: '/administrar/anadir',
                name: 'anadir',
                component: AnadirTaza
            }
        ]
    },
    {
        path: '/:type/product/:id',
        name: 'product',
        component: ProductDetail
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    EventBus.$emit('close-menu')
    if (from.name == 'search' && to.name != 'search') {
        EventBus.$emit('clear-search')
        next()
    } else {
        next()
    }
})

export default router
