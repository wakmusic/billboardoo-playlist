import styled from "styled-components";

export const testHeader = styled.div`
  width: 100%;
  height: 65px;
  background-color: black;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 75px;
`;

export const MusicSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.p`
  text-align: start;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0px;
  margin-top: 60px;
  margin-left: 65px;
`;

export const SearchBar = styled.div`
  width: 600px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  margin-top: 65px;
  margin-bottom: 65px;
`;

export const MusicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MusicImg = styled.img`
  width: 200px;
  height: 200px;
  background: #eeeeee;
  border: none;
`;

export const MusicName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MusicCount = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ababab;
  margin: 0px;
`;
