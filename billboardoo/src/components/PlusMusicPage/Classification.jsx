import React, { useState } from "react";
import Music from "./Music";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import * as S from "./styled";

const Classification = ({ state }) => {
  const [count, setCount] = useState(0);
  const { musicList } = state;

  const musicMap = musicList.map((item, index) => {
    if (index >= count && index <= 5 + count) {
      return <Music item={item} key={index} />;
    }
  });

  const plusCount = () => {
    if (musicList.length > 6 + count) {
      setCount(count + 1);
    }
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <S.ClassificationLayout>
      <S.ClassificationName>{state.Title}</S.ClassificationName>
      <S.ArrowLayout>
        <S.NextButtonLeft onClick={minusCount}>
          <img src={ArrowRight} />
        </S.NextButtonLeft>
        <S.MusicLayout>{musicMap}</S.MusicLayout>
        <S.NextButtonRight onClick={plusCount}>
          <img src={ArrowLeft} />
        </S.NextButtonRight>
      </S.ArrowLayout>
    </S.ClassificationLayout>
  );
};

export default Classification;
