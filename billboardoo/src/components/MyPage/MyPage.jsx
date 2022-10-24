import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageItroduceBox from "../PageItroduceBox/PageItroduceBox";
import ProfileSection from "./ProfileSection";
import PlaylistSection from "./PlaylistSection";
import Modal from "../Modal/Modal";
import * as S from "./styled";
import { useEffect } from "react";

const MyPage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const [platformText, setPlatformText] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [plusModalBool, setPlusModalBool] = useState(false);
  const [deleteModalBool, setDeleteModalBool] = useState(false);
  const [playlistBundle, setPlaylistBundle] = useState([]);
  // {key, title, creator, platform, image}

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      userInfoSetting(res.data);
      getPlaylist(res.data.id);
      platformSelect(res.data.provider);
      if (res.data.first) {
        navigate("/profile-select");
      }
    });
  }, []);

  //플레이 리스트 목록 가져오기
  const getPlaylist = (userId) => {
    axios
      .get(`/api/playlist/list/${userId}`)
      .then((res) => {
        setPlaylistBundle(res.data.playlist);
      })
      .catch((res) => {
        alert("오류가 발생했습니다");
      });
  };

  //플레이 리스트 삭제 함수
  const deletePlayList = () => {
    axios
      .post(`/api/playlist/delete/${localStorage.getItem("playlistKey")}`, {
        clientId: userInfo.id,
      })
      .then((res) => {
        alert("삭제에 성공했습니다");
        window.location.reload();
      });
  };

  //추가할 플레이리스트 이름 설정 함수
  const onChangePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  //플레이리스트 추가 요청 API
  const postAppendPlaylist = () => {
    if (playlistName.trim()) {
      axios
        .post("/api/playlist/create", {
          title: playlistName,
          creator: userInfo.name,
          platform: userInfo.platform, //로그인 유형 ex(google,naver,twitchs)
          image: "",
          songlist: [],
          public: "false", //true, false
          clientId: userInfo.id,
        })
        .catch(() => {
          alert("실패하셨습니다");
        });
      setPlusModalBool(false);
      setPlaylistName("");
      window.location.reload();
    } else {
      alert("이름을 입력해주세요.");
      setPlaylistName("");
    }
  };

  //유저 로그인 플랫폼 표시 글 세팅 함수
  const platformSelect = (platform) => {
    switch (platform) {
      case "google":
        setPlatformText("구글로 로그인 중");
        break;
      case "naver":
        setPlatformText("네이버로 로그인 중");
        break;
      case "apple":
        setPlatformText("애플로 로그인 중");
        break;
    }
  };

  //유저 정보 가져오기 & 세팅
  const userInfoSetting = (data) => {
    switch (data.provider) {
      case "google":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.profile,
          platform: data.provider,
        });
        localStorage.setItem("clientId", data.id);
        break;
      case "naver":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.profile,
          platform: data.provider,
        });
        localStorage.setItem("clientId", data.id);
        break;
      //애플로그인 하실거면 이쪽 수정해주시면 돼용
      case "apple":
        setUserInfo({
          name: data.display_name,
          id: data.id,
          profile: data.profile,
          platform: data.provider,
        });
        localStorage.setItem("clientId", data.id);
        break;
    }
  };

  return (
    <S.Container>
      {plusModalBool && (
        <Modal
          leftText="취소"
          leftEvent={() => {
            setPlusModalBool(false);
          }}
          rightText="생성"
          rightEvent={postAppendPlaylist}
        >
          <S.ModalTitle>재생 목록 생성</S.ModalTitle>
          <S.IntroduceText>
            새로운 재생목록의 이름을 입력해주세요
          </S.IntroduceText>
          <S.NameInput
            onChange={onChangePlaylistName}
            value={playlistName}
            placeholder="이름을 입력해주세요"
          />
        </Modal>
      )}
      {deleteModalBool && (
        <Modal
          leftText="취소"
          leftEvent={() => {
            setDeleteModalBool(false);
          }}
          rightText="삭제"
          rightEvent={deletePlayList}
        >
          <S.ModalTextLayout>
            <S.ModalTitle>삭제</S.ModalTitle>
            <S.ModalText>정말 삭제하시겠습니까?</S.ModalText>
          </S.ModalTextLayout>
        </Modal>
      )}
      <S.TestHeader />
      <PageItroduceBox pageTitle="MYPAGE" />
      <S.InfoLayout>
        <ProfileSection userInfo={userInfo} platformText={platformText} />
        <PlaylistSection
          setPlusModalBool={setPlusModalBool}
          playlistBundle={playlistBundle}
          setDeleteModalBool={setDeleteModalBool}
          userInfo={userInfo}
        />
      </S.InfoLayout>
    </S.Container>
  );
};

export default MyPage;
