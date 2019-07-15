import React, { Component } from "react";
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;
