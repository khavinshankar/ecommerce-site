import React, { useState } from "react";
import { connect } from "react-redux";

import {
  SignInContainer,
  ButtonsBarContainer,
  SignInTitle,
} from "./sign-in.styles";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

const SignIn = (props) => {
  const [userCreds, setUserCreds] = useState({ email: "", password: "" });

  const { email, password } = userCreds;
  const { emailSignIn } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignIn(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCreds({ ...userCreds, [name]: value });
  };

  const { googleSignIn } = props;
  return (
    <SignInContainer>
      <SignInTitle>I alredy have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
        />

        <ButtonsBarContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignIn: () => {
      return dispatch(googleSignInStart());
    },
    emailSignIn: (email, password) => {
      return dispatch(emailSignInStart({ email, password }));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
