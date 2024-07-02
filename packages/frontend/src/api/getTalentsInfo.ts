import axios from "axios";
import { TalentPath } from "../types/TalentPaths";

export type TalentsPathDataResponse = {
  path: TalentPath[];
  pointsSpent: number;
  maxTalentPoints: number;
};

const baseURL =
  import.meta.env.VITE_TALENTS_BACKEND_URL ?? "http://localhost:3000";

export const getTalentsData = async (): Promise<TalentsPathDataResponse> => {
  const url = `${baseURL}/talents`;
  return axios
    .get(url)
    .then((response) => {
      return {
        path: response.data.paths ?? [],
        pointsSpent: response.data.pointsSpent ?? 0,
        maxTalentPoints: response.data.maxPoints ?? 0,
      };
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
