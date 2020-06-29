<template>
    <div :class="col" class="product">
        <router-link
            tag="div"
            :to="{ name: 'product', params: { type: type, id: prod.id } }"
        >
            <div class="thumbnail-wrapper">
                <div
                    class="thumbnail"
                    :style="{ backgroundImage: `url(${prod.image})` }"
                ></div>
            </div>
            <h5>{{ prod.title }}</h5>
            <p class="price">£{{ prod.price }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        prod: Object,
        type: String,
        col: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
.product {
    text-align: left;
    margin-bottom: 40px;
    cursor: pointer;
    .thumbnail-wrapper {
        overflow: hidden;
        .thumbnail {
            height: 350px;
            @media (min-width: 576px) {
                height: 240px;
            }
            width: 100%;
            background-position: bottom;
            background-size: cover;
            transform: scale(1);
            transition: transform 0.3s;
        }
    }
    h5 {
        margin-top: 14px;
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 17px;
        letter-spacing: 0.3px;
        font-family: $title;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price {
        font-weight: 400;
    }

    &:hover {
        .thumbnail {
            transform: scale(1.1);
            transition: transform 0.3s;
        }
    }
}
</style>
