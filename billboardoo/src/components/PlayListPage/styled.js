import styled from "styled-components";

export const DisplayFlexLow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const PlaylistLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 80px;
`;

export const TestHeader = styled.div`
  width: 100vw;
  height: 80px;
  background: #080f34;
`;

export const PlaylistInfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 1200px;
  height: 300px;
`;

export const PlaylistImage = styled.img`
  width: 200px;
  height: 200px;
  background-color: #080f34;
  border-radius: 8px;
`;

export const PlaylistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PlaylistTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #080f34;
  margin: 0px;
`;

export const PlaylistPublic = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #8c95af;
  margin: 0px;
`;

export const PlaylistLine = styled.div`
  width: 250px;
  height: 1px;
  background: #080f34;
  border-radius: 100px;
`;

export const PlaylistCreator = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #202f61;
  margin: 0px;
`;

export const PlaylistPlayButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 44px;
  background: ${(props) => props.background};
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.fontColor};
`;

export const MusicSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const MusicLine = styled.div`
  width: 1200px;
  height: 2px;
  border-radius: 10px;
  background-color: #242424;
`;

export const MusicSectionTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #242424;
  margin: 0px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const ListBox = styled.div`
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;

  :hover {
    background-color: #f9f9fb;
  }
`;

export const ListDeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 160px;
  height: 46px;
  right: 40px;
  top: 50px;
  background: #ffffff;
  border: 1px solid #a7a7a7;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 18px;
  color: #ff4545;
  border-radius: 5px;
`;

export const ListBoxInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ListImg = styled.img`
  margin-left: 25px;
  width: 44px;
  height: 44px;
  background-color: #242424;
  border-radius: 3px;
`;

export const ListTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin: 0px;
  margin-left: 5px;
`;

export const ListGuideLine = styled.div`
  width: 1px;
  height: 18px;
  background: #ababab;
  border-radius: 100px;
`;

export const ListText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ababab;
`;

export const ListTextLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OptionBox = styled.div`
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 25px;
`;

export const ListPlusBox = styled.div`
  transition: all 0.1s;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 1200px;
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;

  :hover {
    background-color: #f9f9fb;
  }
`;

export const PlusImg = styled.img`
  margin-left: 25px;
`;

export const ListPlusTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin: 0px;
  margin-left: 15px;
`;

export const ModalTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #080f34;
  margin: 0px;
`;

export const ModalText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #8c95af;
  margin: 0px;
  margin-top: 10px;
`;

export const PlaylistLink = styled.input`
  width: 335px;
  height: 40px;
  padding-left: 15px;
  background: #f4f5f7;
  border-radius: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #202f61;
  margin-top: 40px;
  border: none;
  pointer-events: none;
`;
