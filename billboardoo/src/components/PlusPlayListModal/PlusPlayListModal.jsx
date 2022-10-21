import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

const PlusPlaylistModal = (props) => {
  const { playlistBundle, setPlaylistBundle, userInfo, setPlusModalBool } = props;

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
        setPlusModalBool(false);
      setOnePlaylist({ ...onePlaylist, title: "" });
      window.location.reload();
    } else {
      alert("이름을 입력해주세요.");
    }
  };

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.ModalTitle>재생 목록 생성</S.ModalTitle>
        <S.IntroduceText>새로운 재생목록의 이름을 입력해주세요</S.IntroduceText>
        <S.NameInput
          onChange={onChangePlaylistName}
          value={onePlaylist.title}
          placeholder="이름을 입력해주세요"
        />
        <S.ButtonLayout>
          <S.MainButton
            onClick={() => {
              setPlusModalBool(false);
            }}
            background="#D1D5DF"
            color="#080F34"
          >
            취소
          </S.MainButton>
          <S.MainButton
            onClick={postAppendPlaylist}
            background="#202F61"
            color="#ffffff"
          >
            생성
          </S.MainButton>
        </S.ButtonLayout>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default PlusPlaylistModal;
