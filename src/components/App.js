import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import NavigationBarSB from "./NavigationBarSB";

import FlashMessagesList from "./flash/FlashMessagesList";
import Greetings from "./Greetings";
import SignupPage from "./signup/SignupPage";
import LoginPage from "./login/LoginPage";
import HomePage from "./personal/HomePage";
import PortfolioPage from "./personal/PortfolioPage";

export default class App extends Component {
  render() {
    return (
      <div className="main-banner">
        {/* <NavigationBar /> */}
        <NavigationBarSB />

        <FlashMessagesList />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}
