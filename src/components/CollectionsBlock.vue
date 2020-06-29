<template>
    <div class="collections container" v-view.once="collectionsVisible">
        <h3>Collections</h3>
        <transition name="faderight">
            <div class="animate-collections row" v-if="show">
                <div class="col-md-4 px-2 mb-2">
                    <div class="collection-wrapper">
                        <router-link to="collection/mugs">
                            <div
                                class="collection-item"
                                :style="{ backgroundImage: `url(${image1})` }"
                                style="background-image:url('')"
                            >
                                <div>
                                    <h3>Mugs</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-4 px-2 mb-2">
                    <div class="collection-wrapper">
                        <router-link to="collection/tshirts">
                            <div
                                class="collection-item"
                                :style="{ backgroundImage: `url(${image2})` }"
                            >
                                <div>
                                    <h3>T-shirts</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-4 px-2 mb-2">
                    <div class="collection-wrapper">
                        <router-link to="collection/bags">
                            <div
                                class="collection-item"
                                :style="{ backgroundImage: `url(${image3})` }"
                            >
                                <div>
                                    <h3>Tote bags</h3>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            image1:
                'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
            image2:
                'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            image3:
                'https://images.unsplash.com/photo-1572966059657-6e8910c8c3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
        }
    },
    methods: {
        collectionsVisible(e) {
            if (e.type == 'enter') {
                const vm = this
                vm.show = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
@import '@/scss/animations.scss';

.collections {
    h3 {
        font-family: $title;
        padding-bottom: 20px;
    }

    .collection-wrapper {
        overflow: hidden;
        .collection-item {
            width: 100%;
            height: 400px;
            background-position: center;
            background-size: cover;
            position: relative;
            transform: scale(1);
            transition: transform 0.3s;

            h3 {
                transform: scale(1);
                transition: transform 0.3s;
            }

            &:hover {
                transform: scale(1.1);
                transition: transform 0.3s;

                h3 {
                    transform: scale(1.25);
                    transition: transform 0.3s;
                }
            }

            div {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.1);
                h3 {
                    color: white;
                }
            }
        }
    }
}
</style>
