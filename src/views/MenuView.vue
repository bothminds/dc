<script setup>
import paralaxImage from '@/assets/images/sprinkled_donuts_tray.jpg';
</script>

<template>


    <div class="justify-center items-center flex-1 flex flex-col pb-24">
        <!-- <div class="flex flex-col items-center justify-center pt-10 space-y-2">
            <h1 class="text-3xl font-bold text-center">Menu</h1>
        </div> -->

        <div class="w-100">
            <v-card class="w-full max-w-4xl mx-auto mt-10">
                <v-tabs v-model="tab" bg-color="" color="black"
                    class="text-lg bg-donut-400 dark:bg-donut-700 text-donut-900 dark:text-donut-200">
                    <v-tab value="donuts">Donuts</v-tab>
                    <v-tab value="sandwiches">Sandwiches</v-tab>
                    <v-tab value="drinks">Drinks</v-tab>
                </v-tabs>

                <v-card-text bg-color="white"
                    class="bg-[color:var(--donut-bg)] dark:bg-[color:var(--donut-bg-dark)] text-[color:var(--donut-text)] dark:text-[color:var(--donut-text-dark)]">
                    <v-tabs-window v-model="tab" bg-color="primary" color="white" class="transition-height">
                        <v-tabs-window-item value="donuts">
                            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                <li v-for="donut in donuts" :key="donut.type"
                                    class="shadow-md m-4 hover:scale-105 transition-transform">

                                    <div class="flex flex-col py-2 px-2">
                                        <div class="flex w-full text-md font-bold pb-2 justify-center text-orange-500">
                                            <span>{{ donut.name }}</span>
                                        </div>
                                        <!-- <div class="flex w-full justify-end text-sm">
                                            <span>${{ donut.price.toFixed(2) }}</span>
                                        </div> -->
                                        <div class="relative flex justify-center py-2">
                                            <img :src="getImageUrl(donut.image)" :alt="donut.type"
                                                class="h-30 w-30 rounded-2xl relative"
                                            />
                                            <span
                                                class="absolute top-2 right-2 bg-orange-400 text-white rounded-full px-3 py-1 text-sm font-bold shadow"
                                                style="transform: translate(0, 0);"
                                            >
                                                ${{ donut.price.toFixed(2) }}
                                            </span>
                                        </div>
                                        <span class="text-sm">{{ donut.description }}</span>
                                    </div>
                                </li>
                            </ul>
                        </v-tabs-window-item>

                        <v-tabs-window-item value="sandwiches">
                            <div v-for="type in sandwichTypes" :key="type">
                                <div class="text-center text-lg font-bold my-4">{{ type }} Sandwiches</div>
                                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    <li v-for="sandwich in sandwiches.filter(s => s.type === type)" :key="sandwich.name"
                                        class="shadow-md m-4 hover:scale-105 transition-transform">
                                        <div class="flex flex-col py-2 px-2 w-full">
                                        <div class="flex w-full text-md font-bold pb-2 justify-center text-orange-500">
                                                <span>{{ sandwich.name }}</span>
                                            </div>
                                            <div class="relative flex justify-center">
                                                <img :src="getImageUrl('sandwiches/' + sandwich.type.toLowerCase() + '_s.jpg')" :alt="sandwich.type"
                                                    class="h-30 w-30 rounded-2xl relative" />
                                                                                                <span
                                                class="absolute top-2 right-2 bg-orange-400 text-white rounded-full px-3 py-1 text-sm font-bold shadow"
                                                style="transform: translate(0, 0);"
                                            >
                                                ${{ sandwich.price.toFixed(2) }}
                                            </span>

                                                    
                                            </div>
                                            <span class="text-sm text-zinc-500 py-2">{{ sandwich.description
                                            }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </v-tabs-window-item>

                        <v-tabs-window-item value="drinks">
                                <ul class="space-y-4l">
                                    <li v-for="drink in drinks" :key="drink.type"
                                        class="flex justify-between mt-1 mb-2  border-b-2 border-donut-400  pb-2">
                                        <span>{{ drink.type }}</span>
                                        <span>${{ drink.price.toFixed(2) }}</span>
                                    </li>
                                </ul>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </div>
        <div v-if="tab === 'donuts'" class="absolute flex-col -z-1 top-25 w-full flex items-center justify-center overflow-hidden">
            <div class="-z-1 w-full justify-center mb-12 bg-fixed bg-center bg-cover"
                :style="{ backgroundImage: `url('${getImageUrl(bgImages.donuts[0])}')`,
                    height: drinksTabHeight * .8 + 'px'
                 }">

            </div>
            <div class=" -z-1 w-full mt-12 items-center mb-12 bg-fixed bg-center bg-cover"
                :style="{ backgroundImage: `url('${getImageUrl(bgImages.donuts[1])}')`,
                    height: drinksTabHeight * .8 + 'px'
                 }">

            </div>
        </div>
        <div v-if="tab === 'sandwiches'" class="absolute flex-col -z-1 top-25 w-full flex items-center justify-center overflow-hidden">
            <div class="-z-1 w-full justify-center mb-12 bg-fixed bg-center bg-cover"
                :style="{ backgroundImage: `url('${getImageUrl(bgImages.sandwiches[0])}')`,
                    height: drinksTabHeight * 1 + 'px'
                 }">
            </div>
        </div>
            <div v-if="tab === 'drinks'" class="absolute flex-col -z-1 top-25 w-full flex items-center justify-center overflow-hidden">
            <div
                ref="drinksTabBg"
                class="-z-1 w-full justify-center mb-12 bg-fixed bg-center"
                :style="{
                    backgroundImage: `url('${getImageUrl(bgImages.drinks[0])}')`,
                    height: drinksTabHeight * 0.7 + 'px'
                }"
            >
            </div>
            </div>
    </div>
