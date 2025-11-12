type Property = {
  id: number;
  name: string;
  title: string;
  description: string;
  location: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  imageUrl: string;
  discount: string;
};

export const PROPERTYLISTINGSAMPLE: Property[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    title: "Villa Ocean Breeze",
    description: "Stunning beachfront villa with private pool and ocean views",
    location: "Bali, Indonesia",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.9,
    category: ["Beachfront", "Luxury", "Private Pool"],
    price: 1200,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/villa1.jpeg",
    imageUrl: "/assets/villa1.jpeg",
    discount: "10"
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    title: "Mountain Escape Chalet",
    description: "Cozy mountain chalet with fireplace and stunning views",
    location: "Aspen, Colorado",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/villa2.jpeg",
    imageUrl: "/assets/villa2.jpeg",
    discount: "30"
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    title: "Cozy Desert Retreat",
    description: "Desert retreat with modern amenities and pet-friendly policies",
    location: "Palm Springs, California",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/villa3.jpeg",
    imageUrl: "/assets/villa3.jpeg",
    discount: ""
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    title: "City Lights Penthouse",
    description: "Luxurious penthouse in the heart of Manhattan",
    location: "New York, USA",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/villa4.jpeg",
    imageUrl: "/assets/villa4.jpeg",
    discount: "15"
  },
  {
    id: 5,
    name: "Riverside Cabin",
    title: "Riverside Cabin",
    description: "Private cabin on the riverside with kayaking facilities",
    location: "Queenstown, New Zealand",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/villa5.jpeg",
    imageUrl: "/assets/villa5.jpeg",
    discount: "20"
  },
  {
    id: 6,
    name: "Luxury Safari Lodge",
    title: "Luxury Safari Lodge",
    description: "All-inclusive safari lodge with guided tours",
    location: "Serengeti, Tanzania",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "All Inclusive", "Guided Tours"],
    price: 5500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/villa6.jpeg",
    imageUrl: "/assets/villa6.jpeg",
    discount: "20"
  },
  {
    id: 7,
    name: "Ski Chalet",
    title: "Ski Chalet",
    description: "Ski-in/ski-out chalet with fireplace and hot tub",
    location: "Zermatt, Switzerland",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.88,
    category: ["Ski-in/Ski-out", "Fireplace", "Hot Tub"],
    price: 4000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/villa7.jpeg",
    imageUrl: "/assets/villa7.jpeg",
    discount: ""
  }
];

export const HERO_BACKGROUND = "/assets/hero-bg.jpg";

export const FILTER_OPTIONS = [
  "Top Villa",
  "Self Check-in",
  "Beachfront",
  "Countryside",
  "Luxury",
  "Pet Friendly",
  "Budget Friendly",
  "Smart Home",
  "Private Pool",
  "Remote Work Ready"
];
