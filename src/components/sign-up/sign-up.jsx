import React, { useState } from "react";
import { connect } from "react-redux";

import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../redux/user/user-actions";

const SignUp = (props) => {
  const [userCreds, setUserCreds] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCreds;
  const { signUp } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password Mismatch!!!");
      return;
    }
    signUp(displayName, email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGNUP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (dispName, email, password) => {
      return dispatch(signUpStart({ dispName, email, password }));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
