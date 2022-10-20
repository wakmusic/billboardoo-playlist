import React from "react";
import * as S from "./styled";

const PageItroduceBox = ({ pageTitle }) => {
  return (
    <S.IntroduceLayout>
      <S.MainTitleLayout>
        <S.MainSubTitle>WAKTAVERSE MUSIC</S.MainSubTitle>
        <S.MainTitle>{pageTitle}</S.MainTitle>
      </S.MainTitleLayout>
      <S.MainLine />
    </S.IntroduceLayout>
  );
};

export default PageItroduceBox;
