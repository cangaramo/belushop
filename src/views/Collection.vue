<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <categories :type="type"></categories>
            </div>
            <div class="col-md-9">
                <products :type="type"></products>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductsView from '../components/ProductsView'
import ProductCategories from '../components/ProductCategories'

export default {
    state: {},
    props: {
        type: String
    },
    computed: {
        ...mapGetters(['getCategorias'])
    },
    components: {
        products: ProductsView,
        categories: ProductCategories
    }
}
</script>

<style></style>
