import React from "react";
import MusicListBox from "./MusicListBox";
import * as S from "./styled";

const MusicSection = () => {
  return (
    <S.PlaylistLayout>
      <S.TitleBox>
        <S.PageTitle>재생목록</S.PageTitle>
        <S.PlusPlaylistButton>
          <img />
          목록 추가
        </S.PlusPlaylistButton>
      </S.TitleBox>
      <S.ListInfoBox>
        <S.ListPlaylistName>재생목록 이름</S.ListPlaylistName>
        <S.ListPlaylistCreator>작성자</S.ListPlaylistCreator>
      </S.ListInfoBox>
      <MusicListBox />
    </S.PlaylistLayout>
  );
};

export default MusicSection;
