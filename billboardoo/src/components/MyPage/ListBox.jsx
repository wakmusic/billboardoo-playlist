import React, { useState } from "react";
import Option from "../../assets/svgs/Option.svg";
import DefaultPlaylist from "../../assets/imgs/DefaultPlaylist.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styled";

const ListBox = ({ item, setPlaylistInfo, userInfo }) => {
  const [deleteBool, setDeleteBool] = useState(false);
  let navigate = useNavigate();

  const getPlaylistPage = () => {
    axios.get(`/api/playlist/detail/${item.key}`).then((res) => {
      setPlaylistInfo(res.data);
      navigate("/playlist");
    });
  };

  const deletePlayList = () => {
    axios
      .post(`/api/playlist/delete/${item.key}`, { clientId: userInfo.id })
      .then((res) => {
        alert("삭제에 성공했습니다");
        window.location.reload();
      });
  };

  const changeDeleteBool = () => {
    setDeleteBool(!deleteBool);
  };

  return (
    <S.ListBox>
      {deleteBool && (
        <S.ListDeleteButton onClick={deletePlayList}>
          삭제하기
        </S.ListDeleteButton>
      )}
      <S.ListBoxInfo onClick={getPlaylistPage}>
        <S.ListTextLayout>
          <S.ListImg src={item.image || DefaultPlaylist} />
          <S.ListTitle>{item.title}</S.ListTitle>
          <S.ListGuideLine />
          <S.ListText>{item.creator}</S.ListText>
        </S.ListTextLayout>
      </S.ListBoxInfo>
      <S.OptionBox onClick={changeDeleteBool}>
        <img src={Option} />
      </S.OptionBox>
    </S.ListBox>
  );
};

export default ListBox;
