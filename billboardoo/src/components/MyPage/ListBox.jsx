import React from "react";
import Option from "../../assets/svgs/Option.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import * as S from "./styled";

const ListBox = ({ item, setPlaylistInfo, playlistInfo }) => {
  const movePlaylistPage = () => {
    setPlaylistInfo({ ...playlistInfo, playlistKey: item.key });
    window.location.href = "/playlist";
  };

  return (
    <S.ListBox onClick={movePlaylistPage}>
      <S.ListTextLayout>
        <S.ListImg src={item.image || DefaultPlaylist} />
        <S.ListTitle>{item.title}</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>{item.count}곡</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default ListBox;
