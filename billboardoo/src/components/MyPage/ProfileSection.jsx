import React from "react";
import DefaultProfile from "../../assets/svgs/DefaultProfile.svg";
import * as S from "./styled";

const ProfileSection = ({ userInfo }) => {
  const onClickLogout = () => {
    window.location.href = "/";
    localStorage.removeItem("playlistKey");
  };

  return <></>;
};

export default ProfileSection;
