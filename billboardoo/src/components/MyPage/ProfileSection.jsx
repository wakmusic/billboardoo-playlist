import React, { useEffect, useState } from "react";
import DefaultProfile from "../../assets/svgs/DefaultProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ userInfo }) => {
  const [platformText, setPlatformText] = useState("");
  const profileURL = `https://beta.wakmusic.xyz/static/profile/${userInfo.profile}.png`;

  useEffect(() => {
    platformSelect(userInfo.platform);
  }, []);

  const platformSelect = (platform) => {
    switch (platform) {
      case "google":
        setPlatformText("구글로 로그인 중");
        break;
      case "naver":
        setPlatformText("네이버로 로그인 중");
        break;
      case "apple":
        setPlatformText("애플로 로그인 중");
        break;
    }
  };

  const onClickLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("playlistKey");
  };

  return (
    <S.ProfileBox>
      <S.ProfileImg src={profileURL} />
      <S.ProfileName>{userInfo.name}</S.ProfileName>
      <S.LoginPlatform>{platformText}</S.LoginPlatform>
      <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
    </S.ProfileBox>
  );
};

export default ProfileSection;
