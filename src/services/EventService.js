import axios from 'axios'
axios.defaults.baseURL = 'https://nuevoproyecto-170214.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'fada'
axios.defaults.headers.get['Accepts'] = 'application/json'

export default {
    fetchTazas() {
        //return axios.get('http://localhost:3000/tazas')
        return axios.get('/tazas.json')
    },
    // postTaza(taza) {
    //     //return axios.post('http://localhost:3000/tazas', taza)
    //     return axios.post('/tazas.json', taza)
    // },
    fetchCamisetas() {
        //return axios.get('http://localhost:3000/camisetas')
        return axios.get('/camisetas.json')
    },
    fetchBolsas() {
        //return axios.get('http://localhost:3000/bolsas')
        return axios.get('/bolsas.json')
    }
}
