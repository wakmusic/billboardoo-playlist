import styled from "styled-components";

export const _Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
`;

export const _ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const _Pointer = styled.div`
  width: 8px;
  height: 8px;
  background: #191211;
  border-radius: 100px;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const _Text = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #242424;

  margin: 0px;
  margin-bottom: 30px;
`;

export const _LoginBox = styled.div`
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 390px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;

  :hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const _BrandIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 50px;
  background: ${(props) => props.color};
`;

export const _LoginBoxText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #191211;

  margin: 0px;
  margin-left: 20px;
`;
