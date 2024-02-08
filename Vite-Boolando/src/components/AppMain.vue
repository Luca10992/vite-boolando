<script>
    export default {
        data() {
            return {
                cards: [
                    {
                    name: 'RELAXED FIT TEE UNISEX',
                    brand: 'Levis',
                    price: 29.99,
                    sale: 50,
                    images:
                        {
                        front: '1.webp',
                        retro: '1b.webp',
                        }
                    },
                    {
                    name: 'ROSES TEE',
                    brand: 'Guess',
                    price: 29.99,
                    sale: 50,
                    images:
                        {
                        front: '2.webp',
                        retro: '2b.webp',
                        }
                    },
                    {
                    name: 'VOGLIA DI COLORI PASTELLO',
                    brand: 'Come zucchero filato',
                    price: 18.99,
                    sale: 20,
                    images:
                        {
                        front: '3.webp',
                        retro: '3b.webp',
                        }
                    },
                    {
                    name: 'TEE UNISEX',
                    brand: 'Levis',
                    price: 29.99,
                    sale: 30,
                    images:
                        {
                        front: '4.webp',
                        retro: '4b.webp',
                        }
                    },
                    {
                    name: 'STRIPE BODICE',
                    brand: 'Maya Deluxe',
                    price: 99.99,
                    sale: 50,
                    images:
                        {
                        front: '5.webp',
                        retro: '5b.webp',
                        }
                    },
                    {
                    name: 'MAGLIONE - BLACK',
                    brand: 'Esprit',
                    price: 29.99,
                    sale: 30,
                    images:
                        {
                        front: '6.webp',
                        retro: '6b.webp',
                        },
                    },
                ],
            }
        },

        methods: {
            buildImagePath(imageName) {
                return new URL('../assets/img/' + imageName, import.meta.url).href;
            }
        }
    }

</script>

<template>

    <main>

        <div class="container main-container">
            <div v-for="card in cards" class="card">
                <div class="box-img">
                    <img :src="buildImagePath(card.images.front)" alt="">
                </div>
                <div class="box-text">
                    <div class="brand">{{ card.brand }}</div>
                    <div class="name">{{ card.name }}</div>
                    <div class="price">{{ card.price + ' €' }}</div>
                </div>
            </div>
        </div>

    </main>

</template>

<style lang="scss">
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

    .main-container {
        padding: 2rem;
        @include align('default');
        flex-wrap: wrap;
        gap: 10px;
        
        .card {
            width: calc(100% / 3 - 10px);
            border-radius: 10px;
            overflow: hidden;

            &:hover {
                border: 2px solid #ff6900;
                cursor: pointer;
            }
        }

        img {
            width: 100%;
        }

        .box-text {
            border-radius: 0 0 10px 10px;
            padding: 5px;

            .brand {
                font-size: 13px;
            }

            .name {
                font-weight: bold;
            }

            .price {

            }
        }
    }




</style>