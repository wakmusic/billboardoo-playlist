import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import ListBox from "./ListBox";
import ListPlus from "../../assets/svg/ListPlus.svg";
import * as S from "./styled";

const PlayListPage = () => {
  const [playList, setPlayList] = useState([]);

  return (
    <S.Container>
      <S.TestHeader />
      <ProfileSection />
      <S.GuideLineBox>
        <S.GuideLineText>재생목록</S.GuideLineText>
        <S.GuideLineBoxLine />
        <S.PlayListlLayout>
          <ListBox />
          <S.ListPlusBox>
            <S.PlusImg src={ListPlus} />
            <S.ListPlusTitle>재생목록 추가</S.ListPlusTitle>
          </S.ListPlusBox>
        </S.PlayListlLayout>
      </S.GuideLineBox>
    </S.Container>
  );
};

export default PlayListPage;
