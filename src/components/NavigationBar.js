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

class NavigationBar extends Component {
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
          portfolio
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active">
          My Blog
        </NavLink>
      </Nav>
    );
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link" activeClassName="selected">
              Ramy
            </NavLink>
            {isAuthenticated ? userLinks : guestLinks}

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
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
)(NavigationBar);
