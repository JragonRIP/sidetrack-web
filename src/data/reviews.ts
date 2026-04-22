export type Review = {
  quote: string;
  author: string;
  location?: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Consistently excellent pizza: the crust has real texture, and the toppings are generous without feeling overloaded. We plan stops on US-2 around Sidetrack.",
    author: "Sarah K.",
    location: "Passing through",
  },
  {
    quote:
      "The fish fry is generous, hot, and exactly what you hope for on a Friday night. Comfortable room, attentive service.",
    author: "Mike D.",
    location: "Powers area",
  },
  {
    quote:
      "Alfredo tastes house-made, not from a bag. Pasta Sunday has become our routine when we’re in the central UP.",
    author: "Jennifer L.",
    location: "Iron Mountain",
  },
  {
    quote:
      "Unpretentious and welcoming: good drinks, solid food, easy parking. Exactly what you want after a long haul.",
    author: "Chris P.",
    location: "Escanaba",
  },
  {
    quote:
      "Onion rings are share-plate huge, and the kitchen feels consistent visit after visit.",
    author: "Amanda R.",
    location: "Marquette County",
  },
];
