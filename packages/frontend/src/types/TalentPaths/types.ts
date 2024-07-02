import { IconNames } from "../Icons/types";

export type Talent = {
  id: string;
  name: string;
  points: number;
  icon: IconNames;
  active: boolean;
};

export type TalentPath = {
  id: string;
  name: string;
  children: Talent[];
};
