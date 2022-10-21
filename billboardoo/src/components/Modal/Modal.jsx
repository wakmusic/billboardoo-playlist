import React from "react";
import * as S from "./styled";

const Modal = ({ children }) => {
  return (
    <S.ModalBackGroud>
      <S.Container>
        <S.ModalContentBox>{children}</S.ModalContentBox>
        <S.ButtonLayout>
          <S.MainButton background="#D1D5DF" color="#080F34"></S.MainButton>
          <S.MainButton background="#202F61" color="#ffffff"></S.MainButton>
        </S.ButtonLayout>
      </S.Container>
    </S.ModalBackGroud>
  );
};

export default Modal;
