import React from "react";
import * as S from "./styled";

const Music = () => {
  return (
    <S.MusicBox>
      <S.MusicImg />
      <S.MusicName>곡 제목</S.MusicName>
      <S.MusicCount>22곡</S.MusicCount>
    </S.MusicBox>
  );
};

export default Music;
