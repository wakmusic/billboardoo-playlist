import React from "react";
import Black_Logo from "../../assets/svg/Black_Logo.svg";
import Twitch from "../../assets/svg/Twitch.svg";
import Naver from "../../assets/svg/Naver.svg";
import * as S from "./styled";

const LoginModal = () => {
  return (
    <S._Container>
      <S._ModalBox>
        <img src={Black_Logo} />
        <S._Pointer />
        <S._Text>billboardoo 계정 로그인 방법을 선택해주세요</S._Text>
        <S._LoginBox style={{ marginBottom: "20px" }}>
          <S._BrandIconBox color="#BF94FF">
            <img src={Twitch} />
          </S._BrandIconBox>
          <S._LoginBoxText>트위치로 로그인하기</S._LoginBoxText>
        </S._LoginBox>
        <S._LoginBox>
          <S._BrandIconBox color="#00CB6D">
            <img src={Naver} />
          </S._BrandIconBox>
          <S._LoginBoxText>네이버로 로그인하기</S._LoginBoxText>
        </S._LoginBox>
      </S._ModalBox>
    </S._Container>
  );
};

export default LoginModal;
