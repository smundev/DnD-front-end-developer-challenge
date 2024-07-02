import { IconNames } from "../../types/Icons/types";
import { StyledIcon } from "./Icon.styled";

type IconProps = {
  iconName: IconNames;
  isActive: boolean;
  title?: string;
  blockedOnHover?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const Icon = ({
  iconName,
  isActive,
  title,
  blockedOnHover = false,
  onClick,
  onContextMenu,
}: IconProps) => {
  return (
    <StyledIcon
      name={iconName}
      active={isActive ? "true" : "false"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      onContextMenu={onContextMenu}
      title={title}
      blocked={blockedOnHover ? "true" : "false"}
    />
  );
};
