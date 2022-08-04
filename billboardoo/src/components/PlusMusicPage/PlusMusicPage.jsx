import React from "react";
import Music from "./Music";
import * as S from "./styled";

const PlusMusicPage = () => {
  return (
    <S.Container>
      <S.testHeader />
      <S.MusicSection>
        <S.TitleSection>재생 목록 노래 추가</S.TitleSection>
        <S.SearchBar></S.SearchBar>
        <Music></Music>
      </S.MusicSection>
    </S.Container>
  );
};

export default PlusMusicPage;
