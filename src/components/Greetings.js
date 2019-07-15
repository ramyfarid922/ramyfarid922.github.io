import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Jumbotron>
        <h1>Greetings, world!</h1>
        <p>This is the greetings component content.</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
