import React from "react";
import ProfileSection from "./ProfileSection";
import ListBox from "./ListBox";
import * as S from "./styled";

const PlayListPage = () => {
  return (
    <S.Container>
      <S.TestHeader />
      <ProfileSection />
      <S.GuideLineBox>
        <S.GuideLineText>재생목록</S.GuideLineText>
        <S.GuideLineBoxLine />
        <S.PlayListlLayout>
          <ListBox />
        </S.PlayListlLayout>
      </S.GuideLineBox>
    </S.Container>
  );
};

export default PlayListPage;
