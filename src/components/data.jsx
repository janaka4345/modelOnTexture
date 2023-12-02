import { Car } from "./Car";
import { Truck } from "./Truck";
import { Semi } from "./Semi";

export const sceness = [
  {
    Model: Truck,
    mainColor: "#f9c0ff",
    name: "Cybertruck",
    description:
      "Better utility than a truck with more performance than a sports car",
    price: 72000,
    range: 660,
  },
  {
    Model: Car,
    mainColor: "#c0ffe1",
    name: "Model 3",
    description: "The car of the future",
    price: 29740,
    range: 576,
  },
  {
    Model: Semi,
    mainColor: "#ffdec0",
    name: "Semi",
    description: "The Future of Trucking",
    price: 150000,
    range: 800,
  },
];
