import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InfoSection from "./InfoSection";
import MusicListBox from "./MusicListBox";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistPage = () => {
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musicList, setMusicList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlaylistdetail();
  }, []);

  //플레이 리스트 상세정보 가져오는 함수
  const getPlaylistdetail = () => {
    const playlistKey = localStorage.getItem("playlistKey");
    axios.get(`/api/playlist/detail/${playlistKey}`).then((res) => {
      setPlaylistInfo(res.data);
      localStorage.setItem("playlistKey", res.data.key);
      getMusicList(res.data.songlist);
    });
  };

  const getMusicList = (songlist) => {
    if (songlist != []) {
      const musicKeyList = songlist.join();
      axios
        .get(`/api/search`, {
          params: {
            type: "ids",
            keyword: musicKeyList,
          },
        })
        .then((res) => {
          setMusicList(res.data);
        });
    }
  };

  const movePlusMusicPage = () => {
    navigate("/plus-music");
  };

  return (
    <S.PlaylistLayout>
      <S.TestHeader />
      <InfoSection playlistInfo={playlistInfo} />
      <S.MusicSection>
        <S.MusicSectionTitle>노래 목록</S.MusicSectionTitle>
        <S.MusicLine />
        <S.ListPlusBox onClick={movePlusMusicPage}>
          <S.PlusImg src={ListPlus} />
          <S.ListPlusTitle>노래 추가</S.ListPlusTitle>
        </S.ListPlusBox>
        {musicList.map((item, index) => {
          return (
            <MusicListBox
              playlistInfo={playlistInfo}
              setPlaylistInfo={setPlaylistInfo}
              item={item}
              key={index}
            />
          );
        })}
      </S.MusicSection>
    </S.PlaylistLayout>
  );
};

export default PlaylistPage;
