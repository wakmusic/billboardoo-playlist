import React from "react";
import * as S from "./styled";

const ProfileSelectPage = () => {
  return (
    <S.MainLayout>
      <S.TestHeader />
      <S.TextLayout>
        <S.MainSubTitle>WAKTAVERSE MUSIC</S.MainSubTitle>
        <S.MainTitle>프로필을 선택해주세요</S.MainTitle>
      </S.TextLayout>
      <S.MainLine />
      <S.ProfileLayout>
        <S.TestProfile />
        <S.TestProfile />
        <S.TestProfile />
        <S.TestProfile />
        <S.TestProfile />
        <S.TestProfile />
        <S.TestProfile />
      </S.ProfileLayout>
    </S.MainLayout>
  );
};

export default ProfileSelectPage;
