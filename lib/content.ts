// All site copy and data lives here so it can be edited without touching layout code.

export const site = {
  name: "Katsu Seiba",
  phone: "+61 961 961 961",
  phoneHref: "tel:+61961961961",
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Our story", href: "#story" },
  { label: "Locations", href: "#locations" },
];

export type Dish = {
  name: string;
  jp: string;
  price: number;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  signature?: boolean;
};

// NOTE: descriptions and tags are new copy. Confirm with the kitchen before going live.
export const dishes: Dish[] = [
  {
    name: "Tonkatsu Curry",
    jp: "トンカツカレー",
    price: 16.99,
    description:
      "Panko-crusted pork loin over steamed rice, finished with our slow-simmered Japanese curry.",
    tags: ["House favourite", "Pork"],
    image: "/images/katsu-1.jpg",
    alt: "Sliced tonkatsu on rice with Japanese curry in a dark bowl",
    signature: true,
  },
  {
    name: "Gyukatsu Curry",
    jp: "牛カツカレー",
    price: 17.99,
    description:
      "Crisp-fried beef cutlet, pink in the middle, served with rice and a rich curry sauce.",
    tags: ["Beef"],
    image: "/images/katsu-3.jpg",
    alt: "Beef katsu curry with rice on a green tiled table",
  },
  {
    name: "Chicken Katsu",
    jp: "チキンカツ",
    price: 15.99,
    description:
      "Golden chicken cutlet with pickles, greens and curry on the side.",
    tags: ["Chicken"],
    image: "/images/katsu-4.jpg",
    alt: "Chicken katsu with curry, pickled carrot and greens on a white plate",
  },
];

export const drinks = [{ name: "Water Bottle", price: 2.99 }];

export type Location = {
  suburb: string;
  address: string;
  mapsQuery: string;
};

export const locations: Location[] = [
  {
    suburb: "Maribyrnong",
    address: "Highpoint Shopping Centre, Maribyrnong VIC 3032",
    mapsQuery: "Highpoint Shopping Centre Maribyrnong VIC",
  },
  {
    suburb: "Port Melbourne",
    address: "28 Rogers St, Port Melbourne VIC 3207",
    mapsQuery: "28 Rogers St, Port Melbourne VIC 3207",
  },
  {
    suburb: "Canterbury",
    address: "2A Ave Athol, Canterbury VIC 3126",
    mapsQuery: "2A Ave Athol, Canterbury VIC 3126",
  },
];

export const credits = [
  { name: "Xavier Cheng", href: "https://unsplash.com/photos/a-bowl-filled-with-rice-and-meat-covered-in-sauce-hEeA50ZHo4o" },
  { name: "Amar Preciado", href: "https://www.pexels.com/photo/close-up-of-a-chicken-curry-katsu-dish-17593646/" },
  { name: "Amar Preciado", href: "https://www.pexels.com/photo/meat-and-rice-17593648/" },
  { name: "Ryan Kwok", href: "https://unsplash.com/photos/brown-pastry-on-stainless-steel-tray-d2RYC06lRV0" },
  { name: "Kai-Chieh Chan", href: "https://www.pexels.com/photo/a-close-up-shot-of-a-katsukare-5305438/" },
  { name: "Yu", href: "https://unsplash.com/photos/black-and-brown-ceramic-bowls-on-brown-wooden-table-gg-FsJHmEdw" },
  { name: "Leo Sacchi", href: "https://www.pexels.com/photo/photo-of-people-sitting-in-a-restaurant-taken-from-the-outside-18702888/" },
  { name: "Mari", href: "https://www.pexels.com/photo/black-and-white-photo-of-a-woman-looking-at-menu-12389151/" },
  { name: "Ahmet ÇÖTÜR", href: "https://www.pexels.com/photo/drinks-by-the-pool-26859058/" },
];

export const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
