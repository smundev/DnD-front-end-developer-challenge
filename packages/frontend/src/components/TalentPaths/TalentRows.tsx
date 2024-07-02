import {
  TalentRow,
  TalentsContainer,
  TalentStatus,
  TalentPoints,
  TalentPointsValue,
  TalentPointsLabel,
  TalentRowTitle,
  TalentRowSkills,
  TalentPointsResetButton,
} from "./TalentRows.styled";
import { Icon } from "@/components/Icon/Icon";
import { useTalent } from "@/hooks/useTalent";
import StatusMessage from "../Shared/StatusMessage/StatusMessage";
import { PacmanLoader } from "react-spinners";

export const TalentRows = () => {
  const { talentPaths, updatePoint, maxTalentPoints, loading, reloadTalents } =
    useTalent();

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    pathId: string,
    talentId: string,
    currentStatus: boolean
  ) => {
    if (event.button === 0) {
      updatePoint(pathId, talentId, true, currentStatus);
    } else if (event.button === 2) {
      updatePoint(pathId, talentId, false, currentStatus);
    }
  };

  const handleReset = () => {
    reloadTalents();
  };

  return (
    <>
      <TalentsContainer>
        <TalentStatus>
          {talentPaths.path.length === 0 && !loading && (
            <StatusMessage status="success">
              No paths found - Back End must be down :(
            </StatusMessage>
          )}
          {talentPaths.path.length > 0 &&
            talentPaths.pointsSpent == maxTalentPoints && (
              <StatusMessage status="error">
                You have used all your points!
              </StatusMessage>
            )}
          {talentPaths.path.length > 0 && talentPaths.pointsSpent == 0 && (
            <StatusMessage status="info">
              Click on the icons to spend your points
            </StatusMessage>
          )}

          {loading && talentPaths.path.length == 0 && (
            <StatusMessage status="success" minwidth="100px">
              <PacmanLoader size={15} color="white" />
            </StatusMessage>
          )}
        </TalentStatus>

        {talentPaths.path.map((path) => (
          <TalentRow key={path.id}>
            <TalentRowTitle>{path.name}</TalentRowTitle>
            <TalentRowSkills>
              {path.children.map((talent) => (
                <Icon
                  key={talent.id}
                  iconName={talent.icon}
                  onClick={(event) =>
                    handleClick(event, path.id, talent.id, talent.active)
                  }
                  isActive={talent.active}
                  onContextMenu={(event) => {
                    event.preventDefault();
                    handleClick(event, path.id, talent.id, talent.active);
                  }}
                  title={`Requires ${talent.points} points`}
                  blockedOnHover={talentPaths.pointsSpent == maxTalentPoints}
                />
              ))}
            </TalentRowSkills>
          </TalentRow>
        ))}
      </TalentsContainer>
      <TalentPoints>
        <TalentPointsValue
          spent={talentPaths.pointsSpent == maxTalentPoints ? "true" : "false"}
        >
          {talentPaths.pointsSpent}/{maxTalentPoints}
        </TalentPointsValue>
        <TalentPointsLabel>Points Spent</TalentPointsLabel>
        <TalentPointsResetButton onClick={handleReset}>
          Reset
        </TalentPointsResetButton>
      </TalentPoints>
    </>
  );
};
