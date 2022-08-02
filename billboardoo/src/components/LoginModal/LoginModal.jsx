import React from "react";
import LoginBox from "./LoginBox";
import Black_Logo from "../../assets/svg/Black_Logo.svg";
import Twitch from "../../assets/svg/Twitch.svg";
import Naver from "../../assets/svg/Naver.svg";
import Google from "../../assets/svg/Google.svg";
import * as S from "./styled";

const LoginModal = () => {
  return (
    <S.Container>
      <S.ModalBox>
        <img src={Black_Logo} />
        <S.Pointer />
        <S.Text>billboardoo 계정 로그인 방법을 선택해주세요</S.Text>
        <LoginBox name="twitch">
          <S.BrandIconBox color="#BF94FF">
            <img src={Twitch} />
          </S.BrandIconBox>
          <S.LoginBoxText>트위치로 로그인하기</S.LoginBoxText>
        </LoginBox>
        <LoginBox name="naver">
          <S.BrandIconBox color="#00CB6D">
            <img src={Naver} />
          </S.BrandIconBox>
          <S.LoginBoxText>네이버로 로그인하기</S.LoginBoxText>
        </LoginBox>
        <LoginBox name="google">
          <S.BrandIconBox color="#ffffff">
            <img src={Google} />
          </S.BrandIconBox>
          <S.LoginBoxText>구글로 로그인하기</S.LoginBoxText>
        </LoginBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default LoginModal;
