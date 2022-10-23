import React from "react";
import Public from "../../assets/svgs/Public.svg";
import Sharing from "../../assets/svgs/Sharing.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import ModifyIcon from "../../assets/svgs/ModifyIcon.svg";
import * as S from "./styled";

const InfoSection = () => {
  return (
    <S.ProfileBox>
      <S.ProfileSettingIcon src={Public} />
      <S.ProfileImg />
      <S.NameLayout>
        <S.ProfileName>dsfsdf</S.ProfileName>
        <S.ModifyButton src={ModifyIcon} />
      </S.NameLayout>
      <S.LoginPlatform>dsfdsf</S.LoginPlatform>
      <S.LogoutButton>
        <img src={Sharing} />
        공유하기
      </S.LogoutButton>
    </S.ProfileBox>
  );
};

export default InfoSection;
