import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import ImageCard from "./ImageCard";

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
      <header className="bg-dark py-5 h-100">
        <div className="container h-100">
          <div className="row h-100 mb-4 align-items-center">
            <div className="container image-section">
              <ImageCard />
            </div>
          </div>
          <div className="row h-100 align-items-center">
            <div className="container">
              <div className="row h-100 align-items-center">
                <h2 className="text-white-50 text-center w-100 mb-2 name-title">
                  Ramy Farid
                </h2>
              </div>
              <div className="row h-100 align-items-center">
                <p className="lead mb-3 text-white-50 text-center job-title w-100">
                  Full stack web developer and a software builder at heart.
                </p>
              </div>
              <div className="row h-100 align-items-center">
                <p className="lead mb-3 text-white-50 text-center job-description">
                  Stack-agnostic developer who favors Javascript development
                  stack. I code across the stack from deploying using the cloud
                  web services and up to refining the web UI and what's in
                  between.
                </p>
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
