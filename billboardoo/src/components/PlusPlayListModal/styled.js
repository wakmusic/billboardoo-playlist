import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 470px;
  height: 310px;
  background: #ffffff;
  backdrop-filter: blur(50px);
  border-radius: 10px;
  gap: 10px;
  overflow: hidden;
`;

export const ButtonLayout = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0px;
`;

export const MainButton = styled.button`
  cursor: pointer;
  width: 235px;
  height: 60px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  border: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
`;

export const ModalBackGroud = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export const NameInput = styled.input`
  width: 348px;
  height: 40px;
  left: 786px;
  top: 402px;
  background-color: #f4f5f7;
  border-radius: 5px;
  border: none;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #000000;
  padding-left: 15px;
  margin-bottom: 50px;

  ::placeholder {
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #b6b6b6;
  }
`;

export const IntroduceText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8c95af;
  margin: 0px;
  margin-bottom: 35px;
`;

export const ModalTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #080f34;
  margin: 0px;
`;
