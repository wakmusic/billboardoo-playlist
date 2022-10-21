import React, { useState } from "react";
import Option from "../../assets/svgs/Option.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styled";

const ListBox = ({ item, userInfo, background, setDeleteModalBool }) => {
  const [deleteBool, setDeleteBool] = useState(false);
  let navigate = useNavigate();

  const movePlaylistdetail = () => {
    localStorage.setItem("playlistKey", item.key);
    navigate("/playlist");
  };

  const deletePlayList = () => {
    axios
      .post(`/api/playlist/delete/${item.key}`, { clientId: userInfo.id })
      .then((res) => {
        alert("삭제에 성공했습니다");
        window.location.reload();
      });
  };

  const changeDeleteBool = () => {
    setDeleteModalBool(true);
  };

  return (
    <S.PL_Layout background={background}>
      <S.PL_InfoSection onClick={movePlaylistdetail}>
        <S.PL_Image src={item.image || DefaultPlaylist} />
        <S.PL_Name>{item.title}</S.PL_Name>
        <S.PL_Creator>{item.creator}</S.PL_Creator>
      </S.PL_InfoSection>
      <S.PL_DeleteButton onClick={changeDeleteBool}>삭제</S.PL_DeleteButton>
    </S.PL_Layout>
  );
};

export default ListBox;
