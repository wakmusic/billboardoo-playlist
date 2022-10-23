import React, { useState } from "react";
import DefaultProfile from "../../assets/svgs/DefaultProfile.svg";
import axios from "axios";
import * as S from "./styled";

const MusicListBox = ({ item, playlistInfo, setPlaylistInfo }) => {
  const [deleteBool, setDeleteBool] = useState(false);

  //플레이 리스트 내에 노래 삭제 함수
  const deleteMusic = () => {
    let copySonglist = playlistInfo.songlist.filter((x) => {
      return x != item.id;
    });
    setPlaylistInfo({ ...playlistInfo, songlist: copySonglist });
    axios
      .post(`/api/playlist/edit/${playlistInfo.key}`, {
        title: playlistInfo.title,
        image: playlistInfo.image,
        songlist: copySonglist,
        public: playlistInfo.public,
        clientId: playlistInfo.clientId,
      })
      .then((res) => {
        alert("삭제에 성공했습니다");
      });
  };

  const changeDeleteBool = () => {
    setDeleteBool(!deleteBool);
  };

  return (
    <S.PL_Layout background="#E5E7EC">
      <S.PL_InfoSection>
        <S.PL_Image src={DefaultProfile} />
        <S.PL_Name></S.PL_Name>
        <S.PL_Creator></S.PL_Creator>
      </S.PL_InfoSection>
      <S.PL_DeleteButton>삭제</S.PL_DeleteButton>
    </S.PL_Layout>
  );
};

export default MusicListBox;
