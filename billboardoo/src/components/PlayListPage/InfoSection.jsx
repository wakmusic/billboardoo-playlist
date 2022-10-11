import React from "react";
import Play from "../../assets/svgs/PlaylistPlay.svg";
import Cross from "../../assets/svgs/PlaylistCrossPlay.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import * as S from "./styled";

const InfoSection = ({ playlistInfo }) => {
  return (
    <S.PlaylistInfoSection>
      <S.PlaylistImage src={playlistInfo.image || DefaultPlaylist} />
      <S.PlaylistInfoContainer>
        <S.DisplayFlexLow>
          <S.PlaylistTitle>{playlistInfo.title}</S.PlaylistTitle>
          <S.PlaylistPublic>비공개</S.PlaylistPublic>
        </S.DisplayFlexLow>
        <S.PlaylistLine />
        <S.PlaylistCreator>{playlistInfo.creator}</S.PlaylistCreator>
        <S.DisplayFlexLow>
          <S.PlaylistPlayButton>
            <img src={Play} />
            재생
          </S.PlaylistPlayButton>
          <S.PlaylistCrossButton>
            <img src={Cross} />
            셔플재생
          </S.PlaylistCrossButton>
        </S.DisplayFlexLow>
      </S.PlaylistInfoContainer>
    </S.PlaylistInfoSection>
  );
};

export default InfoSection;
