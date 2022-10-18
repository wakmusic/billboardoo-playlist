import styled from "styled-components";

export const testHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #080f34;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 75px;
  background-color: #e3e5eb;
`;

export const MainTitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const FindLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
`;

export const MainSubTitle = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8c95af;
  margin: 0px;
`;

export const MainTitle = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #080f34;
  margin: 0px;
`;

export const MainLine = styled.div`
  width: 950px;
  height: 1px;
  background: #8c95af;
`;

export const MainFindInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  height: 44px;
  background: #ffffff;
  border-radius: 6px;
  overflow: hidden;
`;

export const FindInputFilter = styled.div`
  width: 90px;
  height: 44px;
  border: 1px solid black;
`;

export const FindInput = styled.input`
  width: 100%;
  height: 44px;
  text-align: center;
  outline: none;
  border: none;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #202f61;
`;

export const FindIcon = styled.img`
  margin-right: 15px;
`;

export const appendMusicLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 30px;
`;

export const MusicFilterLayout = styled.div`
  display: flex;
  align-items: center;
  width: 920px;
  height: 70px;
  background-color: #eeeff3;
  gap: 30px;
  padding-left: 30px;
`;
