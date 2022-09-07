import React from "react";
import * as S from "./styled";

const LoginBox = ({ name, children }) => {
  const onClickLogin = () => {
    if (name) {
      window.location = `http://localhost/auth/login/${name}`;
    }
  };

  return (
    <S.LoginBox style={{ marginBottom: "20px" }} onClick={onClickLogin}>
      {children}
    </S.LoginBox>
  );
};

export default LoginBox;
