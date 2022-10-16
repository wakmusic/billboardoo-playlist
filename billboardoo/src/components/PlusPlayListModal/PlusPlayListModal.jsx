import React, { useState } from "react";
import X from "../../assets/svgs/X.svg";
import axios from "axios";
import * as S from "./styled";

const PlusPlaylistModal = (props) => {
  const { playlistBundle, setPlaylistBundle, userInfo, setModalBool } = props;

  const [onePlaylist, setOnePlaylist] = useState({
    title: "",
    creator: userInfo.name,
    platform: userInfo.platform, //로그인 유형 ex(google,naver,twitchs)
    image: "",
    songlist: [],
    public: "false", //true, false
    clientId: userInfo.id,
  });

  //추가할 플레이리스트 이름 설정 함수
  const onChangePlaylistName = (e) => {
    setOnePlaylist({ ...onePlaylist, title: e.target.value });
  };

  //플레이리스트 추가 요청 API
  const postAppendPlaylist = () => {
    if (onePlaylist.title) {
      axios
        .post("/api/playlist/create", onePlaylist)
        .then((res) => {
          let copyPlaylistBundle = [...playlistBundle];
          copyPlaylistBundle.push(onePlaylist);
          setPlaylistBundle(copyPlaylistBundle);
        })
        .catch(() => {
          alert("실패하셨습니다");
        });
      setModalBool(false);
      setOnePlaylist({ ...onePlaylist, title: "" });
    } else {
      alert("이름을 입력해주세요.");
    }
  };

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.BackImg
          src={X}
          onClick={() => {
            setModalBool(false);
          }}
        />
        <S.ModalTitle>재생목록 추가</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>새로운 재생목록 이름 입력 (20자 이하)</S.IntroduceText>
        <S.NameInput
          onChange={onChangePlaylistName}
          value={onePlaylist.title}
          placeholder="이름을 입력해주세요"
        />
        <S.PlusBox>
          <S.PlusButton onClick={postAppendPlaylist}>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default PlusPlaylistModal;
