import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 500px;
  height: 350px;
  background: #ffffff;
  border-radius: 8px;
`;

export const PlusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 70px;
  border-top: 1px solid #e3e3e3;
`;

export const PlusButton = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  width: 180px;
  height: 44px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: #000000;

  :hover {
    background-color: #efefef;
  }
`;

export const ModalBackGroud = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const NameInput = styled.input`
  width: 350px;
  height: 36px;
  background: #ffffff;
  border: none;
  outline: none;
  padding-left: 10px;
  border-bottom: 2px solid #b6b6b6;
  margin-bottom: 60px;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #000000;

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
  font-weight: 400;
  font-size: 18px;
  color: #242424;
  margin: 0px;
  margin-bottom: 35px;
`;

export const ModalPointer = styled.div`
  width: 8px;
  height: 8px;
  background: #191211;
  border-radius: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin: 0px;
`;
