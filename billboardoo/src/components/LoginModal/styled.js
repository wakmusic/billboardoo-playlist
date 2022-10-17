import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100%;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 472px;
  height: 457px;
  background-color: #ffffff;
  background: #ffffff;
  border-radius: 10px;
  gap: 10px;
`;

export const Title = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #080f34;
  margin: 0px;
`;

export const SubTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8c95af;
  margin: 0px;
`;

export const LoginBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

export const LoginBox = styled.div`
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 70px;
  border: none;
  padding: 0px;
  background: #ffffff;
  border: 1px solid #8c95af;
  border-radius: 10px;
  overflow: hidden;

  :hover {
    background: #f4f4f4;
  }
`;

export const PlatformIcon = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 25px;
`;

export const LoginBoxText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #080f34;
  margin: 0px;
`;
