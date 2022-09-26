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
    id: "",
    photo: "",
    loginType: "",
  });
  const [modalBool, setModalBool] = useState(false);
  const [playListBundle, setPlayListBundle] = useState([]);
  //{ name:"", count:"" }

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      userInfoSetting(res.data);
      getPlayList(res.data.id);
    });
  }, []);

  const getPlayList = (userId) => {
    axios
      .post(`http://billboardoo.com/api/playlist/list/${userId}`, {})
      .then((res) => {
        console.log(res);
      });
  };

  const userInfoSetting = (data) => {
    switch (data.provider) {
      case "google":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          photo: data.photos[0].value,
          loginType: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        break;
      case "naver":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          photo: data.profile_image,
          loginType: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        break;
      case "twitch":
        setUserInfo({
          name: data.display_name,
          id: data.id,
          photo: data.profile_image_url,
          loginType: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        break;
    }
  };
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
          playListBundle={playListBundle}
          setPlayListBundle={setPlayListBundle}
          changeModalBool={changeModalBool}
        />
      ) : (
        <></>
      )}
      <S.TestHeader />
      <ProfileSection userInfo={userInfo} />
      <S.GuideLineBox>
        <S.GuideLineText>재생목록</S.GuideLineText>
        <S.GuideLineBoxLine />
        <S.PlayListlLayout>
          {playListBundle.map((item, index) => {
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
