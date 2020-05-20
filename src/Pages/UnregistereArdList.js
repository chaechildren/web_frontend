import React, { useState, useEffect } from "react";
import { Card, Segment, Grid } from "semantic-ui-react";
import { baseUrl } from "../Constants/contants";
import axios from "axios";

const UnregistereArdList = (props) => {
  const [ardList, setArdList] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ardList = await axios.get(baseUrl + "/arduino/unregistered");
      const userList = await axios.get(baseUrl + "/user/");
      if (ardList && ardList.data) {
        console.log("ardlist", ardList.data.ardList);
        setArdList(ardList.data.ardList);
      }
      if (userList && userList.data) {
        setUserList(userList.data.userList);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Card.Group>
              <Card color="green">
                <Card.Content>
                  <Card.Header>Unregistered Arduino Data</Card.Header>
                </Card.Content>
              </Card>

              {ardList &&
                ardList.length > 0 &&
                ardList.map((arduino) => (
                  <Card color="green">
                    <Card.Content>
                      <Card.Header>Arduino Id : {arduino.ID}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            <Card.Group vi>
              <Card color="orange">
                <Card.Content>
                  <Card.Header>All User Data</Card.Header>
                </Card.Content>
              </Card>
              {userList &&
                userList.length > 0 &&
                userList.map((user) => (
                  <Card color="orange">
                    <Card.Content>
                      <Card.Header>User Id : {user.ID}</Card.Header>
                    </Card.Content>
                  </Card>
                ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};
export default UnregistereArdList;
