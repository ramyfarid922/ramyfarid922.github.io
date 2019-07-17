import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import {
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class BannerSB extends Component {
  constructor(props) {
    super(props);

    // Event handlers have to use bind(this) in constructor
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    // The pattern noticed here is that the component event handlers like logout
    // usually call the action creator functions which are specified as component props..
    // This coming this.props.logout is a prop passed to the component and it's an action creator
    this.props.logout();
  }

  render() {
    // this.props.auth is a prop passed to the navbar component but from where?
    // It's passed directly from the redux store since the navbar has a direct connect with piece from the store
    const { isAuthenticated } = this.props.auth;

    return (
      <header className="bg-dark py-5 mb-5 h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="container">
                <h3 className="display-4 text-white mt-5 mb-2">Ramy Farid</h3>
                <p className="lead mb-5 text-white-50">
                  Full stack web developer and a computer engineer at heart with
                  a rigid foundation in software engineering discipline.
                  Throughout my career I have used many technologies to code
                  across the web applications development stack from the initial
                  phase of the application design and architecture further to
                  coding in any part of the stack from deploying using the cloud
                  web services and up to refining the web UI and what's in
                  between.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container image-section">
                <img
                  className="image-card"
                  src={process.env.PUBLIC_URL + "/img/ramy2.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

BannerSB.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

// Understanding mapStateToProps and mapDispatchToProps is the core of REACt-REDUX
export default connect(
  mapStateToProps,
  { logout }
)(BannerSB);
