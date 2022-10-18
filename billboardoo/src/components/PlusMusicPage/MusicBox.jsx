import React, { useEffect, useState } from "react";
import MusicPlus from "../../assets/svgs/MusicPlus.svg";
import * as S from "./styled";

const MusicBox = ({ item }) => {
  const [date, setDate] = useState("20" + item.date.toString());

  useEffect(() => {
    setDate(date.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3"));
  }, []);

  return (
    <S.MusicBox>
      <S.MusicImageBack />
      <S.MusicImage />
      <S.MusicTextLayout>
        <S.MusicName>{item.title}</S.MusicName>
        <S.MusicArtist>{item.artist}</S.MusicArtist>
      </S.MusicTextLayout>
      <S.MusicInfoText color="#202F61" right="180px">
        {date}
      </S.MusicInfoText>
      <S.MusicInfoText color="#202F61" right="90px">
        {item.views}
      </S.MusicInfoText>
      <S.MusicPlusButton>
        <img src={MusicPlus} />
      </S.MusicPlusButton>
    </S.MusicBox>
  );
};

export default MusicBox;
