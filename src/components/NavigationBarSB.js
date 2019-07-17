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

class NavigationBarSB extends Component {
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
    const userLinks = (
      <Nav className="mr-auto">
        <NavLink
          onClick={this.logout}
          to="/logout"
          className="nav-link"
          activeClassName="active"
        >
          Logout
        </NavLink>
      </Nav>
    );
    const guestLinks = (
      <Nav className="mr-auto">
        {/* <NavLink to="/signup" className="nav-link" activeClassName="active">
          Sign Up
        </NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active">
          Log In
        </NavLink> */}
        <NavLink to="/home" className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">
          My Blog
        </NavLink>
      </Nav>
    );
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Ramy Farid
            </NavLink>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <NavLink
                    to="/blog"
                    className="nav-link"
                    activeClassName="active"
                  >
                    My Blog
                  </NavLink>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <NavLink
                    to="/portfolio"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Portfolio
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBarSB.propTypes = {
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
)(NavigationBarSB);
