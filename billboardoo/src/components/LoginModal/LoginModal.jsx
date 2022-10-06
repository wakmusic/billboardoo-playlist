import React from "react";
import { loginTypeInfo } from "../../common/LoginTypeInfo";
import LoginBox from "./LoginBox";
import WTVM from "../../assets/imgs/WAKTAKVERSEMUSIC_Logo.png";
import * as S from "./styled";

const LoginModal = () => {
  return (
    <S.Container>
      <S.ModalBox>
        <img src={WTVM} />
        <S.Pointer />
        <S.SubTitle>계정 로그인 방법을 선택해주세요</S.SubTitle>
        <S.LoginBoxLayout>
          {loginTypeInfo.map((item, index) => {
            return (
              <LoginBox name={item.name} key={index}>
                <S.BrandIconBox color={item.color}>
                  <img src={item.image} />
                </S.BrandIconBox>
                <S.LoginBoxText>{item.text}로 로그인하기</S.LoginBoxText>
              </LoginBox>
            );
          })}
        </S.LoginBoxLayout>
      </S.ModalBox>
    </S.Container>
  );
};

export default LoginModal;
