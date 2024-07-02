import { Talent, TalentPath } from "@/types/TalentPaths";
import { useEffect, useState } from "react";
import { useSessionStorage } from "./useLocalStorage";
import { getTalentsData } from "../api/getTalentsInfo";

export type TalentPathsState = {
  path: TalentPath[];
  pointsSpent: number;
  maxTalentPoints: number;
};

const EMPTY_STATE = {
  path: [],
  pointsSpent: 0,
  maxTalentPoints: 0,
};

export const useTalent = () => {
  const [talentPaths, setTalentPaths] = useSessionStorage<TalentPathsState>(
    "talentPaths",
    EMPTY_STATE
  );
  const [loading, setLoading] = useState<boolean>(true);

  // fetch talents data from the backend
  useEffect(() => {
    //if the path is empty means it wasn't found in the session storage
    if (talentPaths.path.length === 0) fetchTalentsData();
  }, []);

  const fetchTalentsData = async () => {
    try {
      const talentsData = await getTalentsData();
      setTalentPaths(talentsData);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setTalentPaths(EMPTY_STATE);
      setLoading(false);
    }
  };

  const reloadTalents = () => {
    setLoading(true);
    setTalentPaths(EMPTY_STATE);
    fetchTalentsData();
  };

  // function to update the talent point state when clicked
  const updatePoint = (
    pathId: string,
    talentId: string,
    newStatus: boolean,
    currentStatus: boolean
  ) => {
    //if points already spent and its trying to activate a talent return
    if (talentPaths.pointsSpent === talentPaths.maxTalentPoints && newStatus)
      return;

    //update ONLY if status changed, otherwise return
    if (newStatus === currentStatus) return;

    //status changed, flag for edge cases to avoid unnecessary re-renders
    let pathsChanged = false;

    const newPaths: TalentPath[] = talentPaths.path.map((path) => {
      if (path.id === pathId) {
        const newChildren: Talent[] = path.children.map((talent, index) => {
          if (talent.id === talentId) {
            //check previous talent status if index is greater than 0
            if (index > 0) {
              const prevTalent = path.children[index - 1];
              //if the previous talent is not active return
              if (!prevTalent.active) return talent;
            }

            //deactivate a talent in between two active talents
            if (index < path.children.length - 1 && newStatus === false) {
              const nextTalent = path.children[index + 1];
              //if the next talent is active return
              if (nextTalent.active) return talent;
            }

            //if the sum of the newTalent + pointsSpent is greater than the max points return
            if (
              newStatus &&
              talent.points + talentPaths.pointsSpent >
                talentPaths.maxTalentPoints
            )
              return talent;

            return { ...talent, active: newStatus };
          }
          return talent;
        });
        return { ...path, children: newChildren };
      }
      //if it reached this point means the paths were updated
      pathsChanged = true;
      return path;
    });

    //if pathsChanged is true means the edge cases didn't happen, we can safely update the paths and pointsSpent
    if (pathsChanged) {
      //recalculate pointsSpent
      const newPointsSpent = newPaths.reduce((acc, path) => {
        return (
          acc +
          path.children.reduce((acc, talent) => {
            return acc + (talent.active ? talent.points : 0);
          }, 0)
        );
      }, 0);

      //Update paths state only for PATH and Points Spent - maxTalentPoints is constant
      setTalentPaths((prevState) => ({
        ...prevState,
        path: newPaths,
        pointsSpent: newPointsSpent,
      }));
    }
  };

  return {
    talentPaths,
    updatePoint,
    maxTalentPoints: talentPaths.maxTalentPoints,
    reloadTalents,
    loading,
  } as const;
};
