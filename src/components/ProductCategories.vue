<template>
    <div class="categories" :class="{ 'cat-fixed': isFixed }">
        <h5>Categories</h5>
        <div class="bar d-none d-md-block">
            <div
                :class="['category', { highlight: selectedCategoria == -1 }]"
                @click="seleccionarCategoria(-1)"
            >
                All
            </div>
            <div
                :class="[
                    'category',
                    { highlight: selectedCategoria == categoria.id }
                ]"
                v-for="(categoria, index) in getCategorias"
                :key="index"
                @click="seleccionarCategoria(categoria.id)"
            >
                {{ categoria.nombre }}
            </div>
        </div>
        <div class="dropdown d-block d-md-none">
            <select
                v-model="selectedOption"
                @change="seleccionarCategoria(selectedOption)"
            >
                <option disabled value="">Please select one</option>
                <option value="-1">Show All</option>
                <option
                    v-for="(categoria, index) in getCategorias"
                    :key="index"
                    :value="categoria.id"
                    >{{ categoria.nombre }}</option
                >
            </select>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus } from '@/main.js'

export default {
    data() {
        return {
            selectedCategoria: null,
            isFixed: false,
            selectedOption: ''
        }
    },
    props: {
        type: String
    },
    state: {},
    computed: {
        ...mapGetters(['getCategorias'])
    },
    methods: {
        seleccionarCategoria(index) {
            if (index == -1) {
                this.selectedCategoria = -1
                if (this.type == 'mugs') {
                    this.$store.dispatch('filterTazas')
                } else if (this.type == 'tshirts') {
                    this.$store.dispatch('filterCamisetas')
                } else {
                    this.$store.dispatch('filterBolsas')
                }
            } else {
                this.selectedCategoria = index
                if (this.type == 'mugs') {
                    this.$store.dispatch('filterTazas', index)
                } else if (this.type == 'tshirts') {
                    this.$store.dispatch('filterCamisetas', index)
                } else {
                    this.$store.dispatch('filterBolsas', index)
                }
            }
        }
    },
    watch: {
        $route() {
            this.mostrarTodo()
        }
    },
    created() {
        EventBus.$on('logo-entered', () => {
            this.isFixed = true
        })
        EventBus.$on('logo-exit', () => {
            this.isFixed = false
        })
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.cat-fixed {
    @media (min-width: 768px) {
        position: fixed;
        top: 25px;
    }
}
.categories {
    h5 {
        text-align: left;
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 21px;
        font-family: $title;
    }

    .dropdown {
        margin-bottom: 20px;
        select {
            background: white;
            background-image: url('../assets/arrow.png');
            background-size: 20px 20px;
            background-position: center;
            background-repeat: no-repeat;
            background-position-x: 98%;
            padding: 0 10px;
            -webkit-appearance: none;
            float: left;
            margin-bottom: 30px;
            border: 1px solid $aqua;
            height: 35px;
            width: 100%;
            &:focus {
                outline-color: $aqua;
            }
        }
    }

    .bar {
        .category {
            text-align: left;
            padding: 8px;
            margin: 3px 0;
            font-size: 15px;
            transition: margin 0.3s;
            cursor: pointer;

            &:hover {
                color: $blue;
                margin-left: 10px;
                transition: margin 0.3s;
            }
        }
        .highlight {
            color: $blue;
        }
    }
}
</style>
