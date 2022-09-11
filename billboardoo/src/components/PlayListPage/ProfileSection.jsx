import React from "react";
import DefaultProfile from "../../assets/svg/DefalutProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ profile }) => {
  return (
    <S.PorfileSection>
      <S.IntroduceText>MY PAGE</S.IntroduceText>
      <S.NotProfile>
        <img src={profile} />
      </S.NotProfile>
      <S.TextLayout>
        <S.NickNameText>닉네임</S.NickNameText>
        <S.TextGuideLine />
        <S.IdText>biob1121</S.IdText>
      </S.TextLayout>
    </S.PorfileSection>
  );
};

export default ProfileSection;
