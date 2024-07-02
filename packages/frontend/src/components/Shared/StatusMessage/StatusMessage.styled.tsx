import { styled, css } from "styled-components";
import { Status } from "./types";
import { colors } from "@/styles/theme";

const getStatusStyles = (status: Status) => {
  switch (status) {
    case "success":
      return css`
        background-color: ${colors.darkSlateGray};
        color: ${colors.default};
        border: 1px solid ${colors.silver};
      `;
    case "error":
      return css`
        background-color: ${colors.danger};
        color: ${colors.default};
        border: 1px solid ${colors.darkSlateGray};
      `;
    case "warning":
      return css`
        background-color: ${colors.info};
        color: ${colors.darkerGray};
        border: 1px solid ${colors.cornFlowerBlue};
      `;
    case "info":
    default:
      return css`
        background-color: ${colors.steelBlue};
        color: ${colors.default};
        border: 1px solid ${colors.silver};
      `;
  }
};

export const Message = styled.div<{ status: Status; minwidth?: string }>`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 0.4rem 0 ${colors.default};
  ${({ status }) => getStatusStyles(status)}
  ${({ minwidth }) => minwidth && `min-width: ${minwidth};`}

  @media (max-width: 1030px) {
    width: 80%;
    padding: 8px;
  }
`;
