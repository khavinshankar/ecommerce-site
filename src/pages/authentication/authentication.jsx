import React from "react";

import { AuthContainer } from "./authentication.styles";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const AuthPage = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  );
};

export default AuthPage;
