import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Black_Logo from "../../assets/svg/Black_Logo.svg";
import Twitch from "../../assets/svg/Twitch.svg";
import Naver from "../../assets/svg/Naver.svg";
import Google from "../../assets/svg/Google.svg";
import * as S from "./styled";

const LoginModal = () => {
  const baseURL = "https://billboardoo.com";

  const onClickLogin = (e) => {
    const { name } = e.target;
    console.log(name);
    window.location = `https://billboardoo.com/auth/login/${name}`;
  };

  return (
    <S.Container>
      <S.ModalBox>
        <img src={Black_Logo} />
        <S.Pointer />
        <S.Text>billboardoo 계정 로그인 방법을 선택해주세요</S.Text>
        <S.LoginBox
          name="twitch"
          onClick={onClickLogin}
          style={{ marginBottom: "20px" }}
        >
          <S.BrandIconBox color="#BF94FF">
            <img src={Twitch} />
          </S.BrandIconBox>
          <S.LoginBoxText>트위치로 로그인하기</S.LoginBoxText>
        </S.LoginBox>
        <S.LoginBox
          name="naver"
          onClick={onClickLogin}
          style={{ marginBottom: "20px" }}
        >
          <S.BrandIconBox color="#00CB6D">
            <img src={Naver} />
          </S.BrandIconBox>
          <S.LoginBoxText>네이버로 로그인하기</S.LoginBoxText>
        </S.LoginBox>
        <S.LoginBox onClick={onClickLogin} name="google">
          <S.BrandIconBox color="#ffffff">
            <img src={Google} />
          </S.BrandIconBox>
          <S.LoginBoxText>구글로 로그인하기</S.LoginBoxText>
        </S.LoginBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default LoginModal;
