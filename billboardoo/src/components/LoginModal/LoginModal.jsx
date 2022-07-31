import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Black_Logo from "../../assets/svg/Black_Logo.svg";
import Twitch from "../../assets/svg/Twitch.svg";
import Naver from "../../assets/svg/Naver.svg";
import * as S from "./styled";

const LoginModal = () => {
  const hiddenLoginButton = useRef();

  const [twitchState, setTwitchState] = useState({
    client_id: process.env.REACT_APP_TWITCH_ID,
    client_secret: process.env.REACT_APP_TWITCH_SECRET,
    grant_type: "client_credentials",
  });

  const [naverState, setNaverState] = useState({
    clientId: process.env.REACT_APP_NAVER_ID,
    callbackUrl: "http://localhost:3000/Login",
    isPopup: false,
    loginButton: {},
    callbackHandle: true,
  });

  const onTwitchLogin = () => {
    axios({
      method: "post",
      url: "https://id.twitch.tv/oauth2/token",
      params: twitchState,
    })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
      })
      .catch(() => {
        alert("로그인에 실패하셨습니다");
      });
  };

  const onNaverLogin = () => {
    hiddenLoginButton.current.children[0].click();
  };

  const initializeNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId(naverState);
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    localStorage.setItem("access_token", token);
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  return (
    <S.Container>
      <S.ModalBox>
        <img src={Black_Logo} />
        <S.Pointer />
        <S.Text>billboardoo 계정 로그인 방법을 선택해주세요</S.Text>
        <S.LoginBox onClick={onTwitchLogin} style={{ marginBottom: "20px" }}>
          <S.BrandIconBox color="#BF94FF">
            <img src={Twitch} />
          </S.BrandIconBox>
          <S.LoginBoxText>트위치로 로그인하기</S.LoginBoxText>
        </S.LoginBox>
        <div
          id="naverIdLogin"
          ref={hiddenLoginButton}
          style={{ display: "none" }}
        />
        <S.LoginBox onClick={onNaverLogin}>
          <S.BrandIconBox onClick={onNaverLogin} color="#00CB6D">
            <img src={Naver} />
          </S.BrandIconBox>
          <S.LoginBoxText>네이버로 로그인하기</S.LoginBoxText>
        </S.LoginBox>
      </S.ModalBox>
    </S.Container>
  );
};

export default LoginModal;
