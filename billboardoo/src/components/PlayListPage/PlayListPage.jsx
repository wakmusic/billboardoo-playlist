import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InfoSection from "./InfoSection";
import MusicListBox from "./MusicListBox";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistPage = ({ playlistInfo }) => {
  const [musicList, setMusicList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMusicList();
  }, []);

  const getMusicList = () => {
    const musicKeyList = playlistInfo.songlist.join();
    axios.get(`/api/charts/search/ids/${musicKeyList}`).then((res) => {
      setMusicList(res.data);
    });
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
          return <MusicListBox item={item} />;
        })}
      </S.MusicSection>
    </S.PlaylistLayout>
  );
};

export default PlaylistPage;
