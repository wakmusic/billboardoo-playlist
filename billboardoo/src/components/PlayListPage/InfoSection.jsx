import React, { useState } from "react";
import Play from "../../assets/svgs/PlaylistPlay.svg";
import Cross from "../../assets/svgs/PlaylistCrossPlay.svg";
import Sharing from "../../assets/svgs/Sharing.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import SharingPlaylistModal from ".././SharingPlaylistModal/SharingListModal";
import * as S from "./styled";

const InfoSection = ({ playlistInfo }) => {
  const [modalBool, setModalBool] = useState(false);

  const changeModalBool = () => {
    setModalBool(true);
  };

  return (
    <>
      {modalBool && <SharingPlaylistModal setModalBool={setModalBool} />}
      <S.PlaylistInfoSection>
        <S.PlaylistImage src={playlistInfo.image || DefaultPlaylist} />
        <S.PlaylistInfoContainer>
          <S.DisplayFlexLow>
            <S.PlaylistTitle>{playlistInfo.title}</S.PlaylistTitle>
            <S.PlaylistPublic>
              {playlistInfo.public ? "공개" : "비공개"}
            </S.PlaylistPublic>
          </S.DisplayFlexLow>
          <S.PlaylistLine />
          <S.PlaylistCreator>{playlistInfo.creator}</S.PlaylistCreator>
          <S.DisplayFlexLow>
            <S.PlaylistPlayButton
              background="#080F34"
              borderColor="#080F34"
              fontColor="#ffffff"
            >
              <img src={Play} />
              재생
            </S.PlaylistPlayButton>
            <S.PlaylistPlayButton
              background="#ffffff"
              borderColor="#080F34"
              fontColor="#080F34"
            >
              <img src={Cross} />
              셔플 재생
            </S.PlaylistPlayButton>
            <S.PlaylistPlayButton
              onClick={changeModalBool}
              background="#ffffff"
              borderColor="#636363"
              fontColor="#636363"
            >
              <img src={Sharing} />
              공유
            </S.PlaylistPlayButton>
          </S.DisplayFlexLow>
        </S.PlaylistInfoContainer>
      </S.PlaylistInfoSection>
    </>
  );
};

export default InfoSection;
