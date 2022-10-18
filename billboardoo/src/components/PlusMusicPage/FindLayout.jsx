import React from "react";
import FindIcon from "../../assets/svgs/FindIcon.svg";
import * as S from "./styled";

const FindLayout = () => {
  return (
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
  );
};

export default FindLayout;
