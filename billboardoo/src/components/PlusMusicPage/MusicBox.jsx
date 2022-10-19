import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicPlus from "../../assets/svgs/MusicPlus.svg";
import * as S from "./styled";

const MusicBox = ({ item, color, playlistInfo, setPlaylistInfo }) => {
  const playlistKey = localStorage.getItem("playlistKey");

  const appendMusic = () => {
    let copySonglist = [...playlistInfo.songlist];
    copySonglist.push(item.id);
    setPlaylistInfo({ ...playlistInfo, songlist: copySonglist });
    axios
      .post(`/api/playlist/edit/${playlistKey}`, {
        title: playlistInfo.title,
        image: playlistInfo.image,
        songlist: copySonglist,
        public: playlistInfo.public,
        clientId: playlistInfo.clientId,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <S.MusicBox color={color}>
      <S.MusicImageBack />
      <S.MusicImage />
      <S.MusicTextLayout>
        <S.MusicName>{item.title}</S.MusicName>
        <S.MusicArtist>{item.artist}</S.MusicArtist>
      </S.MusicTextLayout>
      <S.MusicInfoText color="#202F61" right="180px">
        {("20" + item.date.toString()).replace(
          /(\d{4})(\d{2})(\d{2})/,
          "$1.$2.$3"
        )}
      </S.MusicInfoText>
      <S.MusicInfoText color="#202F61" right="90px">
        {item.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </S.MusicInfoText>
      <S.MusicPlusButton onClick={appendMusic}>
        <img src={MusicPlus} />
      </S.MusicPlusButton>
    </S.MusicBox>
  );
};

export default MusicBox;