</template>
<script>
export default {

    name: 'MenuView',
    data() {
        return {
            tab: 'donuts',
            sandwichTypes: ['Bagel', 'Croissant', 'Toast'],
            donuts: [
                {
                    "name": "Glazed Donut",
                    "price": 1.49,
                    "image": "glazed_donuts_s.jpg",
                    "description": "Soft and airy, covered in a sweet, glossy glaze that melts in your mouth."
                },
                {
                    "name": "Chocolate Frosted",
                    "price": 1.49,
                    "image": "chocolate_glaze_s.jpg",
                    "description": "Classic donut topped with smooth chocolate glaze for any chocoholic."
                },
                {
                    "name": "Boston Kreme",
                    "price": 1.49,
                    "image": "boston_kreme_s.jpg",
                    "description": "Filled with rich vanilla custard and finished with a thick chocolate glaze."
                },
                {
                    "name": "Strawberry Frosted",
                    "price": 1.49,
                    "image": "strawberry_frosted_s.jpg",
                    "description": "Light and fruity with a pink strawberry glaze."
                },
                {
                    "name": "Coconut Frosted",
                    "price": 1.49,
                    "image": "frosted_coconut_s.jpg",
                    "description": "Light and frosted with coconut shavings."
                },
                {
                    "name": "Frosted Sprinkles",
                    "price": 1.49,
                    "image": "frosted_sprinkles_s.jpg",
                    "description": "Nothing brings joy like sprinkles."
                },
                {
                    "name": "Bear Claw",
                    "price": 1.49,
                    "image": "bear_claw_s.jpg",
                    "description": "Golden fried and filled with sweet, tangy berry jelly—classic and satisfying."
                },
                {
                    "name": "French Cruller",
                    "price": 1.49,
                    "image": "french-cruller.jpg",
                    "description": "Light and airy with a honey-like glaze and a signature twisted shape."
                },
                {
                    "name": "Apple Fritter",
                    "price": 1.49,
                    "image": "apple_fritter_s.jpg",
                    "description": "Chunky, chewy, and packed with cinnamon-spiced apple pieces in every bite."
                },
                {
                    "name": "Blueberry Cake",
                    "price": 1.49,
                    "image": "blueberry_cake_s.jpg",
                    "description": "Dense and moist with real blueberries and a hint of vanilla glaze."
                },
                {
                    "name": "Old Fashioned",
                    "price": 1.49,
                    "image": "old_fashioned.jpg",
                    "description": "Crumbly and crisp on the edges with a rich, buttery flavor."
                },
                {
                    "name": "Maple Frosted",
                    "price": 1.49,
                    "image": "maple-frosted.jpg",
                    "description": "Smooth maple glaze adds warmth and sweetness to this classic treat."
                },
                {
                    "name": "Double Chocolate",
                    "price": 1.49,
                    "image": "chocolate_icing_s.jpg",
                    "description": "Chocolate donut topped with rich chocolate icing—decadence squared."
                },
                {
                    "name": "Maple Bacon",
                    "price": 2.49,
                    "image": "maple-bacon.jpg",
                    "description": "Savory meets sweet: maple glaze topped with crispy bacon crumbles."
                },
                {
                    "name": "Cinnamon Roll",
                    "price": 1.49,
                    "image": "cinnamon_roll_s.jpg",
                    "description": "Coated in a blend of cinnamon and sugar for a warm, nostalgic flavor."
                },
                {
                    "name": "Donut Holes",
                    "price": 0.35,
                    "image": "donut-holes.jpg",
                    "description": "Bite-sized glazed delights—light, poppable, and totally addictive."
                },
                {
                    "name": "Vanilla Frosted",
                    "price": 1.39,
                    "image": "vanilla_frosted_s.jpg",
                    "description": "Delicately sweet with a smooth vanilla glaze and colorful sprinkle topping."
                },
                {
                    "name": "Éclair",
                    "price": 1.75,
                    "image": "eclair.png",
                    "description": "Delicately sweet cream-filled pastry topped with chocolate icing"
                }
            ]
            ,
            sandwiches: [
                {
                    "name": "Egg & Cheese",
                    "type": "Bagel",
                    "price": 3.25,
                    "description": "Fluffy scrambled eggs and melted cheese stacked on a fresh toasted bagel.",
                    "image": ""
                },
                {
                    "name": "Ham, Egg & Cheese",
                    "type": "Bagel",
                    "price": 4.29,
                    "description": "Savory ham paired with eggs and cheese on a hearty bagel.",
                    "image": ""
                },
                {
                    "name": "Turkey or Bacon, Egg & Cheese",
                    "type": "Bagel",
                    "price": 4.29,
                    "description": "Choice of crispy bacon or smoked turkey with eggs and cheese on a bagel.",
                    "image": ""
                },
                {
                    "name": "Ham, Bacon, Egg & Cheese",
                    "type": "Bagel",
                    "price": 4.85,
                    "description": "Double the protein with ham and bacon, layered with eggs and cheese on a bagel.",
                    "image": ""
                },
                {
                    "name": "Egg & Cheese",
                    "type": "Croissant",
                    "price": 3.25,
                    "description": "Creamy scrambled eggs and melted cheese in a flaky, buttery croissant.",
                    "image": ""
                },
                {
                    "name": "Ham, Egg & Cheese",
                    "type": "Croissant",
                    "price": 4.29,
                    "description": "Sliced ham, eggs, and cheese tucked into a golden croissant.",
                    "image": ""
                },
                {
                    "name": "Turkey or Bacon, Egg & Cheese",
                    "type": "Croissant",
                    "price": 4.29,
                    "description": "Smoked turkey or crispy bacon with fluffy eggs and cheese in a croissant.",
                    "image": ""
                },
                {
                    "name": "Ham, Bacon, Egg & Cheese",
                    "type": "Croissant",
                    "price": 4.85,
                    "description": "Ham and bacon combo with eggs and cheese, wrapped in a flaky croissant.",
                    "image": ""
                },
                {
                    "name": "Egg & Cheese",
                    "type": "Toast",
                    "price": 3.25,
                    "description": "Simple and satisfying: eggs and cheese served between slices of toasted bread.",
                    "image": ""
                },
                {
                    "name": "Ham, Egg & Cheese",
                    "type": "Toast",
                    "price": 4.29,
                    "description": "Classic ham, eggs, and cheese pressed between golden toasted slices.",
                    "image": ""
                },
                {
                    "name": "Turkey or Bacon, Egg & Cheese",
                    "type": "Toast",
                    "price": 4.29,
                    "description": "Your pick of turkey or bacon with eggs and cheese on toasted bread.",
                    "image": ""
                },
                {
                    "name": "Ham, Bacon, Egg & Cheese",
                    "type": "Toast",
                    "price": 4.85,
                    "description": "Ham and bacon double-up with eggs and cheese on classic toast.",
                    "image": ""
                }
            ]
            ,
            drinks: [
                { "type": "Coffee (Small)", "price": 1.99 },
                { "type": "Coffee (Medium)", "price": 2.49 },
                { "type": "Coffee (Large)", "price": 2.99 },
                { "type": "Iced Coffee", "price": 2.99 },
                { "type": "Hot Chocolate", "price": 2.49 },
                { "type": "Tea (Small)", "price": 1.99 },
                { "type": "Tea (Medium)", "price": 2.49 },
                { "type": "Tea (Large)", "price": 2.99 },
                { "type": "Lemonade", "price": 2.49 },
                { "type": "Orange Juice", "price": 2.99 }
            ],
            bgImages: {
                donuts: ['sprinkled_donuts_tray.jpg', 'strawberry_glaze_tray.jpg'],
                sandwiches: ['bg_sandwiches.jpg'],
                drinks: ['bg_coffee.jpg']
            },


        }
    },
    methods: {
        getImageUrl(filename) {
            console.log(`Fetching image: ${filename}`);
            let imageUrl = new URL(`../assets/images/${filename}`, import.meta.url).href
            console.log(`Image URL: ${imageUrl}`);
            if (imageUrl.endsWith("undefined")) {
                return new URL(`../assets/images/glazed_donuts_s.jpg`, import.meta.url).href; // Fallback image
            }
            return imageUrl
        }
    }
    ,
    computed: {
        drinksTabHeight() {
            // Example: calculate based on window size or other logic
            return window.innerHeight; // Adjust as needed
        }
    }
    ,
}       
</script>
<style scoped>
.bg-full {
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: var(--donut-bg-soft);
    color: var(--donut-text);
}

.custom-img {
    background-image: url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80');
}
</style>