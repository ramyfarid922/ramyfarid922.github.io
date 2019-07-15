import React, { Component } from "react";
import SignupForm from "./SignupForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignupRequest, isUserExists } from "../../actions/signupActions";
import { addFlashMessage } from "../../actions/flashMessages";

class SignupPage extends Component {
  render() {
    // Deconstructing/Destructuring the  signup page props into constants that we are gonna pass to children components
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    console.log(this.props);

    return (
      <div className="row">
        <div className="col-md-12">
          <SignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

// We take actions, we connect them to SignupPage and we pass it down to SignupForm
// Maybe here we should connect the SignupForm with the actions intead of this deep prop drilling
export default connect(
  state => {
    return {};
  },
  { userSignupRequest, addFlashMessage, isUserExists }
)(SignupPage);
