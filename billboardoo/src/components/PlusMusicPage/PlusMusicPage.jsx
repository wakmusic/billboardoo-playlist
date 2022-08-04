import React from "react";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import Music from "./Music";
import * as S from "./styled";

const PlusMusicPage = () => {
  return (
    <S.Container>
      <S.testHeader />
      <S.MusicSection>
        <S.TitleSection>재생 목록 노래 추가</S.TitleSection>
        <S.SearchBar></S.SearchBar>
        <S.ClassificationLayout>
          <S.ClassificationName>인기 곡</S.ClassificationName>
          <S.ArrowLayout>
            <S.NextButtonLeft>
              <img src={ArrowRight} />
            </S.NextButtonLeft>
            <S.MusicLayout>
              <Music />
              <Music />
              <Music />
              <Music />
              <Music />
              <Music />
            </S.MusicLayout>
            <S.NextButtonRight>
              <img src={ArrowLeft} />
            </S.NextButtonRight>
          </S.ArrowLayout>
        </S.ClassificationLayout>
      </S.MusicSection>
    </S.Container>
  );
};

export default PlusMusicPage;
