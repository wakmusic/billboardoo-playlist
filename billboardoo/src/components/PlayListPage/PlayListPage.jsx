import React, { useState } from "react";
import axios from "axios";
import ProfileSection from "./ProfileSection";
import ListBox from "./ListBox";
import PlusPlayListModal from "../PlusPlayListModal/PlusPlayListModal";
import ListPlus from "../../assets/svg/ListPlus.svg";
import * as S from "./styled";
import { useEffect } from "react";

const PlayListPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
  });
  const [modalBool, setModalBool] = useState(false);
  const [playList, setPlayList] = useState([]);
  //{ name:"", count:"" }

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      console.log(res);
    });
  }, []);

  const changeModalBool = () => {
    setModalBool(!modalBool);
  };

  // const appendPlaylist = () => {
  //   axios({});
  //   let copyPlayList = [...playList];
  //   playList.push()
  // };

  return (
    <S.Container>
      {modalBool ? (
        <PlusPlayListModal
          playList={playList}
          setPlayList={setPlayList}
          changeModalBool={changeModalBool}
        />
      ) : (
        <></>
      )}
      <S.TestHeader />
      <ProfileSection />
      <S.GuideLineBox>
        <S.GuideLineText>재생목록</S.GuideLineText>
        <S.GuideLineBoxLine />
        <S.PlayListlLayout>
          {playList.map((item, index) => {
            return <ListBox item={item} key={index} />;
          })}
          <S.ListPlusBox onClick={changeModalBool}>
            <S.PlusImg src={ListPlus} />
            <S.ListPlusTitle>재생목록 추가</S.ListPlusTitle>
          </S.ListPlusBox>
        </S.PlayListlLayout>
      </S.GuideLineBox>
    </S.Container>
  );
};

export default PlayListPage;
