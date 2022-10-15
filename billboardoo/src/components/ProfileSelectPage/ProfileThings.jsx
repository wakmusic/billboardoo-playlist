import React from "react";
import axios from "axios";
import * as S from "./styled";

const ProfileThings = ({ link, item, userInfo }) => {
  const setUserProfile = () => {
    axios
      .post("/api/profile/set", {
        clientId: userInfo.id,
        image: item,
      })
      .then((res) => {});
  };

  return <S.ProfileThings onClick={setUserProfile} src={link} key={item} />;
};

export default ProfileThings;
