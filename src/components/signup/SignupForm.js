import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import timezones from "../../data/timezones";
import { Jumbotron, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
import validateInput from "../../validations/signup";
import TextFieldGroup from "../common/TextFieldGroup";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      timezone: "",
      errors: {},
      isLoading: false,
      invalid: false,
      toHome: false
    };

    // Event handlers have to use bind(this) in constructor
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkUserExists(e) {
    // Event handler variables: why const instead of let?
    const field = e.target.name;
    const val = e.target.value;
    if (val !== "") {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = "There's a user with such " + field;
          invalid = true;
        } else {
          errors[field] = "";
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.userSignupRequest(this.state).then(
        response => {
          console.log(response.data);
          this.props.addFlashMessage({
            type: "success",
            text: "You signed up successfully. Welcome!"
          });
          this.props.history.push("/");
        },
        ({ response }) => {
          console.log(response.data);
          this.setState({ errors: response.data });
        }
      );
    }
  }

  render() {
    const errors = this.state.errors;
    const options = Object.keys(timezones).map(function(val) {
      return (
        <option key={timezones[val]} value={timezones[val]}>
          {val}
        </option>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <h3>Sign up</h3>
              <div className="row">
                <div className="col-md-4">
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      field="username"
                      label="Username"
                      value={this.state.username}
                      onChange={this.onChange}
                      checkUserExists={this.checkUserExists}
                      error={errors.username}
                    />
                    <TextFieldGroup
                      field="email"
                      label="Email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      checkUserExists={this.checkUserExists}
                    />
                    <TextFieldGroup
                      field="password"
                      label="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                      type="password"
                    />
                    <TextFieldGroup
                      field="passwordConfirmation"
                      label="Confirm Password"
                      value={this.state.passwordConfirmation}
                      onChange={this.onChange}
                      error={errors.passwordConfirmation}
                      type="password"
                    />

                    <div className="form-group">
                      <label className="control-label">Timezone</label>
                      <select
                        value={this.state.timezone}
                        onChange={this.onChange}
                        name="timezone"
                        className={classnames("form-control", {
                          "is-invalid": errors.timezone
                        })}
                      >
                        <option value="" disabled>
                          Choose Your Timezone
                        </option>
                        {options}
                      </select>
                      {errors.timezone && (
                        <small className="text-danger">{errors.timezone}</small>
                      )}
                    </div>

                    <div className="form-group">
                      <button
                        disabled={this.state.invalid}
                        className="btn btn-primary btn-lg"
                      >
                        Sign up
                      </button>
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

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

export default withRouter(SignupForm);
