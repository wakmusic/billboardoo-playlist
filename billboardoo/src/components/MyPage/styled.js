import styled from "styled-components";

export const TestHeader = styled.div`
  width: 100vw;
  height: 64px;
  background: #080f34;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const PorfileSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 340px;
  background: #080f34;
`;

export const IntroduceText = styled.p`
  position: absolute;
  left: 192px;
  top: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin: 0px;
`;

export const LogoutText = styled.p`
  cursor: pointer;
  position: absolute;
  right: 192px;
  top: 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  text-decoration-line: underline;
  color: #ffffff;
  margin: 0px;
`;

export const NotProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #f9f9fb;
  border-radius: 100px;
  margin-left: 192px;
`;

export const Profile = styled.img`
  width: 160px;
  height: 160px;
`;

export const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-left: 25px;
`;

export const NickNameText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin: 0px;
`;

export const TextGuideLine = styled.div`
  width: 250px;
  height: 1px;
  background: #ffffff;
  border-radius: 100px;
`;

export const TypeText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;
  color: #ffffff;
  margin: 0px;
`;

export const GuideLineBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const GuideLineText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0px;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const GuideLineBoxLine = styled.div`
  width: 80vw;
  height: 2px;
  background: #000000;
  border-radius: 100px;
`;

export const PlaylistlLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 75px;
`;

export const ListBox = styled.div`
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 80vw;
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #e3e3e3;

  :hover {
    background-color: #f9f9fb;
  }
`;

export const ListBoxInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  width: 80vw;
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
