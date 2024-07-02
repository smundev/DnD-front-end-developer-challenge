import styled from "styled-components";
import spriteUrl from "../../assets/talent-icons-sprite.png";
import { IconName } from "../../types/Icons/types";
import { colors } from "../../styles/theme";

const ICON_SIZE = 50; // in pixels

type IconPosition = {
  [key: string]: { row: number; col: number };
};

//Map icons to their position in the sprite
const iconPositions: IconPosition = {
  STACK: { row: 1, col: 0 },
  FORK: { row: 1, col: 1 },
  CAKE: { row: 1, col: 2 },
  CROWN: { row: 1, col: 3 },
  SHIP: { row: 1, col: 4 },
  SCUBA: { row: 1, col: 5 },
  LIGHTNING: { row: 1, col: 6 },
  SKULL: { row: 1, col: 7 },
  STACK_ACTIVE: { row: 0, col: 0 },
  FORK_ACTIVE: { row: 0, col: 1 },
  CAKE_ACTIVE: { row: 0, col: 2 },
  CROWN_ACTIVE: { row: 0, col: 3 },
  SHIP_ACTIVE: { row: 0, col: 4 },
  SCUBA_ACTIVE: { row: 0, col: 5 },
  LIGHTNING_ACTIVE: { row: 0, col: 6 },
  SKULL_ACTIVE: { row: 0, col: 7 },
};

//helper functions to map the icon position in the sprite
const getBackgroundPosition = (row: number, col: number) => {
  return `-${col * ICON_SIZE}px -${row * ICON_SIZE}px`;
};

const getIconBackgroundPosition = (
  name: IconName,
  active: string = "false"
) => {
  const { row, col } =
    iconPositions[active === "true" ? `${name}_ACTIVE` : name];
  return getBackgroundPosition(row, col);
};

// Build Icon based on props and dynamic image from the sprite
export const StyledIcon = styled.span<{
  name: IconName;
  active: string;
  blocked: string;
}>`
  display: inline-block;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  background-image: url(${spriteUrl});
  background-repeat: no-repeat;
  box-shadow: 0 0 ${({ active }) => (active === "true" ? "1.0rem" : "0.5rem")} 0
    ${({ active }) =>
      active === "true" ? colors.cornFlowerBlue : colors.darkSlateGray};
  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
      ${({ active }) =>
        active === "true" ? colors.cornFlowerBlue : colors.darkSlateGray},
      ${({ active }) => (active === "true" ? colors.primary : colors.darkGray)}
    )
    1;

  z-index: 1;

  background-position: ${({ name, active }) =>
    getIconBackgroundPosition(name, active)};

  &:hover {
    border: 5px solid ${colors.cornFlowerBlue};
    cursor: pointer;
    background-position: ${({ name }) =>
      getIconBackgroundPosition(name, "true")};
    transition: all 0.5s;

    ${({ blocked, active }) =>
      blocked === "true" &&
      active === "false" &&
      `
      border: 5px solid ${colors.darkSlateGray};
      cursor: not-allowed;
      transition: none;
    `}
  }
`;
