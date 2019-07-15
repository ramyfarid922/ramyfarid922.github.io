import axios from "axios";

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post("/api/users", userData);
  };
}

export function isUserExists(identifier) {
  // What's this returned dispatch?
  return dispatch => {
    // todo: Implement the action here vid: 14, 3:56
    return axios.get("/api/users/" + identifier);
  };
}
