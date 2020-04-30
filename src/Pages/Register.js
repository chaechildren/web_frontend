import React, { useState } from "react";
import { Header, Grid, Form, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import { baseUrl } from "../Constants/contants";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(baseUrl + "/phone/login", {
      ID: email,
      PW: password,
    });
    console.log(result.data);
    setEmail("");
    setPassword("");
  };
  console.log(email, password);
  return (
    <>
      <Header as="h2" icon color="orange" textAlign="center">
        <Icon name="puzzle" color="orange" />
        Register for Arduino Heat
      </Header>
      <Form style={{ maxWidth: 450, marginTop: 30 }} onSubmit={onSubmit}>
        <Form.Field>
          <label>email</label>
          <input
            placeholder="email..."
            value={email}
            onChange={onChangeEmail}
          />
        </Form.Field>
        <Form.Field>
          <label>password</label>
          <input
            placeholder="Password ..."
            value={password}
            onChange={onChangePassword}
          />
        </Form.Field>
        <Form.Field>
          <label>password confirm</label>
          <input
            placeholder="Confirm password..."
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </Form.Field>

        <Button disabled color="orange" icon type="submit">
          <Icon name="signup" />
          {"  "} Not Developed
        </Button>
      </Form>
    </>
  );
};

export default Register;
