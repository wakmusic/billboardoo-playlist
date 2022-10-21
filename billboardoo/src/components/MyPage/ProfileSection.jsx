import React, { useEffect, useState } from "react";
import ProfileSetting from "../../assets/svgs/ProfileSetting.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const ProfileSection = ({ userInfo, platformText }) => {
  const navigate = useNavigate();
  const profileURL = `https://beta.wakmusic.xyz/static/profile/${userInfo.profile}.png`;

  const onClickProfileSelect = () => {
    navigate("/profile-select");
  };

  const onClickLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("playlistKey");
  };

  return (
    <S.ProfileBox>
      <S.ProfileSettingIcon
        onClick={onClickProfileSelect}
        src={ProfileSetting}
      />
      <S.ProfileImg src={profileURL} />
      <S.ProfileName>{userInfo.name}</S.ProfileName>
      <S.LoginPlatform>{platformText}</S.LoginPlatform>
      <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
    </S.ProfileBox>
  );
};

export default ProfileSection;
