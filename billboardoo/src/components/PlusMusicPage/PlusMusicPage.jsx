import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicBox from "./MusicBox";
import FindLayout from "./FindLayout";
import * as S from "./styled";

const PlusMusicPage = () => {
  const [findMusicParams, setFindMusicParams] = useState({
    type: "title",
    sort: "popular",
    keyword: "",
  });
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    getChartMusic();
    getPlaylistdetail();
  }, []);

  const getPlaylistdetail = () => {
    const playlistKey = localStorage.getItem("playlistKey");
    axios.get(`/api/playlist/detail/${playlistKey}`).then((res) => {
      setPlaylistInfo(res.data);
      localStorage.setItem("playlistKey", res.data.key);
    });
  };

  //검색 키워드 변경 함수
  const onChangeKeyword = (e) => {
    const { value } = e.target;
    setFindMusicParams({ ...findMusicParams, keyword: value });
  };

  //음악 검색 함수
  const findMusic = (e) => {
    if (e.key == "Enter" && findMusicParams.keyword) {
      axios
        .get("/api/search", {
          params: findMusicParams,
        })
        .then((res) => {
          setMusicList(res.data);
        });
    }
  };

  //차트 가져오는 함수
  const getChartMusic = () => {
    axios
      .get("/api/charts/weekly", {
        params: {
          limit: 10,
        },
      })
      .then((res) => {
        setMusicList(res.data);
      });
  };

  return (
    <S.Container>
      <S.testHeader />
      <FindLayout findMusic={findMusic} onChangeKeyword={onChangeKeyword} />
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
          return (
            <MusicBox
              playlistInfo={playlistInfo}
              item={item}
              key={index}
              color={index % 2 == 0 ? "#E4E6EC" : "#EEEFF3"}
            />
          );
        })}
      </S.appendMusicLayout>
    </S.Container>
  );
};

export default PlusMusicPage;
