import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import ListBox from "./ListBox";
import PlusPlaylistModal from "../PlusPlaylistModal/PlusPlaylistModal";
import ListPlus from "../../assets/svgs/ListPlus.svg";
import * as S from "./styled";
import { useEffect } from "react";

const MyPage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const [modalBool, setModalBool] = useState(false);
  const [playlistBundle, setPlaylistBundle] = useState([]);
  // {key, title, creator, platform, image}

  useEffect(() => {
    axios.get("/api/auth").then((res) => {
      userInfoSetting(res.data);
      getPlaylist(res.data.id);
      if (res.data.first) {
        navigate("/profile-select");
      }
    });
  }, []);

  //플레이 리스트 목록 가져오기
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

  //유저 정보 가져오기 & 세팅
  const userInfoSetting = (data) => {
    switch (data.provider) {
      case "google":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.photos[0].value,
          platform: data.provider,
        });
        break;
      case "naver":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.profile_image,
          platform: data.provider,
        });
        break;
      case "apple":
        setUserInfo({
          name: data.display_name,
          id: data.id,
          profile: data.profile_image_url,
          platform: data.provider,
        });
        break;
    }
  };

  return (
    <S.Container>
      {modalBool ? (
        <PlusPlaylistModal
          userInfo={userInfo}
          setModalBool={setModalBool}
          playlistBundle={playlistBundle}
          setPlaylistBundle={setPlaylistBundle}
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
                userInfo={userInfo}
                setModalBool={setModalBool}
                item={item}
                key={index}
              />
            );
          })}
          <S.ListPlusBox
            onClick={() => {
              setModalBool(true);
            }}
          >
            <S.PlusImg src={ListPlus} />
            <S.ListPlusTitle>재생목록 추가</S.ListPlusTitle>
          </S.ListPlusBox>
        </S.PlaylistlLayout>
      </S.GuideLineBox>
    </S.Container>
  );
};

export default MyPage;
