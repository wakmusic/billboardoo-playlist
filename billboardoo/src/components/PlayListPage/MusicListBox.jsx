import React, { useState } from "react";
import DefaultProfile from "../../assets/svgs/DefaultProfile.svg";
import axios from "axios";
import * as S from "./styled";

const MusicListBox = (props) => {
  const { item, setDeleteModalBool } = props;
  const imageLink = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

  const changeDeleteBool = () => {
    setDeleteModalBool(true);
    localStorage.setItem("musicId", item.id);
  };

  return (
    <S.PL_Layout background="#E5E7EC">
      <S.PL_InfoSection>
        <S.PL_Circle />
        <S.PL_Image src={imageLink || DefaultProfile} />
        <S.PL_Name>{item.title}</S.PL_Name>
        <S.PL_Creator>{item.artist}</S.PL_Creator>
      </S.PL_InfoSection>
      <S.PL_DeleteButton onClick={changeDeleteBool}>삭제</S.PL_DeleteButton>
    </S.PL_Layout>
  );
};

export default MusicListBox;
