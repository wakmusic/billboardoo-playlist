import React, { useState, useRef } from "react";
import X from "../../assets/svgs/X.svg";
import * as S from "./styled";

const SharingListModal = () => {
  const linkInputRef = useRef();
  const [listLink, setListLink] = useState("sdfsd");

  const onCopyLink = () => {
    navigator.clipboard.writeText(listLink);
    alert("복사되었습니다");
  };

  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.BackImg src={X} />
        <S.ModalTitle>플레이리스트 공유</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>
          자신이 만든 플레이리스트를 공유해보세요
        </S.IntroduceText>
        <S.LinkInput
          ref={linkInputRef}
          value={listLink}
          placeholder="링크가 없습니다"
        />
        <S.PlusBox>
          <S.PlusButton onClick={onCopyLink}>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default SharingListModal;
