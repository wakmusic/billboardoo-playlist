import React from "react";
import * as S from "./styled";

const Music = ({ item }) => {
  return (
    <S.MusicBox>
      <S.MusicImg />
      <S.MusicName>{item.name}</S.MusicName>
      <S.MusicSinger>{item.singer}</S.MusicSinger>
    </S.MusicBox>
  );
};

export default Music;
