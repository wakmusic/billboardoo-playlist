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
  padding-bottom: 75px;
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
  border-radius: 5px;
  background-color: #dadde5;
`;

export const NameLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const ModifyButton = styled.img`
  cursor: pointer;
`;

export const ProfileName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  color: #202f61;
  margin: 0px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  width: 110px;
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

export const ProfileSettingIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
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

export const ButtonLayout = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PlusPlaylistButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  background-color: #202f61;
  border: none;
  border-radius: 100px;
  gap: 3px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

export const PlaybackPlaylistButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  background-color: #00f3f3;
  border: none;
  border-radius: 100px;
  gap: 3px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #202f61;
`;

export const ListInfoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 600px;
  height: 40px;
  background-color: #dadde5;
`;

export const ListPlaylistName = styled.p`
  position: absolute;
  left: 110px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #080f34;
  margin: 0px;
`;

export const ListPlaylistCreator = styled.p`
  position: absolute;
  right: 100px;
  width: 80px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #080f34;
`;

export const PL_Layout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: 600px;
  height: 80px;
  background-color: ${(props) => props.background};
`;

export const PL_InfoSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  height: 80px;
`;

export const PL_Image = styled.img`
  position: absolute;
  left: 30px;
  width: 50px;
  height: 50px;
  background-color: #080f34;
  border-radius: 5px;
`;

export const PL_Circle = styled.div`
  position: absolute;
  left: 55px;
  width: 40px;
  height: 40px;
  background-color: #242424;
  border-radius: 100px;
`;

export const PL_Name = styled.p`
  position: absolute;
  left: 110px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #080f34;
  margin: 0px;
`;

export const PL_Creator = styled.p`
  position: absolute;
  right: 20px;
  width: 80px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: #202f61;
`;

export const PL_DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 30px;
  width: 50px;
  height: 38px;
  border: none;
  background-color: #8c95af;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  border-radius: 100px;
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

export const PlaylistLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 335px;
  height: 44px;
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
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const NameInput = styled.input`
  width: 348px;
  height: 40px;
  left: 786px;
  top: 402px;
  background-color: #f4f5f7;
  border-radius: 5px;
  border: none;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #202f61;
  padding-left: 15px;

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
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #8c95af;
  margin: 0px;
  margin-bottom: 35px;
  margin-top: 10px;
`;
