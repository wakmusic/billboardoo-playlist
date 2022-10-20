import React from "react";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistSection = () => {
  return (
    <S.PlaylistLayout>
      <S.TitleBox>
        <S.PageTitle>재생목록</S.PageTitle>
        <S.PlusPlaylistButton>
          <img src={ListPlus} />
          목록 추가
        </S.PlusPlaylistButton>
      </S.TitleBox>
    </S.PlaylistLayout>
  );
};

export default PlaylistSection;
