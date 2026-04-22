export type PizzaSizes = {
  s12: string;
  s14: string;
  s16: string;
};

export type TieredPrice = {
  label: string;
  value: string;
};

export type MenuVariant = {
  name: string;
  price?: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  pizzaSizes?: PizzaSizes;
  /** e.g. classic subs: 6" through 24" */
  tieredPrices?: TieredPrice[];
  variants?: MenuVariant[];
  badge?: string;
};

export type MenuCategory = {
  id: string;
  railName: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const meatToppings = [
  "Pepperoni",
  "Sausage",
  "Ground Beef",
  "Bacon",
  "Ham",
  "Grilled Chicken",
];

export const veggieToppings = [
  "Mushrooms",
  "Onions",
  "Green Peppers",
  "Tomatoes",
  "Black Olives",
  "Green Olives",
  "Jalapeños",
  "Banana Peppers",
  "Pineapple",
];

export const pizzaUpcharges = [
  "Double crust \"Pie Style\" (garlic butter): 12\" +$3 · 14\" +$4 · 16\" +$5",
  "Additional toppings: $1 per item",
];

const subSizeLabels = [`6"`, `10"`, `12"`, `16"`, `24"`];

function subPrices(...values: [string, string, string, string, string]): TieredPrice[] {
  return subSizeLabels.map((label, i) => ({ label, value: values[i]! }));
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    railName: "Main Line",
    title: "Famous Soft Crust Pizza",
    subtitle:
      "Hand tossed, comes with mozzarella cheese. Sizes: 12\" / 14\" / 16\". Build from the lists below or choose a specialty pie.",
    items: [
      {
        name: "The Engineer",
        description:
          "A Sidetrack favorite. Pepperoni, ground beef, sausage, mushrooms, onions and green peppers.",
        pizzaSizes: { s12: "$15", s14: "$19", s16: "$23" },
        badge: "Sidetrack favorite",
      },
      {
        name: "Boxcar (Meat Lovers)",
        description: "Pepperoni, ground beef, sausage, ham and bacon.",
        pizzaSizes: { s12: "$17", s14: "$22", s16: "$26" },
      },
      {
        name: "Pepperoni Lovers",
        description: "Triple pepperoni.",
        pizzaSizes: { s12: "$13", s14: "$16", s16: "$20" },
      },
      {
        name: "Big 10 Deli",
        description:
          "Pepperoni, ham, salami, capicola, onions, mushrooms, tomatoes, black olives and green peppers.",
        pizzaSizes: { s12: "$18", s14: "$23", s16: "$28" },
      },
      {
        name: "Hawaiian",
        description: "Ham, green peppers, pineapple.",
        pizzaSizes: { s12: "$13", s14: "$16", s16: "$20" },
      },
      {
        name: "Taco",
        description:
          "Taco meat, mozzarella, cheddar cheese and taco sauce topped with lettuce, tomatoes and tortilla chips.",
        pizzaSizes: { s12: "$15", s14: "$19", s16: "$23" },
      },
      {
        name: "Bacon Cheeseburger",
        description: "Ground beef, bacon, onions, mozzarella and cheddar cheese.",
        pizzaSizes: { s12: "$15", s14: "$19", s16: "$23" },
      },
      {
        name: "The Track Mac",
        description:
          "Ground beef, onions, pickles, mozzarella and cheddar cheese topped with lettuce and Thousand Island dressing.",
        pizzaSizes: { s12: "$15", s14: "$19", s16: "$23" },
      },
      {
        name: "BBQ Chicken",
        description:
          "Chicken breast, mozzarella, cheddar cheese, onions, mushrooms with barbecue sauce.",
        pizzaSizes: { s12: "$17", s14: "$22", s16: "$27" },
      },
      {
        name: "Chicken Alfredo",
        description: "Chicken breast, mozzarella and homemade Alfredo sauce.",
        pizzaSizes: { s12: "$17", s14: "$22", s16: "$27" },
      },
      {
        name: "Hand Cut Veggie",
        description:
          "Mushrooms, red and green peppers, onions and tomatoes topped with a balsamic glaze.",
        pizzaSizes: { s12: "$15", s14: "$19", s16: "$23" },
      },
      {
        name: "Cheese Pizza",
        description: "Classic cheese.",
        pizzaSizes: { s12: "$11", s14: "$13", s16: "$15" },
      },
    ],
  },
  {
    id: "build-your-own",
    railName: "Switch Yard",
    title: "Build Your Own Pizza",
    subtitle: "Choose your topping count, then pick from the meats and veggies listed below.",
    items: [
      {
        name: "1 topping",
        description: "Choose any meat or veggie from the lists below.",
        pizzaSizes: { s12: "$12", s14: "$15", s16: "$18" },
      },
      {
        name: "2 toppings",
        pizzaSizes: { s12: "$13", s14: "$17", s16: "$20" },
      },
      {
        name: "3 toppings",
        pizzaSizes: { s12: "$14", s14: "$19", s16: "$22" },
      },
      {
        name: "4 toppings",
        pizzaSizes: { s12: "$15", s14: "$21", s16: "$24" },
      },
      {
        name: "5 toppings",
        pizzaSizes: { s12: "$16", s14: "$23", s16: "$26" },
      },
    ],
  },
  {
    id: "sandwiches-burgers",
    railName: "Freight Deck",
    title: "Sandwiches & Burgers",
    subtitle: "Served with French fries or tots.",
    items: [
      {
        name: "Philly",
        description:
          "Shaved beef, sautéed onions, green peppers, mushrooms and provolone cheese on toasted French bread.",
        price: "$13",
      },
      {
        name: "Reuben",
        description:
          "Corned beef, sauerkraut and Swiss cheese on grilled marbled rye with Thousand Island.",
        price: "$13",
      },
      {
        name: "Black Forest Roast",
        description:
          "Roast beef and turkey with sautéed onions and Swiss cheese on grilled marbled rye.",
        price: "$13",
      },
      {
        name: "Chicken Fajita Melt",
        description:
          "Seasoned chicken strips, sautéed onions, red and green peppers, topped with melted cheddar blend on toasted French bread.",
        price: "$13",
      },
      {
        name: "Chicken Breast Sandwich",
        description: "Grilled or crispy breast on a toasted bun, lettuce, tomato and mayo.",
        price: "$13",
      },
      {
        name: "Beer Cheese Pretzel Burger",
        description:
          "Half pound. Bacon topped with American, Beer Haus cheese and crispy onions on a grilled pretzel bun.",
        price: "$14",
      },
      {
        name: "Michigan Wisconsin Burger",
        description:
          "Third pound. Includes a sausage patty, topped with double American cheese.",
        price: "$14",
      },
      {
        name: "Patty Melt",
        description: "Half pound. Sautéed onions and American cheese on grilled marble rye.",
        price: "$13",
      },
      {
        name: "Pepper-Jack Bacon Burger",
        description: "Half pound. Bacon, pepper-jack and zesty chipotle sauce.",
        price: "$13",
      },
      {
        name: "Bourbon Mushroom Burger",
        description: "Half pound. Sautéed mushrooms, Swiss cheese and bourbon sauce.",
        price: "$13",
      },
      {
        name: "Texas Wrangler Burger",
        description: "Half pound. Pepper-jack cheese, crispy onions and western sauce.",
        price: "$13",
      },
      {
        name: "Loaded Bacon Cheeseburger",
        description: "Half pound. Bacon and choice of cheese.",
        price: "$13",
      },
      {
        name: "Mushroom Swiss",
        description: "Third pound.",
        price: "$12",
      },
      {
        name: "Hamburger",
        description: "Third pound.",
        price: "$10",
      },
      {
        name: "Cheeseburger",
        description: "Third pound.",
        price: "$11",
      },
    ],
  },
  {
    id: "dining-car",
    railName: "Dining Car",
    title: "Dining Car Favorites",
    subtitle: "Pasta plates, entrées and a kids’ pick.",
    items: [
      {
        name: "Anytime Pasta Dinner",
        description:
          "Homemade Alfredo over fettuccine, served with garlic bread and side salad.",
        variants: [
          { name: "Chicken Alfredo (grilled or crispy)", price: "$17" },
          { name: "Seafood Alfredo (jumbo shrimp and crab meat)", price: "$20" },
          { name: "Spaghetti and meatballs (with red sauce)", price: "$16" },
        ],
      },
      {
        name: "Chicken Parmesan",
        description:
          "Grilled or crispy chicken with fettuccine, red sauce and provolone. Served with garlic bread and side salad.",
        price: "$17",
      },
      {
        name: "Smothered Chicken",
        description:
          "Two grilled chicken breasts smothered with onions, red and green peppers and cheddar blend. Includes side salad and fries or tots.",
        price: "$16",
      },
      {
        name: "Kids’ menu",
        description:
          "Choice of grilled cheese, boneless wings (5) or strips (2). Includes fries and kids drink.",
        price: "$8",
      },
    ],
  },
  {
    id: "sweet-tooth",
    railName: "Caboose",
    title: "Sweet Tooth",
    subtitle: "Save room.",
    items: [
      {
        name: "Elephant Ear",
        price: "$11",
      },
      {
        name: "Deep Fried Oreos",
        description: "Six pieces.",
        price: "$9",
      },
      {
        name: "Chocolate Lava Cake",
        price: "$5",
      },
    ],
  },
  {
    id: "drinks",
    railName: "Tap Line",
    title: "Drinks",
    subtitle: "Fountain and hot drinks.",
    items: [
      {
        name: "Unlimited fountain",
        description: "Kids cup $2.",
        price: "$3",
      },
      {
        name: "Coffee, tea, hot chocolate",
        price: "$3",
      },
    ],
  },
  {
    id: "appetizers",
    railName: "First Stop",
    title: "Appetizers",
    subtitle: "Starters and shareables.",
    items: [
      {
        name: "Cowcatcher Basket",
        description:
          "Jalapeño poppers, mozzarella sticks, cheese curds and jalapeño curds. Served with marinara.",
        price: "$13",
      },
      {
        name: "Cheesy Pizza Fries",
        description:
          "12 inch crust with garlic butter and mozzarella cheese. Served with marinara.",
        price: "$12",
      },
      {
        name: "Cheesy Garlic Bread",
        price: "$10",
      },
      {
        name: "Breaded Mushrooms",
        price: "$10",
      },
      {
        name: "Jalapeño Poppers",
        price: "$10",
      },
      {
        name: "Bavarian Soft Pretzels",
        description: "Four. With Beer Haus cheese sauce.",
        price: "$10",
      },
      {
        name: "Onion Ring Basket",
        price: "$9",
      },
      {
        name: "Cheese or Jalapeño Curds",
        price: "$9",
      },
      {
        name: "Mozzarella Sticks",
        price: "$9",
      },
      {
        name: "Basket of Waffle Fries",
        price: "$6",
      },
      {
        name: "Basket of Fries or Tots",
        price: "$4",
      },
    ],
  },
  {
    id: "wings",
    railName: "Hot Box",
    title: "Wings",
    subtitle: "Bone-in or boneless.",
    items: [
      {
        name: "Wings",
        description:
          "(6) for $7 · (12) for $13. Sauces: Buffalo, BBQ, garlic parmesan, sweet Thai chili, Korean gochujang, sizzling honey garlic, sweet and sour, honey mustard.",
      },
    ],
  },
  {
    id: "loaded-tots",
    railName: "Loaded Track",
    title: "Loaded Tots Menu",
    subtitle: "All loaded tot plates priced the same.",
    items: [
      {
        name: "Big Track Mac",
        description:
          "Tots, nacho cheese, lettuce, ground beef, pickles and onions with Thousand Island.",
        price: "$12",
      },
      {
        name: "Taco Tots",
        description:
          "Tots, nacho cheese, taco meat, lettuce, shredded cheese and tomatoes with sour cream and salsa.",
        price: "$12",
      },
      {
        name: "Loaded Baked Potato Tots",
        description:
          "Tots, nacho cheese and bacon with diced green onions and sour cream.",
        price: "$12",
      },
      {
        name: "Philly Tots",
        description:
          "Tots, nacho cheese, Philly steak, sautéed onions, mushrooms and green peppers with melted provolone.",
        price: "$12",
      },
    ],
  },
  {
    id: "salads-wraps",
    railName: "Garden Car",
    title: "Salads & Wraps",
    subtitle:
      "Crispy or grilled chicken available. Served with fries or tots. Sub onion rings or waffle fries +$2. No side: $2 off.",
    items: [
      { name: "Chicken Bacon Ranch", price: "$13" },
      { name: "Chipotle Chicken", price: "$13" },
      { name: "Santa Fe Chicken", price: "$13" },
      { name: "Taco Salad", price: "$13" },
      { name: "Chicken Caesar", price: "$13" },
      { name: "Buffalo Bleu Chicken", price: "$13" },
      { name: "Chef’s Salad", price: "$13" },
      { name: "Side Salad", price: "$4" },
    ],
  },
  {
    id: "subs",
    railName: "Express Subs",
    title: "Sidetrack Classic Subs",
    subtitle:
      "Includes fries or tots. Sub onion rings or waffle fries +$4. Sizes: 6\" · 10\" · 12\" · 16\" · 24\".",
    items: [
      {
        name: "Hot German",
        description:
          "Salami, capicola, ham, tomatoes, pickles, provolone and cayenne pepper.",
        tieredPrices: subPrices("$10", "$12", "$18", "$24", "$32"),
      },
      {
        name: "Sidetrack Special",
        description:
          "Double layers of roast beef, mushrooms, onions, green peppers and melted American on toasted French bread.",
        tieredPrices: subPrices("$10", "$12", "$18", "$24", "$32"),
      },
      {
        name: "Club",
        description:
          "Ham, turkey, bacon, lettuce, tomatoes, mayo and American cheese.",
        tieredPrices: subPrices("$10", "$12", "$16", "$24", "$30"),
      },
      {
        name: "Italian",
        description:
          "Capicola, salami, pepperoni, provolone, pickles, tomatoes, lettuce, onions and Italian dressing.",
        tieredPrices: subPrices("$10", "$12", "$16", "$24", "$30"),
      },
      {
        name: "Pizzarita",
        description:
          "Double pepperoni, mozzarella, pizza sauce with sautéed mushrooms on a toasted bun.",
        tieredPrices: subPrices("$10", "$12", "$16", "$24", "$30"),
      },
      {
        name: "Meatball",
        description: "Toasted French bread with meatballs, mozzarella and marinara.",
        tieredPrices: subPrices("$10", "$12", "$16", "$24", "$30"),
      },
    ],
  },
  {
    id: "south-border",
    railName: "South Junction",
    title: "South of the Border",
    subtitle: "Mexican plates and extras.",
    items: [
      {
        name: "Wet Burrito",
        description:
          "Taco meat and cheese, topped with taco sauce, lettuce, shredded cheese and tomatoes. Served with Spanish rice, refried beans, sour cream and salsa.",
        price: "$15",
      },
      {
        name: "Nacho Supreme",
        description:
          "Tortilla chips with taco meat, nacho cheese, tomatoes, green peppers, black olives and onions.",
        price: "$13",
      },
      {
        name: "Taco Platter",
        description:
          "Three tacos (hard or soft) with taco meat, shredded cheese, lettuce and tomatoes. Served with Spanish rice, refried beans, sour cream and salsa.",
        price: "$12",
      },
      {
        name: "Enchilada Platter",
        description:
          "Three tortillas stuffed with cheese, topped with enchilada sauce, tomatoes, shredded cheese and lettuce. Add taco meat +$2. Served with Spanish rice, refried beans, sour cream and salsa.",
        price: "$12",
      },
      {
        name: "Quesadilla",
        description:
          "Toasted 12\" tortillas with cheese, onions, jalapeños and black olives. Half order $10 (add chicken +$2). Full order $13 (add chicken +$3).",
      },
      {
        name: "Chimichanga",
        description:
          "Deep fried burrito (turkey or taco meat) with sautéed onions, mushrooms, green peppers and cheese. Served with sour cream and salsa.",
        price: "$13",
      },
      {
        name: "Tijuana Philly",
        description:
          "Philly steak, jalapeños, sautéed mushrooms, onions, tomatoes and melted cheese in a folded tortilla.",
        price: "$13",
      },
      {
        name: "Chips & Cheese",
        price: "$5",
      },
      {
        name: "Taco Pizza",
        description: "Also listed in the pizza section.",
      },
      {
        name: "Tacos à la carte",
        price: "$3",
      },
      {
        name: "Large side of rice or beans",
        price: "$5",
      },
    ],
  },
];
