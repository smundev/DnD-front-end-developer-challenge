import { styled } from "styled-components";
import { colors, breakpoints } from "@/styles/theme";

export const TalentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  gap: 3rem;
  box-shadow: 0 0 0.5rem 0 ${colors.lightGray};
  border: 1px solid ${colors.darkGray};
  border-radius: 0.3rem;
  background-color: ${colors.darkerGray};
  padding: 1rem;

  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const TalentStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 50px;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TalentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: ${breakpoints.lg}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const TalentPoints = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  width: 190px;
  height: 95px;
  border: 1px solid ${colors.darkGray};
  box-shadow: 0 0 0.25rem 0 ${colors.lightGray};
  background-color: ${colors.darkerGray};

  @media (max-width: ${breakpoints.lg}) {
    padding: 0.5rem;
    width: 100%;
    height: auto;
  }
`;
export const TalentPointsValue = styled.span<{ spent: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ spent }) => (spent === "true" ? colors.danger : colors.default)};
`;

export const TalentPointsLabel = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.cornFlowerBlue};
`;

export const TalentPointsResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid ${colors.cornFlowerBlue};
  border-radius: 0.3rem;
  background-color: ${colors.lightGray};
  color: ${colors.default};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${colors.darkSlateGray};
  }
`;

export const TalentRowTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.silver};

  @media (max-width: ${breakpoints.lg}) {
    font-size: 1.2rem;
  }
`;

export const TalentRowSkills = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    position: absolute;
    height: 15px;
    background-color: ${colors.lightGray};
    border-top: ${colors.silver} 1px solid;
    border-bottom: ${colors.silver} 1px solid;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: ${breakpoints.lg}) {
      width: 0;
    }
  }

  > span {
    position: relative;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  > span.active + span::after {
    content: "";
    position: absolute;
    top: 50%;
    right: calc(100% + 5px);
    width: calc(100% + 50px);
    height: 15px;
    box-shadow: 0 0 1rem 0 ${colors.cornFlowerBlue};
    filter: blur(1px);
    background: linear-gradient(
      90deg,
      ${colors.cornFlowerBlue},
      ${colors.steelBlue},
      ${colors.secondary},
      ${colors.cornFlowerBlue}
    );
    background-size: 200% 100%;
    transform: translateY(-50%);
    border-top: ${colors.default} 1px solid;
    border-bottom: ${colors.default} 1px solid;
    animation: gradientShift 2s linear reverse infinite;

    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  @media (max-width: ${breakpoints.md}) {
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
`;
