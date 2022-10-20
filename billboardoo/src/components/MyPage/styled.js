import styled from "styled-components";

export const TestHeader = styled.div`
  width: 100vw;
  height: 80px;
  background: #080f34;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
  min-height: 100vh;
`;

export const InfoLayout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 260px;
  background: #eeeff3;
  backdrop-filter: blur(50px);
  border-radius: 10px;
`;

export const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 100px;
  background-color: #dadde5;
`;

export const ProfileName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #202f61;
  margin: 0px;
  margin-top: 5px;
`;

export const LoginPlatform = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #8c95af;
  margin: 0px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  background: #ffffff;
  border-radius: 30px;
  margin-top: 10px;
  border: none;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 14px;
  color: #8c95af;
`;

export const ProfileSettingIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
`;

export const PlaylistLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const TitleBox = styled.div`
  position: relative;
  width: 600px;
  height: 60px;
  background-color: #eeeff3;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.p`
  position: absolute;
  left: 30px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #080f34;
  margin: 0px;
`;

export const PlusPlaylistButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  width: 100px;
  height: 40px;
  background-color: #202f61;
  border: none;
  border-radius: 100px;
  gap: 3px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

export const 