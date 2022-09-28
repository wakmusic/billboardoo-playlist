import React, { useState } from "react";
import X from "../../assets/svg/X.svg";
import axios from "axios";
import * as S from "./styled";

const PlusPlaylistModal = (props) => {
  const { playlistBundle, setPlaylistBundle, changeModalBool } = props;

  const [onePlaylist, setOnePlaylist] = useState({
    title: "",
    creator: "",
    platform: "", //로그인 유형 ex(google,naver,twitchs)
    image: "",
    songlist: [],
    public: "false", //true, false
    clientId: "",
  });

  const onChangePlaylistName = (e) => {
    setOnePlaylist(e.target.value);
  };

  const postAppendPlaylist = () => {
    if (playlistBundle) {
      axios({});
      let copyPlaylistBundle = [...playListBundle];
      copyPlaylistBundle.push(onePlaylist);
      setPlaylistBundle(copyPlaylistBundle);
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
          value={onePlayList.title}
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
