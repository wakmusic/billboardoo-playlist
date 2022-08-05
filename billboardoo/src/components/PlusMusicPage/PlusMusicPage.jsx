import axios from "axios";
import React, { useEffect, useState } from "react";
import Classification from "./Classification";
import * as S from "./styled";

const PlusMusicPage = () => {
  const [popularityMusic, setPopularityMusic] = useState({
    title: "인기곡",
    musicList: [
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
      {
        name: "RE:Wind",
        singer: "이세계아이돌",
      },
       {
        name: "RE:Wind",
        singer: "ㅇㅇ",
      },
    ],
  });
  const [newMusic, setNewMusic] = useState({});
  const [idolMusic, setIdolMusic] = useState({});
  const [fixmemberMusic, setFixmemberMusic] = useState({});

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
