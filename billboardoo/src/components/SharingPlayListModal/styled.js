import styled from "styled-components";

export const Container = styled.div`
  position: relative;
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

export const BackImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PlusButton = styled.button`
  cursor: pointer;
  transition: all 0.3s;
  width: 180px;
  height: 44px;
  background: #000000;
  border-radius: 5px;
  border: none;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  color: #ffffff;
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

export const LinkInput = styled.input`
  border-radius: 5px;
  width: 350px;
  height: 44px;
  background: #ffffff;
  border: none;
  outline: none;
  border: 2px solid #ababab;
  padding-left: 15px;
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
