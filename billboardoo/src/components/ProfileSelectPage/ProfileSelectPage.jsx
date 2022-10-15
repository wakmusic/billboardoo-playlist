import React, { useState } from "react";
import ProfileThings from "./ProfileThings";
import * as S from "./styled";

const ProfileSelectPage = ({ userInfo }) => {
  const [profileKinds, setProfileKinds] = useState([
    "bat",
    "ddong",
    "dulgi",
    "gorani",
    "jupock",
    "panchi",
    "segyun",
  ]);

  return (
    <S.MainLayout>
      <S.TestHeader />
      <S.TextLayout>
        <S.MainSubTitle>WAKTAVERSE MUSIC</S.MainSubTitle>
        <S.MainTitle>프로필을 선택해주세요</S.MainTitle>
      </S.TextLayout>
      <S.MainLine />
      <S.ProfileLayout>
        {profileKinds.map((item, index) => {
          const link = `https://beta.wakmusic.xyz/static/profile/${item}.png`;
          return (
            <ProfileThings
              userInfo={userInfo}
              link={link}
              item={item}
              key={index}
            />
          );
        })}
      </S.ProfileLayout>
    </S.MainLayout>
  );
};

export default ProfileSelectPage;
