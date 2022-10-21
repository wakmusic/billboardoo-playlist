import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageInTroduce from "../PageItroduceBox/PageItroduceBox";
import ProfileSection from "./ProfileSection";
import PlaylistSection from "./PlaylistSection";
import Modal from "../Modal/Modal";
import PlusPlaylistModal from "../PlusPlaylistModal/PlusPlaylistModal";
import * as S from "./styled";
import { useEffect } from "react";

const MyPage = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();
  const [plusModalBool, setPlusModalBool] = useState(false);
  const [deleteModalBool, setDeleteModalBool] = useState(false);
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
          profile: data.profile,
          platform: data.provider,
        });
        break;
      case "naver":
        setUserInfo({
          name: data.displayName,
          id: data.id,
          profile: data.profile,
          platform: data.provider,
        });
        break;
      case "apple":
        setUserInfo({
          name: data.display_name,
          id: data.id,
          profile: data.profile,
          platform: data.provider,
        });
        break;
    }
  };

  return (
    <S.Container>
      {plusModalBool ? (
        <PlusPlaylistModal
          userInfo={userInfo}
          setPlusModalBool={setPlusModalBool}
          playlistBundle={playlistBundle}
          setPlaylistBundle={setPlaylistBundle}
        />
      ) : (
        <></>
      )}
      {deleteModalBool ? <Modal /> : <></>}
      <S.TestHeader />
      <PageInTroduce pageTitle="MYPAGE" />
      <S.InfoLayout>
        <ProfileSection userInfo={userInfo} />
        <PlaylistSection
          setPlusModalBool={setPlusModalBool}
          playlistBundle={playlistBundle}
          setDeleteModalBool={setDeleteModalBool}
          userInfo={userInfo}
        />
      </S.InfoLayout>
    </S.Container>
  );
};

export default MyPage;
