import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/Modal";
import PageItroduceBox from "../PageItroduceBox/PageItroduceBox";
import InfoSection from "./InfoSection";
import MusicSection from "./MusicSection";
import * as S from "./styled";

const PlaylistPage = () => {
  const linkInputRef = useRef();
  const params = useParams();
  const playlistKey = localStorage.getItem("playlistKey") || params.id;
  const [playlistCertified, setPlaylistCertified] = useState(true);
  const [copyModalBool, setCopyModalBool] = useState(false);
  const [modifyModalBool, setModifyModalBool] = useState(false);
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
      if (res.data.clientId != localStorage.getItem("clientId")) {
        setPlaylistCertified(false);
      }
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

  //playlistInfo title 변경 함수
  const playlistTitleChange = (e) => {
    setPlaylistInfo({ ...playlistInfo, title: e.target.value });
  };

  const changePlaylistTitle = () => {
    axios
      .post(`/api/playlist/edit/${playlistInfo.key}`, playlistInfo)
      .then((res) => {
        setModifyModalBool(false);
      });
  };

  //플레이 리스트 내에 노래 삭제 함수
  const deleteMusic = () => {
    const musicId = localStorage.getItem("musicId");
    let copySonglist = playlistInfo.songlist.filter((x) => {
      return x != musicId;
    });
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
      {modifyModalBool && (
        <Modal
          leftText="취소"
          leftEvent={() => {
            setModifyModalBool(false);
          }}
          rightText="변경"
          rightEvent={changePlaylistTitle}
        >
          <S.ModalTitle>재생 목록 이름 수정</S.ModalTitle>
          <S.IntroduceText>
            수정할 재생목록의 이름을 입력해주세요
          </S.IntroduceText>
          <S.NameInput
            onChange={playlistTitleChange}
            value={playlistInfo.title}
            placeholder="이름을 입력해주세요"
          />
        </Modal>
      )}
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
          <S.PlaylistLink onClick={onCopyLink} ref={linkInputRef}>
            {listLink}
          </S.PlaylistLink>
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
          playlistCertified={playlistCertified}
          setPlaylistInfo={setPlaylistInfo}
          setModifyModalBool={setModifyModalBool}
          playlistInfo={playlistInfo}
          setCopyModalBool={setCopyModalBool}
        />
        <MusicSection
          playlistCertified={playlistCertified}
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
