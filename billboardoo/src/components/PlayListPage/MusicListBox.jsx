import React, { useState } from "react";
import Option from "../../assets/svgs/Option.svg";
import * as S from "./styled";

const MusicListBox = () => {
  const [deleteBool, setDeleteBool] = useState(false);

  const changeDeleteBool = () => {
    setDeleteBool(!deleteBool);
  };

  return (
    <S.ListBox>
      {deleteBool && <S.ListDeleteButton>삭제하기</S.ListDeleteButton>}
      <S.ListBoxInfo>
        <S.ListTextLayout>
          <S.ListImg />
          <S.ListTitle>RE:WIND</S.ListTitle>
          <S.ListGuideLine />
          <S.ListText>이세계아이돌</S.ListText>
        </S.ListTextLayout>
      </S.ListBoxInfo>
      <S.OptionBox onClick={changeDeleteBool}>
        <img src={Option} />
      </S.OptionBox>
    </S.ListBox>
  );
};

export default MusicListBox;
