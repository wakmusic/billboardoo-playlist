import styled from "styled-components";

export const testHeader = styled.div`
  width: 100%;
  height: 65px;
  background-color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 75px;
`;

export const MusicSection = styled.div`
  width: fit-content;
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
  width: 100%;
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

export const MusicSinger = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ababab;
  margin: 0px;
`;

export const ClassificationName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin: 0px;
  margin-bottom: 25px;
`;

export const MusicLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
`;

export const NextButtonLeft = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 1000px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-right: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const NextButtonRight = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 1000px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  margin-left: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ClassificationLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ArrowLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
