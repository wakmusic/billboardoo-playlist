import React, { useState } from "react";
import axios from "axios";
import Option from "../../assets/svgs/Option.svg";
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
    <S.ListBox>
      {deleteBool && (
        <S.ListDeleteButton onClick={deleteMusic}>삭제하기</S.ListDeleteButton>
      )}
      <S.ListBoxInfo>
        <S.ListTextLayout>
          <S.ListImg src={item.image} />
          <S.ListTitle>{item.title}</S.ListTitle>
          <S.ListGuideLine />
          <S.ListText>{item.artist}</S.ListText>
        </S.ListTextLayout>
      </S.ListBoxInfo>
      <S.OptionBox onClick={changeDeleteBool}>
        <img src={Option} />
      </S.OptionBox>
    </S.ListBox>
  );
};

export default MusicListBox;
