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
  min-height: 100vh;
  height: auto;
  padding-bottom: 75px;
  background-color: #e3e5eb;
`;

export const MainFindInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 520px;
  height: 44px;
  background: #ffffff;
  border-radius: 6px;
  margin-top: 40px;
`;

export const FindInputFilter = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 44px;
  gap: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #080f34;
  overflow: unset;
`;

export const FilterMenu = styled.div`
  position: absolute;
  top: 54px;
  width: 100px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2));
`;

export const Menu = styled.button`
  transition: all 0.2s;
  cursor: pointer;
  width: 100px;
  height: 42px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #080f34;
  background-color: #ffffff;
  border: none;

  &:hover {
    background-color: #e3e5eb;
  }
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
  padding: 0px;
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

export const MusicFilter = styled.div`
  width: 70px;
  height: 40px;
  background: #e3e5eb;
  border-radius: 4px;
`;

export const UpdateText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 14px;
  color: #8c95af;
  margin: 0px;
`;

export const MusicInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 950px;
  height: 40px;
  background-color: #dadde5;
`;

export const MusicInfoName = styled.p`
  position: absolute;
  left: 125px;
  width: auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  color: #080f34;
`;

export const MusicInfoText = styled.p`
  position: absolute;
  right: ${(props) => props.right};
  width: 80px;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  color: ${(props) => props.color};
`;

export const MusicBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 950px;
  height: 80px;
  background-color: ${(props) => props.color};
`;

export const MusicImage = styled.img`
  position: absolute;
  left: 30px;
  width: 54px;
  height: 54px;
  border-radius: 5px;
  background-color: #080f34;
`;

export const MusicImageBack = styled.div`
  position: absolute;
  left: 62px;
  width: 38px;
  height: 38px;
  border-radius: 100px;
  background: #242424;
`;

export const MusicTextLayout = styled.div`
  position: absolute;
  left: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const MusicName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: #080f34;
  margin: 0px;
`;

export const MusicArtist = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 14px;
  color: #8c95af;
  margin: 0px;
`;

export const MusicPlusButton = styled.div`
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background-color: #ffffff;
  border: none;

  &:hover {
    background-color: #989898;
  }
`;
