import axios from "axios";
import React, { useEffect, useState } from "react";
import Classification from "./Classification";
import * as S from "./styled";

const PlusMusicPage = () => {
  const [popularityMusic, setPopularityMusic] = useState({
    title: "인기곡",
    musicList: [],
  });
  const [newMusic, setNewMusic] = useState({ title: "최신곡", musicList: [] });
  const [idolMusic, setIdolMusic] = useState({
    title: "이세계 아이돌",
    musicList: [],
  });
  const [fixmemberMusic, setFixmemberMusic] = useState({
    title: "고정 멤버",
    musicList: [],
  });

  useEffect(() => {
    axios({});
  }, []);

  return (
    <S.Container>
      <S.testHeader />
      <S.MusicSection>
        <S.TitleSection>재생 목록 노래 추가</S.TitleSection>
        <S.SearchBar></S.SearchBar>
        <Classification state={popularityMusic} />
      </S.MusicSection>
    </S.Container>
  );
};

export default PlusMusicPage;
