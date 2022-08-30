import React from "react";
import X from "../../assets/svg/X.svg";
import * as S from "./styled";

const SharingListModal = () => {
  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.BackImg src={X} />
        <S.ModalTitle>플레이리스트 공유</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>
          자신이 만든 플레이리스트를 공유해보세요
        </S.IntroduceText>
        <S.NameInput placeholder="링크가 없습니다" />
        <S.PlusBox>
          <S.PlusButton>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default SharingListModal;
