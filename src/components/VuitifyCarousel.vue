<template>


    <v-carousel hide-delimiters cycle>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
    </v-carousel>

</template>

<script>
export default {
    name: 'VuitifyCarousel',
    data() {
        return {
            items: [
                {
                    src: 'images/carousel/assortment.jpg',
                    alt: 'Assortment of Donuts'
                },
                {
                    src: 'images/carousel/assortment2.jpg',
                    alt: 'Assortment of Donuts'
                },
                {
                    src: 'images/carousel/christmas.jpg',
                    alt: 'Christmas of Donuts'
                },
                {
                    src: 'images/carousel/easter.jpg',
                    alt: 'Easter of Donuts'
                },
                {
                    src: 'images/carousel/valentines.jpg',
                    alt: 'Valentine\'s Day of Donuts'
                },
                {
                    src: 'images/carousel/glazed.jpg',
                    alt: 'Glazed Donuts'
                },
            ]
        };
    }
};
</script>
<style scoped>
/* .v-window__controls {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
  } */
</style>