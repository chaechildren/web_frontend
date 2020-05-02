import React, { useState } from "react";
import {
  Sidebar,
  Segment,
  Menu,
  Button,
  Checkbox,
  Label,
} from "semantic-ui-react";

const SidePanel = (props) => {
  const [visible, setVisible] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <>
      <Segment>
        <Checkbox
          label={
            <Label color="teal" onClick={onClick}>
              Sidebar Open{" "}
            </Label>
          }
        />
      </Segment>
      <Sidebar as={Menu} visible={visible} vertical size="wide">
        <Segment>
          <Label color="teal" onClick={onClick}>
            Close Sidebar
          </Label>
        </Segment>
        <Menu.Item header as="h1">
          Arduino Heat
        </Menu.Item>
        <Menu.Item>
          <Button
            as="a"
            color="teal"
            icon="signup"
            content="유저 로그인 / 가입"
          />
        </Menu.Item>
      </Sidebar>
    </>
  );
};
export default SidePanel;
