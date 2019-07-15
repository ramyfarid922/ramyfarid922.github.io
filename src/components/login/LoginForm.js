import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import PropTypes from "prop-types";
import validateInput from "../../validations/login";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      password: "",
      errors: {},
      isLoading: false
    };

    // Binding the event handlers with bind(this)
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      // Using the injected action creator in props to dispatch action
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        response => {
          console.log(response);
          this.props.history.push("/");
        },
        ({ response }) => {
          console.log(response.data.errors);
          this.setState({ errors: response.data.errors });
        }
      );
    }
  }
  render() {
    const { identifier, password, errors, isLoading, onChange } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <h3>Log In</h3>
              {errors.form && (
                <div className="alert alert-danger">{errors.form}</div>
              )}
              <div className="row">
                <div className="col-md-4">
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      field="identifier"
                      label="Username/Email"
                      value={identifier}
                      onChange={this.onChange}
                      error={errors.identifier}
                    />
                    <TextFieldGroup
                      field="password"
                      label="Username/Email"
                      value={password}
                      onChange={this.onChange}
                      error={errors.password}
                      type="password"
                    />
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

// We don't need to have any piece of state within this component?
// That's why we pass null to connect! Need more explanation
export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
);
