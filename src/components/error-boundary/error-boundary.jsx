import React, { Component } from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/U3vTGjX.png" />
          <ErrorImageText>SORRY FOR THE INCONVINIENCE!</ErrorImageText>
          <ErrorImageText> we are working on it</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
