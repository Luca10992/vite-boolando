<script>
    export default {
        data() {
            return {
                cards: [
                    {
                    name: 'RELAXED FIT TEE UNISEX',
                    brand: 'Levis',
                    price: '29,99',
                    img: [
                        {
                        front: '1.webp',
                        retro: '1b.webp',
                        }
                    ]
                    },
                    {
                    name: 'ROSES TEE',
                    brand: 'Guess',
                    price: '29,99',
                    img: [
                        {
                        front: '2.webp',
                        retro: '2b.webp',
                        }
                    ]
                    },
                    {
                    name: 'VOGLIA DI COLORI PASTELLO',
                    brand: 'Come zucchero filato',
                    price: '184,99',
                    img: [
                        {
                        front: '3.webp',
                        retro: '3b.webp',
                        }
                    ]
                    },
                    {
                    name: 'TEE UNISEX',
                    brand: 'Levis',
                    price: '29,99',
                    img: [
                        {
                        front: '4.webp',
                        retro: '4b.webp',
                        }
                    ]
                    },
                    {
                    name: 'STRIPE BODICE',
                    brand: 'Maya Deluxe',
                    price: '99,99',
                    img: [
                        {
                        front: '5.webp',
                        retro: '5b.webp',
                        }
                    ]
                    },
                    {
                    name: 'MAGLIONE - BLACK',
                    brand: 'Esprit',
                    price: '29,99',
                    img: [
                        {
                        front: '6.webp',
                        retro: '6b.webp',
                        },
                    ]
                    },
                ],
            }
        },
    }

</script>

<template>

    <main>

        <div class="container main-container">
            <div  class="card"></div>
        </div>

    </main>

</template>

<style lang="scss">
    @use '../styles/generals.scss' as *;
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

    .main-container {
        @include align('default');
    }

    .card {
        width: calc(100% / 3);
    }

</style>