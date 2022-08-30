import React, { useState } from "react";
import X from "../../assets/svg/X.svg";
import axios from "axios";
import * as S from "./styled";

const PlusPlayListModal = (props) => {
  const { playListBundle, setPlayListBundle, changeModalBool } = props;

  const [onePlayList, setOnePlayList] = useState({
    title: "",
    creator: "",
    platform: "", //로그인 유형 ex(google,naver,twitchs)
    image: "",
    songlist: ["팬서비스", "마지막재회", "봄여름가을겨울"],
    public: "false", //true, false
    clientId: "",
  });

  const onChangePlayListName = (e) => {
    setOnePlayList(e.target.value);
  };

  const postAppendPlayList = () => {
    if (playListBundle) {
      axios({});
      let copyPlayListBundle = [...playListBundle];
      copyPlayListBundle.push(onePlayList);
      setPlayListBundle(copyPlayListBundle);
      setOnePlayList({ ...onePlayList, name: "" });
      changeModalBool();
    } else {
      alert("이름을 입력해주세요.");
    }
  };

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.BackImg src={X} />
        <S.ModalTitle>재생목록 추가</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>새로운 재생목록의 이름을 입력해주세요</S.IntroduceText>
        <S.NameInput
          onChange={onChangePlayListName}
          value={onePlayList.name}
          placeholder="이름을 입력해주세요"
        />
        <S.PlusBox>
          <S.PlusButton onClick={postAppendPlayList}>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default PlusPlayListModal;
