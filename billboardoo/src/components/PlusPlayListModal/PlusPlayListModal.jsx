import React, { useState } from "react";
import X from "../../assets/svgs/X.svg";
import axios from "axios";
import * as S from "./styled";

const PlusPlaylistModal = (props) => {
  const { playlistBundle, setPlaylistBundle, changeModalBool, userInfo } =
    props;

  const [onePlaylist, setOnePlaylist] = useState({
    title: "",
    creator: userInfo.name,
    platform: "", //로그인 유형 ex(google,naver,twitchs)
    image: "",
    songlist: [],
    public: "false", //true, false
    clientId: userInfo.id,
  });

  const onChangePlaylistName = (e) => {
    if (onePlaylist.title.length < 20) {
      setOnePlaylist({ ...onePlaylist, title: e.target.value });
    }
  };

  const postAppendPlaylist = () => {
    if (onePlaylist.title) {
      axios.post().then((res) => {
        let copyPlaylistBundle = [...playlistBundle];
        copyPlaylistBundle.push(onePlaylist);
        setPlaylistBundle(copyPlaylistBundle);
      });
      setOnePlaylist({ ...onePlaylist, title: "" });
      changeModalBool();
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
            changeModalBool(false);
          }}
        />
        <S.ModalTitle>재생목록 추가</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>새로운 재생목록의 이름을 입력해주세요</S.IntroduceText>
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
