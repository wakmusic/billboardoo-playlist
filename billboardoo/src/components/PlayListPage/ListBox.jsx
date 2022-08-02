import React from "react";
import Option from "../../assets/svg/Option.svg";
import * as S from "./styled";

const ListBox = ({ item }) => {
  return (
    <S.ListBox>
      <S.ListTextLayout>
        <S.ListTitle>{item.name}</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>{item.count}곡</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default ListBox;
