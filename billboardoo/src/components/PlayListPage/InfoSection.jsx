import React, { useState } from "react";
import Public from "../../assets/svgs/Public";
import Sharing from "../../assets/svgs/Sharing.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import ModifyIcon from "../../assets/svgs/ModifyIcon.svg";
import * as S from "./styled";
import axios from "axios";

const InfoSection = ({
  playlistInfo,
  setCopyModalBool,
  setModifyModalBool,
  setPlaylistInfo,
}) => {
  const changePublic = () => {
    setPlaylistInfo({ ...playlistInfo, public: !playlistInfo.public });
    axios.post(`/api/playlist/edit/${playlistInfo.key}`, {
      title: playlistInfo.title,
      image: playlistInfo.image,
      songlist: playlistInfo.songlist,
      public: !playlistInfo.public,
      clientId: playlistInfo.clientId,
    });
  };

  return (
    <S.ProfileBox>
      <S.ProfileSettingIcon onClick={changePublic}>
        <Public on_off={playlistInfo.public} />
      </S.ProfileSettingIcon>
      <S.ProfileImg src={playlistInfo.image || DefaultPlaylist} />
      <S.NameLayout>
        <S.ProfileName>{playlistInfo.title}</S.ProfileName>
        <S.ModifyButton
          src={ModifyIcon}
          onClick={() => {
            setModifyModalBool(true);
          }}
        />
      </S.NameLayout>
      <S.LoginPlatform>{playlistInfo.creator}</S.LoginPlatform>
      <S.LogoutButton
        onClick={() => {
          setCopyModalBool(true);
        }}
      >
        <img src={Sharing} />
        공유하기
      </S.LogoutButton>
    </S.ProfileBox>
  );
};

export default InfoSection;
