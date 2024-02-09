<script>
    export default {
        data() {
            return {
                footer: {
                    footerTitle: 'Boolando s.r.l.',
                    infos: [
                        'Informazioni legali',
                        'Informativa sulla privacy',
                        'Diritto di recesso',
                    ]
                }
            }
        }
    }

</script>

<template>

    <footer>

        <div class="footer-container">
            <div>
                <h5>{{ footer.footerTitle }}</h5>
                <ul>
                    <li v-for="info in footer.infos"><a href="#">{{ info }}</a></li>
                </ul>
            </div>
            <div></div>
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
    color: white;
    font-weight: bold;
    height: 60px;
    @include align('between');

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
}

</style>