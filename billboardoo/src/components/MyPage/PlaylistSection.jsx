import React from "react";
import ListBox from "./ListBox";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";

const PlaylistSection = ({
  playlistBundle,
  userInfo,
  setPlusModalBool,
  setDeleteModalBool,
}) => {
  const changeModal = () => {
    setPlusModalBool(true);
  };

  return (
    <S.PlaylistLayout>
      <S.TitleBox>
        <S.PageTitle>재생목록</S.PageTitle>
        <S.PlusPlaylistButton onClick={changeModal}>
          <img src={ListPlus} />
          목록 추가
        </S.PlusPlaylistButton>
      </S.TitleBox>
      <S.ListInfoBox>
        <S.ListPlaylistName>재생목록 이름</S.ListPlaylistName>
        <S.ListPlaylistCreator>작성자</S.ListPlaylistCreator>
      </S.ListInfoBox>
      {playlistBundle.map((item, index) => {
        return (
          <ListBox
            setDeleteModalBool={setDeleteModalBool}
            item={item}
            background={index % 2 == 0 ? "#E4E6EC" : "#EEEFF3"}
            key={index}
          />
        );
      })}
    </S.PlaylistLayout>
  );
};

export default PlaylistSection;
