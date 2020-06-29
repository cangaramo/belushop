<template>
    <div>
        <h1 class="mb-4">Nueva taza</h1>
        <form>
            <div class="form-field">
                <input type="text" v-model="taza.title" placeholder="Titulo" />
            </div>
            <div class="form-field">
                <input
                    type="text"
                    v-model="taza.description"
                    placeholder="Descripcion"
                />
            </div>
            <div class="form-field">
                <input
                    type="number"
                    v-model.number="taza.price"
                    placeholder="Precio"
                />
            </div>
            <div class="form-field">
                <select v-model="taza.categoria">
                    <option value="-1">Seleccionar categoria</option>
                    <option value="0">Funny messages</option>
                    <option value="1">TV shows and movies</option>
                    <option value="2">Birthday</option>
                    <option value="3">Feminism</option>
                    <option value="4">Environmentalism</option>
                </select>
            </div>
            <div class="form-field">
                <input
                    type="submit"
                    value="Añadir"
                    @click.prevent="anadirTaza()"
                />
            </div>
        </form>

        <p v-show="anadida" class="my-4 ver-taza">
            Taza añadida con exito. <a @click="verTaza()">Ver taza</a>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            anadida: false,
            taza: {
                title: '',
                description: '',
                price: null,
                categoria: '-1',
                thumbnail:
                    'https://www.js-law.co.uk/wp-content/themes/jslaw-theme/img/placeholder-image.jpg',
                image:
                    'https://www.js-law.co.uk/wp-content/themes/jslaw-theme/img/placeholder-image.jpg'
            }
        }
    },
    methods: {
        anadirTaza() {
            this.taza.id = this.getTazas.length + 1
            const nueva_taza = this.taza
            this.$store.dispatch('anadirTaza', nueva_taza)
            this.anadida = true
        },
        verTaza() {
            this.$router.push({ name: 'taza', params: { id: this.taza.id } })
        }
    },
    computed: {
        ...mapGetters(['getTazas'])
    }
}
</script>

<style lang="scss">
.ver-taza a,
.ver-taza a:hover {
    color: #42b983;
    cursor: pointer;
}

.form-field {
    margin: 15px 0;
    width: 100%;

    input {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;

        &:focus {
            outline: none;
        }
    }

    select {
        height: 35px;
        border-radius: 5px;
        border: 1px solid #e0e0e0;

        &:focus {
            outline: none;
        }
    }

    input,
    select {
        width: 50%;
    }

    input[type='submit'] {
        margin-top: 10px;
        background: #42b983;
        color: white;
    }
}
</style>
