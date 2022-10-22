import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import InfoSection from "./InfoSection";
import MusicListBox from "./MusicListBox";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistPage = () => {
  const linkInputRef = useRef();
  const playlistKey = localStorage.getItem("playlistKey");
  const [modalBool, setModalBool] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musicList, setMusicList] = useState([]);
  const [listLink, setListLink] = useState(`bbrd.me/${playlistKey}`);
  const navigate = useNavigate();

  useEffect(() => {
    getPlaylistdetail();
  }, []);

  //플레이 리스트 상세정보 가져오는 함수
  const getPlaylistdetail = () => {
    axios.get(`/api/playlist/detail/${playlistKey}`).then((res) => {
      setPlaylistInfo(res.data);
      localStorage.setItem("playlistKey", res.data.key);
      getMusicList(res.data.songlist);
    });
  };

  //ids로 곡정보 받아오기
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

  //
  const onCopyLink = () => {
    navigator.clipboard.writeText(listLink);
    alert("복사되었습니다");
  };

  const movePlusMusicPage = () => {
    navigate("/plus-music");
  };

  return (
    <S.PlaylistLayout>
      {modalBool && (
        <Modal
          leftText="닫기"
          leftEvent={() => {
            setModalBool(false);
          }}
          rightText="복사"
          rightEvent={onCopyLink}
        >
          <S.ModalTitle>플레이리스트 공유</S.ModalTitle>
          <S.ModalText>나만의 플레이리스트를 공유해보세요</S.ModalText>
          <S.PlaylistLink ref={linkInputRef} value={listLink} />
        </Modal>
      )}
      <S.TestHeader />
      <InfoSection playlistInfo={playlistInfo} setModalBool={setModalBool} />
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
