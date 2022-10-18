import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicBox from "./MusicBox";
import FindLayout from "./FindLayout";
import * as S from "./styled";

const PlusMusicPage = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    getChartMusic();
  }, []);

  const getChartMusic = () => {
    axios
      .get("/api/charts/weekly", {
        params: {
          limit: 10,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMusicList(res.data);
      });
  };

  return (
    <S.Container>
      <S.testHeader />
      <FindLayout />
      <S.appendMusicLayout>
        <S.MusicFilterLayout>
          <S.MusicFilter />
          <S.UpdateText>최종 업데이트 | 2022.10.10 16:03</S.UpdateText>
        </S.MusicFilterLayout>
        <S.MusicInfoBox>
          <S.MusicInfoName>곡 정보</S.MusicInfoName>
          <S.MusicInfoText color="#080F34" right="90px">
            조회수
          </S.MusicInfoText>
          <S.MusicInfoText color="#080F34" right="180px">
            출시일
          </S.MusicInfoText>
        </S.MusicInfoBox>
        {musicList.map((item, index) => {
          return <MusicBox item={item} key={index} />;
        })}
      </S.appendMusicLayout>
    </S.Container>
  );
};

export default PlusMusicPage;
