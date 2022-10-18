import axios from "axios";
import FindIcon from "../../assets/svgs/FindIcon.svg";
import React, { useEffect, useState } from "react";
import * as S from "./styled";

const PlusMusicPage = () => {
  return (
    <S.Container>
      <S.testHeader />
      <S.FindLayout>
        <S.MainTitleLayout>
          <S.MainSubTitle>WAKTAVERSE MUSIC</S.MainSubTitle>
          <S.MainTitle>재생 목록 노래 추가</S.MainTitle>
        </S.MainTitleLayout>
        <S.MainLine />
        <S.MainFindInputBox>
          <S.FindInputFilter></S.FindInputFilter>
          <S.FindInput placeholder="검색어를 입력해주세요" />
          <S.FindIcon src={FindIcon} />
        </S.MainFindInputBox>
      </S.FindLayout>
      <S.appendMusicLayout>
        <S.MusicFilterLayout>
          
        </S.MusicFilterLayout>
      </S.appendMusicLayout>
    </S.Container>
  );
};

export default PlusMusicPage;
