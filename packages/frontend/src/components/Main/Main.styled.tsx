import { styled } from "styled-components";
import mainBackground from "@/assets/talent-calc-bg.png";
import { colors, breakpoints } from "@/styles/theme";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 0.7rem;
  box-shadow: 0 0 0.25rem 0 ${colors.primary};
  border: 1px solid ${colors.secondary};
  border-radius: 0.5rem;
  background-image: url(${mainBackground});
  background-size: contain;
  gap: 40px;

  @media (max-width: ${breakpoints.lg}) {
    gap: 45px;
    width: 100%;
    padding: 1.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const MainHeader = styled.header`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.default};
  text-align: center;
  background-color: ${colors.secondary};
`;

export const MainFooter = styled.footer`
  width: 100%;
  font-size: 1rem;
  color: ${colors.default};
  text-align: center;
  background-color: ${colors.secondary};
`;

export const MainContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 80px;

  @media (max-width: ${breakpoints.lg}) {
    gap: 30px;
    flex-direction: column;
  }
`;
