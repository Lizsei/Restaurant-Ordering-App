export type Dish = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
};


export type Restaurant = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    dishes: Dish[];
   
    options?: { title: string; additionalPrice: number }[];
};



type Restaurants = Restaurant[];

export const featuredRestaurants: Restaurants = [
    {
        id: 1,
        title: "Kind",
        desc: "Nestled in the Arts District, Kind's menu is a testament to the diverse culinary influences of its chefs who have honed their craft in LA, Mexico City, and New York. Kind is renowned for its sumptuous selection of small plates.",
        img: "/temporary/restaurant1.jpeg",
        dishes: [
            { id: 1, title: 'Scallop Aguachile', desc: 'Cucumber, Agretti, Borage ', img: '/temporary/Scallop_OS_Aguachiles.jpeg', price: 20 },
            { id: 2, title: 'Bluefin Crudo ', desc: 'Raspberry, Herring, Roe, Purple Shiso ', img: '/temporary/bluefin crudo.jpeg', price: 23 },
          ],

    },

    {
        id: 2,
        title: "Ten",
        desc: "Located by the water's edge, Ten epitomizes the quintessential fine-dining experience. Offering both a prix-fixe and an à la carte menu, the restaurant artfully reimagines traditional favorites to delight even the most discerning palate.",
        img: "/temporary/restaurant2.jpeg",
        dishes: [
            { id: 1, title: 'Hamachi Collars ', desc: 'Spring Garlic Tare, Morita Mayonnaise ', img: '/temporary/Hamachi collar.jpeg', price: 38 },
            { id: 2, title: 'Black Sea Bass ', desc: 'Lovage, Fennel, Smoked Fumet ', img: '/temporary/black sea bass.jpeg', price: 38 },
          ],
    
   },

   {
    id: 3,
    title: "Crowley Ledges",
    desc: "Indulge in sublime dining at Crowley Ledges, set in a hidden garden overlooking the sea. Our ever-changing menu is a curated tapestry of artisanal, locally-sourced ingredients, offering a unique culinary experience with each visit.",
    img: "/temporary/restaurant3.jpeg",
    dishes: [
        { id: 1, title: 'Lobster Roll', desc: 'Served Warm with Butter', img: '/temporary/lobster roll.jpeg', price: 39 },
        { id: 2, title: 'Eggplant', desc: 'Nightshade Jam, Tahini Jus, Breadcrumbs ', img: '/temporary/eggplant.jpeg', price: 28 },
      ],

},

{
    id: 4,
    title: "Whimsical Garden",
    desc: "A magical outdoor dining experience where every dish is a work of art inspired by nature.",
    img: "/temporary/rest4.jpeg",
    dishes: [
        { id: 1, title: 'Bluefin Crudo ', desc: 'Raspberry, Herring, Roe, Purple Shiso ', img: '/temporary/bluefin crudo.jpeg', price: 20 },
        { id: 2, title: 'Roasted Half Chicken', desc: 'Kale and Chicken Jus', img: '/temporary/roasted chicken.jpeg', price: 42 },
      ],

},

{
    id: 5,
    title: "Deep Blue",
    desc: "Immerse yourself in an underwater-themed restaurant that brings the ocean’s freshest catches right to your table.",
    img: "/temporary/rest5.jpeg",
    dishes: [
        { id: 1, title: 'Maine Oysters', desc: 'Seaweed Mignonette, Lemon ', img: '/temporary/oysters-over-seaweed.jpg', price: 35 },
        { id: 2, title: 'Black Sea Bass', desc: 'TLovage, Fennel, Smoked Fumet ', img: '/temporary/black sea bass.jpeg', price: 40 },
      ],

},
  
    {
        id: 6,
        title: "Spice Trail",
        desc: "Navigate through an array of globally-inspired dishes that take your taste buds on an unforgettable journey.",
        img: "/temporary/rest6.jpeg",
        dishes: [
            { id: 1, title: 'Turnspit Roasted Marinated Half Chicken', desc: 'Collard Greens, Duck Fat Fried Sourdough, Chicken Jus ', img: '/temporary/roasted chicken.jpeg', price: 42 },
            { id: 2, title: 'Wood Grilled Hanger Steak ', desc: 'Seasonal Preparation ', img: '/temporary/wood-grilled-hanger-steak.jpg', price: 53 },
          ],
    
   },
];