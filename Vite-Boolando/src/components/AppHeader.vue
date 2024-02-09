<script>
  export default {
        props: {
            logo: String,
            categories: Array,
            icons: Array,
        },

        methods: {
            buildImagePath(imageName) {
                return new URL('../assets/img/' + imageName, import.meta.url).href;
            }
        }
    }

</script>

<template>

    <header>

        <div class="container header-container">
            <div>
                <ul>
                    <li v-for="category in categories">{{ category }}</li>
                </ul>
            </div>
            <div class="logo-box">
                <img :src="buildImagePath(logo)" alt="logo">
            </div>
            <div>
                <ul>
                    <li v-for="icon in icons"><i :class="icon"></i></li>
                </ul>
            </div>
        </div>

    </header>

</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    background-color: #ff6900;
    box-shadow: 0px 0px 1px 0px;
}

.header-container {
    color: white;
    font-weight: bold;
    height: 60px;
    @include align('between');

        li {
            cursor: pointer;
            margin: 0 10px;
        }

        li:hover {
            color: rgba(255, 255, 255, 0.8);
        }

        .logo-box {
            text-align: center;
        }

        img {
            width: 20%;
        }
}
</style>