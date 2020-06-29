<template>
    <div div style="display: contents">
        <router-link
            :to="{
                name: 'collection',
                params: { type: 'mugs' }
            }"
            >Mugs</router-link
        >
        <router-link
            :to="{
                name: 'collection',
                params: { type: 'tshirts' }
            }"
            >T-shirts</router-link
        >
        <router-link
            :to="{
                name: 'collection',
                params: { type: 'bags' }
            }"
            >Bags</router-link
        >
    </div>
</template>

<script>
export default {}
</script>

<style></style>
