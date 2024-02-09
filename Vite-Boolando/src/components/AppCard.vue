<script>
    export default {
        props: {
            frontImg: String,
            retroImg: String,
            brand: String,
            name: String,
            price: Number,
            spin: Boolean,
            favourite: Boolean,
        },
    }

</script>

<template>
    <div class="card">
        <div class="box-img">
            <img @mouseover="spin = true" @mouseleave="spin = false" :src="frontImg" :class="spin == true ? 'none' : 'spin'">
            <img @mouseover="spin = true" @mouseleave="spin = false" :src="retroImg" :class="spin == true ? 'spin' : 'none'">
        </div>
        <div class="box-text">
            <div class="brand">{{ brand }}</div>
            <div class="name">{{ name }}</div>
            <div class="price">{{ price }}</div>
        </div>
        <div @click="favourite = !favourite" class="heart">
            <div><i class="fa-solid fa-heart" :class="favourite == true ? 'favourite' : ''"></i></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        width: calc(100% / 3 - 10px);
        border-radius: 10px;
        overflow: hidden;
        position: relative;

        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        .none {
            display: none;
        }

        .spin {
            display: block;
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
        }

        .badge {
            position: absolute;
            bottom: 7rem;
            color: white;
            padding: 3px;
        }

        .tag {
            left: 2rem;
            background-color: green;
        }

        .discount {
            background-color: red;
        }

        .heart {
            background-color: white;
            padding: 10px;
            position: absolute;
            top: 1rem;
            right: 0;

            &:hover i{
                color: red;
            }
        }

        .favourite {
            color: red;
        }
    }
</style>