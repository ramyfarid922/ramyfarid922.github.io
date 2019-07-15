import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlashMessage from "./FlashMessage";
import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message => (
      <FlashMessage
        deleteFlashMessage={this.props.deleteFlashMessage}
        key={message.id}
        message={message}
      />
    ));
    return <div>{messages}</div>;
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessagesList);
