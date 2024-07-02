// Define the IconBase styled component
export enum IconNames {
  SKULL = "SKULL",
  LIGHTNING = "LIGHTNING",
  SCUBA = "SCUBA",
  SHIP = "SHIP",
  CROWN = "CROWN",
  CAKE = "CAKE",
  FORK = "FORK",
  STACK = "STACK",
}

//use the type above to build an enum to export to the FE

export type IconName = keyof typeof IconNames;
