import React, { Component } from "react";
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

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignIn } = this.props;
    const { email, password } = this.state;

    emailSignIn(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignIn } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I alredy have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
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
  }
}

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
