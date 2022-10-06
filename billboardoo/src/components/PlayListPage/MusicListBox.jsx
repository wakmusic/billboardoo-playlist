import React from "react";
import Option from "../../assets/svgs/Option.svg";
import * as S from "./styled";

const MusicListBox = () => {
  return (
    <S.ListBox>
      <S.ListTextLayout>
        <S.ListImg />
        <S.ListTitle>RE:WIND</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>이세계아이돌</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default MusicListBox;
