import React from "react";
import InfoSection from "./InfoSection";
import MusicListBox from "./MusicListBox";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistPage = () => {
  return (
    <S.PlaylistLayout>
      <S.TestHeader />
      <InfoSection />
      <S.MusicSection>
        <S.MusicSectionTitle>노래 목록</S.MusicSectionTitle>
        <S.MusicLine />
        <S.ListPlusBox>
          <S.PlusImg src={ListPlus} />
          <S.ListPlusTitle>노래 추가</S.ListPlusTitle>
        </S.ListPlusBox>
        <MusicListBox />
      </S.MusicSection>
    </S.PlaylistLayout>
  );
};

export default PlaylistPage;
