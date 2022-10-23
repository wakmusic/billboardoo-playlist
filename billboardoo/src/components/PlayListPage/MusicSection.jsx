import React from "react";
import CrossPlay from "../../assets/svgs/PlaylistCrossPlay.svg";
import Play from "../../assets/svgs/PlaylistPlay.svg";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import MusicListBox from "./MusicListBox";
import * as S from "./styled";

const MusicSection = () => {
  return (
    <S.PlaylistLayout>
      <S.TitleBox>
        <S.PageTitle>노래목록</S.PageTitle>
        <S.ButtonLayout>
          <S.PlaybackPlaylistButton>
            <img src={Play} />
            전체 재생
          </S.PlaybackPlaylistButton>
          <S.PlaybackPlaylistButton>
            <img src={CrossPlay} />
            랜덤 재생
          </S.PlaybackPlaylistButton>
          <S.PlusPlaylistButton>
            <img src={ListPlus} />
            노래 추가
          </S.PlusPlaylistButton>
        </S.ButtonLayout>
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
