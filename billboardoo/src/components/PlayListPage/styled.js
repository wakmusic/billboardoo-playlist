import styled from "styled-components";

export const DisplayFlexLow = styled.div`
  display: flex;
  align-items: center;
`;

export const PlaylistLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
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
  margin-left: 10px;
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

export const PlaylistPlayButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 44px;
  background: #080f34;
  border-radius: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;

export const PlaylistCrossButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 150px;
  height: 44px;
  background: #ffffff;
  border: 2px solid #080f34;
  border-radius: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #080f34;
  margin-left: 15px;
`;
