<script>
    import AppCard from './AppCard.vue'
    export default {
        data() {
            return {
                cards: [
                    {
                    name: 'RELAXED FIT TEE UNISEX',
                    brand: 'Levis',
                    price: 29.99,
                    isInFavourite: true,
                    images:
                        {
                        front: '1.webp',
                        retro: '1b.webp',
                        },
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                    },
                    {
                    name: 'ROSES TEE',
                    brand: 'Guess',
                    price: 29.99,
                    isInFavourite: false,
                    images:
                        {
                        front: '2.webp',
                        retro: '2b.webp',
                        },
                    badges: [
                        {
                            type: 'discount',
                            value: '-30%',
                        },
                    ],
                    },
                    {
                    name: 'VOGLIA DI COLORI PASTELLO',
                    brand: 'Come zucchero filato',
                    price: 18.99,
                    isInFavourite: true,
                    images:
                        {
                        front: '3.webp',
                        retro: '3b.webp',
                        },
                    badges: [
                        {
                            type: 'discount',
                            value: '-30%',
                        },
                    ],
                    },
                    {
                    name: 'TEE UNISEX',
                    brand: 'Levis',
                    price: 29.99,
                    isInFavourite: false,
                    images:
                        {
                        front: '4.webp',
                        retro: '4b.webp',
                        },
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                    },
                    {
                    name: 'STRIPE BODICE',
                    brand: 'Maya Deluxe',
                    price: 99.99,
                    isInFavourite: false,
                    images:
                        {
                        front: '5.webp',
                        retro: '5b.webp',
                        },
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                        {
                            type: 'discount',
                            value: '-50%',
                        },
                    ],
                    },
                    {
                    name: 'MAGLIONE - BLACK',
                    brand: 'Esprit',
                    price: 29.99,
                    isInFavourite: false,
                    images:
                        {
                        front: '6.webp',
                        retro: '6b.webp',
                        },
                    badges: [
                        {
                            type: 'tag',
                            value: 'Sostenibilità',
                        },
                    ],
                    },
                ],

                spin: false,
            }
        },

        components: { AppCard },

        methods: {
            buildImagePath(imageName) {
                return new URL('../assets/img/' + imageName, import.meta.url).href;
            },
        }
    }

</script>

<template>
    <main>
        <div class="container main-container">
            <AppCard 
                v-for="card in cards" 
                :frontImg="buildImagePath(card.images.front)"
                :retroImg="buildImagePath(card.images.retro)"
                :spin="card.spin"
                :brand="card.brand"
                :name="card.name"
                :price="card.price"
                :favourite="card.isInFavourite"
            >
            </AppCard>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

    .main-container {
        padding: 2rem;
        @include align('default');
        flex-wrap: wrap;
        gap: 10px;
    }
</style>