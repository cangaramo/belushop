<template>
    <div class="administrar container">
        <h2 class="mb-4">Administrar tienda</h2>
        <div class="row">
            <div class="opciones col-3">
                <router-link to="/administrar/anadir"
                    >Añadir nueva taza</router-link
                >
                <a>Opcion B</a>
                <a>Opcion C</a>
                <a>Opcion D</a>
            </div>
            <div class="col-9 px-5">
                <transition name="slide" mode="in-out">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

@keyframes slideOutDown {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        visibility: hidden;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
}

.slide-enter,.slide-leave-to {
    opacity: 0;
}

.slide-enter-active {
    animation: slideInUp 0.5s forwards;
}

.slide-leave-active {
    animation: slideOutDown 0.5s forwards;
}

.administrar {
    text-align: left;

    .opciones {
        background: #f5f5f5;
        height: 500px;
        padding: 20px 30px;
        border-radius: 5px;

        a {
            color: #2c3e50;
            display: block;
            margin: 20px 0;
            font-weight: bold;
        }
    }
}
</style>
