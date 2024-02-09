<script>
    export default {
        props: {
            footer: Object,
            footerTitle: String,
            infos: Array,
            socialText: String,
            socialIcons: Array,
        }
    }

</script>

<template>

    <footer>

        <div class="container footer-container">
            <div>
                <h5>{{ footer.footerTitle }}</h5>
                <ul>
                    <li v-for="info in footer.infos"><a href="#">{{ info }}</a></li>
                </ul>
            </div>
            <div>
                <h5>{{ footer.socialText }}</h5>
                <ul>
                    <li v-for="socialIcon in footer.socialIcons"><i :class="socialIcon"></i></li>
                </ul>
            </div>
        </div>

    </footer>

</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

    footer {
    background-color: black;
    box-shadow: 0px 0px 3px 0px;
}

.footer-container {
    padding: 0 2rem;
    color: white;
    font-weight: bold;
    height: 60px;
    @include align('between');

    div {
        margin: 0;
    }

    li {
        margin: 0 5px;

        a {
            font-size: 10px;
            text-decoration: none;
            color: white;

            &:hover {
                opacity: 0.8;
            }
        }
    }

    i:hover {
        cursor: pointer;
        opacity: 0.8;
    }
}

</style>