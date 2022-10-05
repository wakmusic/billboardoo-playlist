import React from "react";
import LoginBox from "./LoginBox";
import WTVM from "../../assets/imgs/WAKTAKVERSEMUSIC_Logo.png";
import Apple from "../../assets/svgs/Apple.svg";
import Naver from "../../assets/svgs/Naver.svg";
import Google from "../../assets/svgs/Google.svg";
import * as S from "./styled";

const LoginModal = () => {
  return (
    <S.Container>
      <S.ModalBox>
        <img src={WTVM} />
        <S.Pointer />
        <S.SubTitle>계정 로그인 방법을 선택해주세요</S.SubTitle>
        <LoginBox name="Apple">
          <S.BrandIconBox color="#000000">
            <img src={Apple} />
          </S.BrandIconBox>
          <S.LoginBoxText>애플로 로그인하기</S.LoginBoxText>
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
