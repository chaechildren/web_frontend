import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Grid, Button, Checkbox, Segment } from "semantic-ui-react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ArduinoPost from "./Pages/ArduinoPost";

function App() {
  return (
    <>
      <div className="app">
        <Grid
          celled
          verticalAlign="middle"
          container
          centered
          columns={2}
          divided
          textAlign="center"
        >
          <Grid.Row>
            <Grid.Column>
              <Login />
            </Grid.Column>
            <Grid.Column>
              <Register />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <ArduinoPost />
            </Grid.Column>
            <Grid.Column>
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default App;
