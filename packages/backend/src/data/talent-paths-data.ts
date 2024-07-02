import * as crypto from "crypto";

export const MAX_TALENT_POINTS = 6;
export const POINTS_SPENT = 0;

export const TALENT_PATHS = [
  {
    id: crypto.randomUUID(),
    name: "TALENT PATH 1",
    children: [
      {
        id: crypto.randomUUID(),
        name: "STRENGTH",
        points: 1,
        icon: "STACK",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "SURVIVAL",
        points: 1,
        icon: "FORK",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "HUNGER",
        points: 1,
        icon: "CAKE",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "HONOR",
        points: 1,
        icon: "CROWN",
        active: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "TALENT PATH 2",
    children: [
      {
        id: crypto.randomUUID(),
        name: "SAILING",
        points: 1,
        icon: "SHIP",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "DIVING",
        points: 1,
        icon: "SCUBA",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "ELECTRICITY",
        points: 1,
        icon: "LIGHTNING",
        active: false,
      },
      {
        id: crypto.randomUUID(),
        name: "DEATH PENALTY",
        points: 1,
        icon: "SKULL",
        active: false,
      },
    ],
  },
];
