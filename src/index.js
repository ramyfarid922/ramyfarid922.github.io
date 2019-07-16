import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
import { setCurrentUser } from "./actions/authActions";

import App from "./components/App";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.getItem("jwtToken"));
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
