import axios from "axios";
import { TalentPath } from "../types/TalentPaths";

export type TalentsPathDataResponse = {
  path: TalentPath[];
  pointsSpent: number;
  maxTalentPoints: number;
};

const url = `${import.meta.env.VITE_TALENTS_BACKEND_URL}/talents`;

export const getTalentsData = async (): Promise<TalentsPathDataResponse> => {
  return axios
    .get(url)
    .then((response) => {
      return {
        path: response.data.paths,
        pointsSpent: response.data.pointsSpent,
        maxTalentPoints: response.data.maxPoints,
      };
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
