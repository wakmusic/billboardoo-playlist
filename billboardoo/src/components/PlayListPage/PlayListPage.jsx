import React from "react";
import InfoSection from "./InfoSection";
import * as S from "./styled";

const PlaylistPage = () => {
  return (
    <S.PlaylistLayout>
      <S.TestHeader />
      <InfoSection />
    </S.PlaylistLayout>
  );
};

export default PlaylistPage;
