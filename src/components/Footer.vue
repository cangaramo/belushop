<template>
    <div class="footer">
        <div class="container py-5">
            <div class="row">
                <div class="col-xs-6 col-sm-3 mb-5 mb-sm-0">
                    <div class="nav-footer text-left">
                        <p class="section-title">Collections</p>
                        <router-link to="/collection/mugs">Mugs</router-link>
                        <!-- eslint-disable-next-line prettier/prettier -->
                        <router-link to="/collection/tshirts">T-shirts</router-link>
                        <router-link to="collection/bags">Bags</router-link>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 mb-5 mb-sm-0">
                    <div class="nav-footer text-left">
                        <p class="section-title">Our shops</p>
                        <a
                            href="https://www.etsy.com/uk/shop/TheBeluShop"
                            target="_blank"
                            >Etsy</a
                        >
                        <a
                            href="https://www.tostadora.co.uk/belushop/"
                            target="_blank"
                            >La Tostadora</a
                        >
                        <a
                            href="https://teespring.com/stores/the-belu-shop"
                            target="_blank"
                            >Teespring</a
                        >
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 mb-5 mb-sm-0">
                    <div class="nav-footer text-left">
                        <p class="section-title">Contact</p>
                        <a href="mailto:belushop.contact@gmail.com"
                            ><i class="far fa-envelope"></i>Email us</a
                        >
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3">
                    <div class="nav-footer text-left">
                        <p class="section-title">Social</p>
                        <a
                            target="_blank"
                            href="https://www.etsy.com/uk/shop/TheBeluShop"
                            ><i class="fab fa-instagram"></i> Instagram</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';
.footer {
    background: #dcf0f1;

    .nav-footer {
        display: flex;
        flex-direction: column;

        .section-title {
            font-family: $title;
            font-size: 17px;
        }
        a {
            margin: 7px 0;
            color: $dark;
            font-size: 14px;
            &:hover {
                text-decoration: none;
                font-weight: 700;
                transition: all 0.2s;
            }
        }
        .fa-instagram {
            font-size: 20px;
            margin-right: 7px;
            vertical-align: sub;
        }
        .fa-envelope {
            font-size: 18px;
            margin-right: 8px;
            vertical-align: middle;
        }
    }
}
</style>
