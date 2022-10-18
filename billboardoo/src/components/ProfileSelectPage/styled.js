import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e3e5eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const TestHeader = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 80px;
  background: #080f34;
`;

export const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 50px;
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
  margin-top: 5px;
`;

export const MainLine = styled.div`
  width: 800px;
  height: 1px;
  background: #8c95af;
  border-radius: 10px;
`;

export const ProfileLayout = styled.div`
  width: 950px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  gap: 40px;
`;

export const ProfileThings = styled.img`
  transition: all 0.3s;
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-color: #202f61;
  border-radius: 10px;

  &:hover {
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    margin-top: -5px;
  }
`;
