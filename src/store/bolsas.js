import EventService from '../services/EventService'

export const state = {
    bolsas: [],
    filtered_bolsas: []
}

export const getters = {
    getBolsas: state => {
        return state.bolsas
    },
    getFilteredBolsas: state => {
        return state.filtered_bolsas
    },
    getBolsaById: state => id => {
        const bolsa = state.bolsas.filter(bolsa => bolsa.id == id)[0]
        return bolsa
    }
}

export const mutations = {
    INIT_BOLSAS(state, bolsas) {
        state.bolsas = bolsas
        state.filtered_bolsas = bolsas
    },
    FILTER_BOLSAS(state, cat_id) {
        if (cat_id !== undefined) {
            state.filtered_bolsas = state.bolsas.filter(
                bolsa => bolsa.category == cat_id
            )
        } else {
            state.filtered_bolsas = state.bolsas
        }
    }
}

export const actions = {
    filterBolsas({ commit }, cat_id) {
        commit('FILTER_BOLSAS', cat_id)
    },
    fetchBolsas({ commit }) {
        EventService.fetchBolsas()
            .then(response => {
                commit('INIT_BOLSAS', response.data)
            })
            .catch(error => {
                alert('Error fecthing data ' + error)
            })
    }
}
