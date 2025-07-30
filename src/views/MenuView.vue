<template>
    <div class="justify-center items-center flex-1 flex flex-col pb-24">
        <div class="flex flex-col items-center justify-center pt-10 space-y-2">
            <h1 class="text-3xl font-bold text-center">Menu</h1>
        </div>


        <v-card class="w-full max-w-4xl mx-auto mt-10">
            <v-tabs v-model="tab" bg-color="" color="" class="text-lg bg-donut-400 dark:bg-donut-700 text-white dark:text-gray-200">
                <v-tab value="donuts">Donuts</v-tab>
                <v-tab value="sandwiches">Sandwiches</v-tab>
                <v-tab value="drinks">Drinks</v-tab>
            </v-tabs>

            <v-card-text bg-color="white" class="bg-[color:var(--donut-bg)] dark:bg-[color:var(--donut-bg-dark)] text-[color:var(--donut-text)] dark:text-[color:var(--donut-text-dark)]">
                <v-tabs-window v-model="tab" bg-color="primary" color="white">
                    <v-tabs-window-item value="donuts" >
                        <ul class="space-y-4">
                            <li v-for="donut in donuts" :key="donut.type"
                                class="flex justify-between mt-1 mb-4 border-b pb-2">

                                <div class="flex flex-col w-full">
                                    <div class="flex justify-between w-full">
                                        <span>{{ donut.name }}</span>
                                        <span>${{ donut.price.toFixed(2) }}</span>
                                    </div>
                                    <span class="text-sm text-zinc-500">{{ donut.description }}</span>

                                    <!-- <div class="flex justify-left">
                                        <img :src="getImageUrl(donut.image)" :alt="donut.type" class="h-30 w-30 rounded-full" />
                                    </div> -->
                                </div>
                            </li>
                        </ul>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="sandwiches">
                        <ul class="space-y-4">
                            <li v-for="sandwich in sandwiches" :key="sandwich.type"
                                class="flex justify-between mt-1 mb-4 border-b pb-2">
                                <div class="flex flex-col w-full">
                                    <div class="flex justify-between w-full">
                                        <span>{{ sandwich.name }}</span>
                                        <span>${{ sandwich.price.toFixed(2) }}</span>
                                    </div>
                                    <span class="text-sm text-zinc-500">{{ sandwich.description }}</span>
                                </div>
                            </li>
                        </ul>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="drinks">
                        <ul class="space-y-4">
                            <li v-for="drink in drinks" :key="drink.type"
                                class="flex justify-between mt-1 mb-4 border-b pb-2">
                                <span>{{ drink.type }}</span>
                                <span>${{ drink.price.toFixed(2) }}</span>
                            </li>
                        </ul>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {

    name: 'MenuView',
    data() {
        return {
            tab: 'donuts',
            donuts: [
                {
                    "name": "Glazed Donut",
                    "price": 1.29,
                    "image": "glazed.jpg",
                    "description": "Soft and airy, covered in a sweet, glossy glaze that melts in your mouth."
                },
                {
                    "name": "Chocolate Frosted",
                    "price": 1.39,
                    "image": "chocolate-frosted.jpg",
                    "description": "Classic donut topped with smooth chocolate icing—perfect for any chocoholic."
                },
                {
                    "name": "Boston Kreme",
                    "price": 1.49,
                    "image": "boston-kreme.jpg",
                    "description": "Filled with rich vanilla custard and finished with a thick chocolate glaze."
                },
                {
                    "name": "Strawberry Frosted",
                    "price": 1.39,
                    "image": "strawberry-frosted.jpg",
                    "description": "Light and fruity with a pink strawberry glaze and colorful sprinkles."
                },
                {
                    "name": "Jelly Donut",
                    "price": 1.39,
                    "image": "jelly.jpg",
                    "description": "Golden fried and filled with sweet, tangy berry jelly—classic and satisfying."
                },
                {
                    "name": "French Cruller",
                    "price": 1.59,
                    "image": "french-cruller.jpg",
                    "description": "Light and airy with a honey-like glaze and a signature twisted shape."
                },
                {
                    "name": "Apple Fritter",
                    "price": 1.79,
                    "image": "fritter.jpg",
                    "description": "Chunky, chewy, and packed with cinnamon-spiced apple pieces in every bite."
                },
                {
                    "name": "Blueberry Cake",
                    "price": 1.39,
                    "image": "blueberry.jpg",
                    "description": "Dense and moist with real blueberries and a hint of vanilla glaze."
                },
                {
                    "name": "Old Fashioned",
                    "price": 1.29,
                    "image": "old-fashioned.jpg",
                    "description": "Crumbly and crisp on the edges with a rich, buttery flavor."
                },
                {
                    "name": "Maple Frosted",
                    "price": 1.39,
                    "image": "maple-frosted.jpg",
                    "description": "Smooth maple glaze adds warmth and sweetness to this classic treat."
                },
                {
                    "name": "Double Chocolate",
                    "price": 1.49,
                    "image": "double-chocolate.jpg",
                    "description": "Chocolate donut topped with rich chocolate icing—decadence squared."
                },
                {
                    "name": "Maple Bacon",
                    "price": 1.85,
                    "image": "maple-bacon.jpg",
                    "description": "Savory meets sweet: maple glaze topped with crispy bacon crumbles."
                },
                {
                    "name": "Cinnamon Sugar",
                    "price": 1.29,
                    "image": "cinnamon-sugar.jpg",
                    "description": "Coated in a blend of cinnamon and sugar for a warm, nostalgic flavor."
                },
                {
                    "name": "Donut Holes",
                    "price": 0.25,
                    "image": "donut-holes.jpg",
                    "description": "Bite-sized glazed delights—light, poppable, and totally addictive."
                },
                {
                    "name": "Vanilla Frosted",
                    "price": 1.39,
                    "image": "vanilla-frosted.jpg",
                    "description": "Delicately sweet with a smooth vanilla glaze and colorful sprinkle topping."
                }
            ]
            ,
            //     { "type": "Glazed Donut", "price": 1.29 },
            //     { "type": "Chocolate Frosted", "price": 1.39 },
            //     { "type": "Boston Kreme", "price": 1.49 },
            //     { "type": "Strawberry Frosted", "price": 1.39 },
            //     { "type": "Jelly Donut", "price": 1.39 },
            //     { "type": "French Cruller", "price": 1.59 },
            //     { "type": "Apple Crumb", "price": 1.49 },
            //     { "type": "Blueberry Cake", "price": 1.39 },
            //     { "type": "Old Fashioned", "price": 1.29 },
            //     { "type": "Powdered Donut", "price": 1.29 },
            //     { "type": "Cinnamon Sugar", "price": 1.29 },
            //     { "type": "Maple Frosted", "price": 1.39 },
            //     { "type": "Double Chocolate", "price": 1.49 },
            //     { "type": "Vanilla Frosted", "price": 1.39 },
            //     { "type": "Apple Fritter", "price": 1.79 },
            //     { "type": "Chocolate Glazed", "price": 1.49 },
            //     { "type": "Sour Cream Donut", "price": 1.39 },
            //     { "type": "Cream Filled", "price": 1.49 },
            //     { "type": "Lemon Filled", "price": 1.39 },
            //     { "type": "Coconut Donut", "price": 1.29 },
            //     { "type": "Tiger Tail", "price": 1.59 },
            //     { "type": "Maple Bar", "price": 1.49 },
            //     { "type": "Long John", "price": 1.49 },
            //     { "type": "Cronut", "price": 2.29 },
            //     { "type": "Bear Claw", "price": 1.79 },
            //     { "type": "Malasada", "price": 1.59 },
            //     { "type": "Spudnut", "price": 1.39 },
            //     { "type": "Devil's Food", "price": 1.49 },
            //     { "type": "Donut Holes (Munchkins)", "price": 0.25 },
            //     { "type": "Pershing Donut", "price": 1.59 },
            //     { "type": "Berliner", "price": 1.49 },
            //     { "type": "Apple Cider Donut", "price": 1.39 },
            //     { "type": "Chocolate Sprinkle", "price": 1.39 },
            //     { "type": "Crumb Donut", "price": 1.49 },
            //     { "type": "Churro Donut", "price": 1.59 },
            //     { "type": "Cinnamon Twist", "price": 1.39 },
            //     { "type": "Buttermilk Donut", "price": 1.29 },
            //     { "type": "Toasted Coconut", "price": 1.59 },
            //     { "type": "Glazed Lemon", "price": 1.39 },
            //     { "type": "Chocolate Creme", "price": 1.49 },
            //     { "type": "Vanilla Creme", "price": 1.39 },
            //     { "type": "Chocolate Butternut", "price": 1.49 },
            //     { "type": "Peanut Donut", "price": 1.29 },
            //     { "type": "Sugared Donut", "price": 1.25 },
            //     { "type": "Coffee Roll", "price": 1.29 },
            //     { "type": "Chocolate Dipped Cruller", "price": 1.59 },
            //     { "type": "Glazed Strawberry", "price": 1.99 },
            //     { "type": "Chocolate Headlight", "price": 1.39 }
            // ],
            sandwiches: [
                {
                    "name": "Bacon, Egg & Cheese",
                    "price": 3.49,
                    "image": "bacon-egg-cheese.jpg",
                    "description": "Crispy bacon strips, a fluffy egg, and melted American cheese stacked on a warm buttery biscuit."
                },
                {
                    "name": "Sausage, Egg & Cheese",
                    "price": 3.49,
                    "image": "sausage-egg-cheese.jpg",
                    "description": "Savory pork sausage, golden egg, and gooey cheddar cheese on a soft roll—hearty and satisfying."
                },
                {
                    "name": "Ham, Egg & Cheese",
                    "price": 3.49,
                    "image": "ham-egg-cheese.jpg",
                    "description": "Smoky slices of ham with scrambled eggs and melted Swiss cheese on a toasted croissant."
                },
                {
                    "name": "Veggie Delight",
                    "price": 3.79,
                    "image": "veggie-delight.jpg",
                    "description": "Fresh spinach, roasted red peppers, and fluffy egg with provolone on multigrain bread."
                },
                {
                    "name": "Turkey Sausage & Egg White",
                    "price": 3.59,
                    "image": "turkey-sausage-egg-white.jpg",
                    "description": "Lean turkey sausage paired with fluffy egg whites and low-fat cheese on a wheat English muffin."
                },
                {
                    "name": "Avocado Toast Sammy",
                    "price": 4.29,
                    "image": "avocado-toast-sammy.jpg",
                    "description": "Smashed avocado, tomato slices, and a sunny-side-up egg on whole grain toast with cracked pepper."
                },
                {
                    "name": "Grilled Chicken Biscuit",
                    "price": 3.99,
                    "image": "chicken-biscuit.jpg",
                    "description": "Juicy grilled chicken breast tucked into a flaky biscuit—simple, Southern, and full of flavor."
                },
                {
                    "name": "Chorizo & Egg",
                    "price": 3.89,
                    "image": "chorizo-egg.jpg",
                    "description": "Spicy chorizo, scrambled egg, and pepper jack cheese in a warm flour tortilla."
                },
                {
                    "name": "Egg & Cheese",
                    "price": 2.99,
                    "image": "egg-cheese.jpg",
                    "description": "A classic combo of soft scrambled eggs and gooey cheese on a buttery roll—simple and comforting."
                },
                {
                    "name": "Steak & Egg",
                    "price": 4.49,
                    "image": "steak-egg.jpg",
                    "description": "Tender grilled steak with fluffy eggs and melted provolone cheese on a toasted hoagie roll."
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
            ]


        }
    },
    methods: {
        getImageUrl(filename) {
            return new URL(`../assets/images/${filename}`, import.meta.url).href;
        }
    },
}       
</script>