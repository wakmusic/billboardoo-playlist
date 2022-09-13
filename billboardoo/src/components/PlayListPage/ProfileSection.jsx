import React from "react";
import DefaultProfile from "../../assets/svg/DefalutProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ userInfo }) => {
  return (
    <S.PorfileSection>
      <S.IntroduceText>MY PAGE</S.IntroduceText>
      <S.NotProfile>
        <img src={userInfo.photo || DefaultProfile} />
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
