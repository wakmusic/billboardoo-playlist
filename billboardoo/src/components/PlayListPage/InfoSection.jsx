import React from "react";
import Public from "../../assets/svgs/Public.svg";
import Sharing from "../../assets/svgs/Sharing.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import ModifyIcon from "../../assets/svgs/ModifyIcon.svg";
import * as S from "./styled";

const InfoSection = ({ playlistInfo, setModalBool }) => {
  return (
    <S.ProfileBox>
      <S.ProfileSettingIcon src={Public} />
      <S.ProfileImg src={playlistInfo.image || DefaultPlaylist} />
      <S.NameLayout>
        <S.ProfileName>{playlistInfo.title}</S.ProfileName>
        <S.ModifyButton src={ModifyIcon} />
      </S.NameLayout>
      <S.LoginPlatform>{playlistInfo.creator}</S.LoginPlatform>
      <S.LogoutButton
        onClick={() => {
          setModalBool(true);
        }}
      >
        <img src={Sharing} />
        공유하기
      </S.LogoutButton>
    </S.ProfileBox>
  );
};

export default InfoSection;
