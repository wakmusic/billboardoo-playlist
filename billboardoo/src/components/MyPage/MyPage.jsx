import React, { useState } from "react";
import axios from "axios";
import ProfileSection from "./ProfileSection";
import ListBox from "./ListBox";
import PlusPlaylistModal from "../PlusPlaylistModal/PlusPlaylistModal";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";
import { useEffect } from "react";

const MyPage = ({ setPlaylistInfo, playlistInfo }) => {
  const [modalBool, setModalBool] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    profile: "",
    platform: "",
  });
  const [playlistBundle, setPlaylistBundle] = useState([]);
  // {key, title, creator, platform, image}

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      userInfoSetting(res.data);
      getPlaylist(res.data.id);
    });
  }, []);

  const getPlaylist = (userId) => {
    axios
      .get(`/api/playlist/list/${userId}`)
      .then((res) => {
        setPlaylistBundle(res.data.playlist);
      })
      .catch((res) => {
        alert("오류가 발생했습니다");
      });
  };

  const userInfoSetting = (data) => {
    switch (data.provider) {
      case "google":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.photos[0].value,
          platform: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        break;
      case "naver":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.profile_image,
          platform: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        break;
      case "apple":
        setUserInfo({
          name: data.display_name,
          id: data.id,
          profile: data.profile_image_url,
          platform: data.provider,
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        break;
    }
  };
  const changeModalBool = () => {
    setModalBool(!modalBool);
  };

  return (
    <S.Container>
      {modalBool ? (
        <PlusPlaylistModal
          userInfo={userInfo}
          playlistBundle={playlistBundle}
          setPlaylistBundle={setPlaylistBundle}
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
        <S.PlaylistlLayout>
          {playlistBundle.map((item, index) => {
            return (
              <ListBox
                setPlaylistInfo={setPlaylistInfo}
                item={item}
                key={index}
              />
            );
          })}
          <S.ListPlusBox onClick={changeModalBool}>
            <S.PlusImg src={ListPlus} />
            <S.ListPlusTitle>재생목록 추가</S.ListPlusTitle>
          </S.ListPlusBox>
        </S.PlaylistlLayout>
      </S.GuideLineBox>
    </S.Container>
  );
};

export default MyPage;
