export type DayBorder = "green" | "amber" | "rust";

export type WeeklyDay = {
  day: string;
  short: string;
  status: "open" | "closed";
  featured?: boolean;
  specialName: string;
  hours: string;
  description: string;
  border: DayBorder;
};

export const weeklySpecials: WeeklyDay[] = [
  {
    day: "Monday",
    short: "Mo",
    status: "open",
    specialName: "Wings & Pizza Night",
    hours: "Open 3:00 PM to 7:00 PM",
    description:
      "Wings tossed in your choice of sauce, slices from the line, and the full menu. An easy way to ease into the week.",
    border: "green",
  },
  {
    day: "Tuesday",
    short: "Tu",
    status: "closed",
    specialName: "Closed",
    hours: "Closed",
    description:
      "We’re closed Tuesdays for crew reset and prep. Hours updates are posted on our social channels.",
    border: "rust",
  },
  {
    day: "Wednesday",
    short: "We",
    status: "open",
    specialName: "Full Menu Service",
    hours: "Open 11:00 AM to 7:00 PM",
    description:
      "The complete menu: burgers, baskets, salads, pizza, and the bar. A dependable midweek stop off US-2.",
    border: "amber",
  },
  {
    day: "Thursday",
    short: "Th",
    status: "open",
    specialName: "Draft & Dinner",
    hours: "Open 11:00 AM to 7:00 PM",
    description:
      "Rotating tap highlights alongside pizzas, sandwiches, and plates built for a relaxed night out.",
    border: "amber",
  },
  {
    day: "Friday",
    short: "Fr",
    status: "open",
    featured: true,
    specialName: "Fish Fry Friday",
    hours: "Open 11:00 AM to 8:00 PM",
    description:
      "Crispy fried fish, classic sides, cold beer. A steady UP Friday tradition, executed with care.",
    border: "green",
  },
  {
    day: "Saturday",
    short: "Sa",
    status: "open",
    specialName: "Full Kitchen & Bar",
    hours: "Open 11:00 AM to 8:00 PM",
    description:
      "Game-day energy when the schedule calls for it: full menu, full bar, pizzas from the deck oven.",
    border: "amber",
  },
  {
    day: "Sunday",
    short: "Su",
    status: "open",
    featured: true,
    specialName: "Pasta Sunday",
    hours: "Open 12:00 PM to 7:00 PM",
    description:
      "House-made Alfredo and simmered marinara: chicken, seafood, or classic spaghetti, served Sunday supper style.",
    border: "green",
  },
];
