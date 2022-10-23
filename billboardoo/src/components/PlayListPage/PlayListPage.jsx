import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from "../Modal/Modal";
import PageItroduceBox from "../PageItroduceBox/PageItroduceBox";
import InfoSection from "./InfoSection";
import MusicSection from "./MusicSection";
import * as S from "./styled";

const PlaylistPage = () => {
  const linkInputRef = useRef();
  const playlistKey = localStorage.getItem("playlistKey");
  const [copyModalBool, setCopyModalBool] = useState(false);
  const [deleteModalBool, setDeleteModalBool] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState({});
  const [musicList, setMusicList] = useState([]);
  const [listLink, setListLink] = useState(`bbrd.me/${playlistKey}`);

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

  //플레이 리스트 내에 노래 삭제 함수
  const deleteMusic = () => {
    const musicId = localStorage.getItem("musicId");
    let copySonglist = playlistInfo.songlist.filter((x) => {
      return x != musicId;
    });
    setPlaylistInfo({ ...playlistInfo, songlist: copySonglist });
    axios
      .post(`/api/playlist/edit/${playlistInfo.key}`, {
        title: playlistInfo.title,
        image: playlistInfo.image,
        songlist: copySonglist,
        public: playlistInfo.public,
        clientId: playlistInfo.clientId,
      })
      .then((res) => {
        alert("삭제에 성공했습니다");
        localStorage.removeItem("musicId");
        setDeleteModalBool(false);
        window.location.reload();
      });
  };

  //플레이리스트 주소 복사
  const onCopyLink = () => {
    navigator.clipboard.writeText(listLink);
    alert("복사되었습니다");
  };

  return (
    <S.Container>
      {copyModalBool && (
        <Modal
          leftText="닫기"
          leftEvent={() => {
            setCopyModalBool(false);
            localStorage.removeItem("musicId");
          }}
          rightText="복사"
          rightEvent={onCopyLink}
        >
          <S.ModalTitle>플레이리스트 공유</S.ModalTitle>
          <S.ModalText>나만의 플레이리스트를 공유해보세요</S.ModalText>
          <S.PlaylistLink ref={linkInputRef} value={listLink} />
        </Modal>
      )}
      {deleteModalBool && (
        <Modal
          leftText="취소"
          leftEvent={() => {
            setDeleteModalBool(false);
          }}
          rightText="삭제"
          rightEvent={deleteMusic}
        >
          <S.ModalTitle>삭제</S.ModalTitle>
          <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
        </Modal>
      )}
      <S.TestHeader />
      <PageItroduceBox pageTitle="MYPAGE" />
      <S.InfoLayout>
        <InfoSection
          playlistInfo={playlistInfo}
          setCopyModalBool={setCopyModalBool}
        />
        <MusicSection
          setDeleteModalBool={setDeleteModalBool}
          playlistInfo={playlistInfo}
          setPlaylistInfo={setPlaylistInfo}
          musicList={musicList}
        />
      </S.InfoLayout>
      {/* <S.TestHeader />
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
      </S.MusicSection> */}
    </S.Container>
  );
};

export default PlaylistPage;
