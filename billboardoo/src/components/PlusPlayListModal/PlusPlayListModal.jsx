import React from "react";
import * as S from "./styled";

export default function PlusPlayListModal() {
  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.ModalTitle>재생목록 추가</S.ModalTitle>
        <S.ModalPointer />
        <S.IntroduceText>새로운 재생목록의 이름을 입력해주세요</S.IntroduceText>
        <S.NameInput placeholder="이름을 입력해주세요" />
        <S.PlusBox>
          <S.PlusButton>생성하기</S.PlusButton>
        </S.PlusBox>
      </S.Container>
    </S.ModalBackGroud>
  );
}
