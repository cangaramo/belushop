import EventService from '../services/EventService'

export const state = {
    camisetas: [],
    filtered_camisetas: []
}

export const getters = {
    getCamisetas: state => {
        return state.camisetas
    },
    getFilteredCamisetas: state => {
        return state.filtered_camisetas
    },
    getCamisetaById: state => id => {
        const camiseta = state.camisetas.filter(
            camiseta => camiseta.id == id
        )[0]
        return camiseta
    }
}

export const mutations = {
    INIT_CAMISETAS(state, camisetas) {
        state.camisetas = camisetas
        state.filtered_camisetas = camisetas
    },
    FILTER_CAMISETAS(state, cat_id) {
        if (cat_id !== undefined) {
            state.filtered_camisetas = state.camisetas.filter(
                camiseta => camiseta.category == cat_id
            )
        } else {
            state.filtered_camisetas = state.camisetas
        }
    }
}

export const actions = {
    filterCamisetas({ commit }, cat_id) {
        commit('FILTER_CAMISETAS', cat_id)
    },
    fetchCamisetas({ commit }) {
        EventService.fetchCamisetas()
            .then(response => {
                commit('INIT_CAMISETAS', response.data)
            })
            .catch(error => {
                alert('Error fecthing data ' + error)
            })
    }
}
