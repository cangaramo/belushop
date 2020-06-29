import Vue from 'vue'
import Vuex from 'vuex'
import * as Camisetas from './camisetas'
import * as Tazas from './tazas'
import * as Bolsas from './bolsas'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            nombre: 'Clarisa'
        },
        categorias: [
            {
                nombre: 'Funny messages',
                id: 0
            },
            {
                nombre: 'TV shows and movies',
                id: 1
            },
            {
                nombre: 'Birthday',
                id: 2
            },
            {
                nombre: 'Feminism',
                id: 3
            },
            {
                nombre: 'Activism',
                id: 4
            },
            {
                nombre: 'LGBT',
                id: 5
            }
        ],
        destacados: [
            {
                title: "Words can't express how much you bean to me",
                id: 101,
                price: 10.99,
                stock: 10,
                description: 'Cute mag. Dishwasher & microwave safe.',
                categoria: 0,
                thumbnail:
                    'https://i.etsystatic.com/22786990/d/il/10f8da/2251887274/il_340x270.2251887274_eyhf.jpg?version=0',
                image:
                    'https://i.etsystatic.com/22786990/r/il/10f8da/2251887274/il_1588xN.2251887274_eyhf.jpg'
            },
            {
                title: 'Act now or swim later',
                id: 204,
                price: 25.0,
                stock: 10,
                description:
                    'Regular fit t-shirt but perfectly adapted to the female figure.',
                categoria: 4,
                thumbnail:
                    'https://vangogh.teespring.com/v3/image/rwCyaasZzAAX_kocNODi8U_OsBE/480/560.jpg',
                image:
                    'https://vangogh.teespring.com/v3/image/rwCyaasZzAAX_kocNODi8U_OsBE/480/560.jpg'
            },
            {
                title: 'Te quiero mazo',
                id: 304,
                price: 25.0,
                stock: 10,
                description: 'Tote bag.',
                categoria: 0,
                thumbnail:
                    'https://srv.latostadora.com/designall.dll/i_love_you_mallet_bag--i:13562327857480135623211;k:8d2b5e99dd3ae524c2fc7dad6c5d621e;b:f8f8f8;s:B_D1;f:f.jpg',
                image:
                    'https://srv.latostadora.com/designall.dll/i_love_you_mallet_bag--i:13562327857480135623211;k:8d2b5e99dd3ae524c2fc7dad6c5d621e;b:f8f8f8;s:B_D1;f:f.jpg'
            },
            {
                title: 'Real men are feminists',
                id: 301,
                price: 25.0,
                stock: 10,
                description: 'Real men are feminists tote bag.',
                categoria: 3,
                thumbnail:
                    'https://vangogh.teespring.com/v3/image/1Vlohu9RMYlpmYx4hQkGTb0tjpg/480/560.jpg',
                image:
                    'https://vangogh.teespring.com/v3/image/1Vlohu9RMYlpmYx4hQkGTb0tjpg/480/560.jpg'
            }
        ]
    },
    getters: {
        getCategorias: state => {
            return state.categorias
        },
        getDestacados: state => {
            return state.destacados
        },
        // prettier-ignore
        searchProduct: state => term => {
            const camisetas = state.Camisetas.camisetas
            const tazas = state.Tazas.tazas
            const bolsas = state.Bolsas.bolsas
            const products = camisetas.concat(tazas).concat(bolsas)

            const result = products.filter(
                (producto) => { 
                    const plain_term = term.toLowerCase()
                    const plain_title = producto.title.toLowerCase()
                    return plain_title.includes(plain_term) 
                }
            )
            return result
        }
    },
    mutations: {},
    actions: {},
    modules: { Camisetas, Tazas, Bolsas }
})
