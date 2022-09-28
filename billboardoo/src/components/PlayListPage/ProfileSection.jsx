import React from "react";
import DefaultProfile from "../../assets/svgs/DefalutProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ userInfo }) => {
  return (
    <S.PorfileSection>
      <S.IntroduceText>MY PAGE</S.IntroduceText>
      <S.LogoutText>로그아웃</S.LogoutText>
      <S.NotProfile>
        <img src={userInfo.profile || DefaultProfile} />
      </S.NotProfile>
      <S.TextLayout>
        <S.NickNameText>{userInfo.name}</S.NickNameText>
        <S.TextGuideLine />
        <S.TypeText>{userInfo.loginType}</S.TypeText>
      </S.TextLayout>
    </S.PorfileSection>
  );
};

export default ProfileSection;
