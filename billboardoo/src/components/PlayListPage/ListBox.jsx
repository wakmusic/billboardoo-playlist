import React from "react";
import Option from "../../assets/svgs/Option.svg";
import * as S from "./styled";

const ListBox = ({ item }) => {
  return (
    <S.ListBox>
      <S.ListTextLayout>
        <S.ListImg />
        <S.ListTitle>{item.title}</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>{item.count}곡</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default ListBox;
