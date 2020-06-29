import EventService from '../services/EventService'

export const state = {
    tazas: [],
    filtered_tazas: []
}

export const getters = {
    getTazas: state => {
        return state.tazas
    },
    getTazaById: state => id => {
        const taza = state.tazas.filter(taza => taza.id == id)[0]
        return taza
    },
    getFilteredTazas: state => {
        return state.filtered_tazas
    }
}

export const mutations = {
    INIT_TAZAS(state, tazas) {
        state.tazas = tazas
        state.filtered_tazas = tazas
    },
    FILTER_TAZAS(state, cat_id) {
        if (cat_id !== undefined) {
            state.filtered_tazas = state.tazas.filter(
                taza => taza.category == cat_id
            )
        } else {
            state.filtered_tazas = state.tazas
        }
    },
    ANADIR_TAZA(state, taza) {
        state.tazas.push(taza)
    }
}

export const actions = {
    filterTazas({ commit }, cat_id) {
        commit('FILTER_TAZAS', cat_id)
    },
    // eslint-disable-next-line no-unused-vars
    anadirTaza({ commit }, taza) {
        EventService.postTaza(taza)
            .then(() => {
                commit('ANADIR_TAZA', taza)
            })
            .catch(error => {
                console.log(error)
                alert('Error trying to add taza' + error)
            })
    },
    fetchTazas({ commit }) {
        EventService.fetchTazas()
            .then(response => {
                commit('INIT_TAZAS', response.data)
            })
            .catch(error => {
                alert('Error fecthing data ' + error)
            })
    }
}
