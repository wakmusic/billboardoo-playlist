import React from "react";
import Option from "../../assets/svg/Option.svg";
import * as S from "./styled";

const ListBox = () => {
  return (
    <S.ListBox>
      <S.ListTextLayout>
        <S.ListTitle>재생목록이름</S.ListTitle>
        <S.ListGuideLine />
        <S.ListText>22곡</S.ListText>
      </S.ListTextLayout>
      <S.OptionBox src={Option} />
    </S.ListBox>
  );
};

export default ListBox;
