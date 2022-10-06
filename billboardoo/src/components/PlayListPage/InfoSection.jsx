import React from "react";
import Play from "../../assets/svgs/PlaylistPlay.svg";
import Cross from "../../assets/svgs/PlaylistCrossPlay.svg";
import * as S from "./styled";

const InfoSection = () => {
  return (
    <S.PlaylistInfoSection>
      <S.PlaylistImage />
      <S.PlaylistInfoContainer>
        <S.DisplayFlexLow>
          <S.PlaylistTitle>플레이리스트 이름</S.PlaylistTitle>
          <S.PlaylistPublic>비공개</S.PlaylistPublic>
        </S.DisplayFlexLow>
        <S.PlaylistLine />
        <S.PlaylistCreator>작성자</S.PlaylistCreator>
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
