import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../assets/svgs/DefaultProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ userInfo }) => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
    localStorage.removeItem("playlistKey");
  };

  return (
    <S.PorfileSection>
      <S.IntroduceText>MY PAGE</S.IntroduceText>
      <S.LogoutText onClick={onClickLogout}>로그아웃</S.LogoutText>
      <S.NotProfile>
        <img src={userInfo.profile || DefaultProfile} />
      </S.NotProfile>
      <S.TextLayout>
        <S.NickNameText>{userInfo.name}</S.NickNameText>
        <S.TextGuideLine />
        <S.TypeText>{userInfo.platform}</S.TypeText>
      </S.TextLayout>
    </S.PorfileSection>
  );
};

export default ProfileSection;
