import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <img
        className="image-card"
        src={process.env.PUBLIC_URL + "/img/ramy.jpg"}
      />
    );
  }
}

export default ImageCard;
