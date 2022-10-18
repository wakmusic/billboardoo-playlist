import React from "react";
import MusicPlus from "../../assets/svgs/MusicPlus.svg";
import * as S from "./styled";

const MusicBox = () => {
  return (
    <S.MusicBox>
      <S.MusicImageBack />
      <S.MusicImage />
      <S.MusicTextLayout>
        <S.MusicName>RE:Wind</S.MusicName>
        <S.MusicArtist>이세계 아이돌</S.MusicArtist>
      </S.MusicTextLayout>
      <S.MusicInfoText color="#202F61" right="90px">
        2022.08.19
      </S.MusicInfoText>
      <S.MusicInfoText color="#202F61" right="180px">
        2022.08.19
      </S.MusicInfoText>
      <S.MusicPlusButton>
        <img src={MusicPlus} />
      </S.MusicPlusButton>
    </S.MusicBox>
  );
};

export default MusicBox;
