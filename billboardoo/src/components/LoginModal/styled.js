import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 460px;
  background: #ffffff;
  border-radius: 8px;
`;

export const Pointer = styled.div`
  width: 8px;
  height: 8px;
  background: #191211;
  border-radius: 100px;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #242424;

  margin: 0px;
  margin-bottom: 30px;
`;

export const LoginBox = styled.button`
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 390px;
  height: 50px;
  border: none;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;

  :hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const BrandIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #d8d8d8;

  width: 80px;
  height: 50px;
  background: ${(props) => props.color};
`;

export const LoginBoxText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #191211;

  margin: 0px;
  margin-left: 20px;
`;
