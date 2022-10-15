import React, { useState } from "react";
import * as S from "./styled";

const ProfileSelectPage = () => {
  const [profileKinds, setProfileKinds] = useState([
    "https://beta.wakmusic.xyz/static/profile/bat.png",
    "https://beta.wakmusic.xyz/static/profile/ddong.png",
    "https://beta.wakmusic.xyz/static/profile/dulgi.png",
    "https://beta.wakmusic.xyz/static/profile/gorani.png",
    "https://beta.wakmusic.xyz/static/profile/jupock.png",
    "https://beta.wakmusic.xyz/static/profile/panchi.png",
    "https://beta.wakmusic.xyz/static/profile/segyun.png",
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
          return <S.TestProfile src={item} key={index} />;
        })}
      </S.ProfileLayout>
    </S.MainLayout>
  );
};

export default ProfileSelectPage;
