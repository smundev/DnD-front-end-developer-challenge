import { MainHeader, MainFooter, Main, MainContainer } from "./Main.styled";
import { TalentRows } from "@/components/TalentPaths/TalentRows";

export const MainLayout = () => {
  return (
    <Main>
      <MainHeader>Rune Mastery Loadout Talent Calculator 9000</MainHeader>
      <MainContainer>
        <TalentRows />
      </MainContainer>
      <MainFooter>All rights reserved. 2024</MainFooter>
    </Main>
  );
};
