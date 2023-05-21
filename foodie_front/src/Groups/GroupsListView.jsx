import React, { useEffect, useState } from "react";
import { Button, List } from "antd";
import axios from "axios";
import config from "../config";
import Title from "antd/es/typography/Title";
const GroupsListView = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/groups`)
      .then((value) => {
        setGroups(value.data);
      })
      .catch((err) => {
        console.log("erro " + err);
      });
  }, []);
  return (
    <List
      style={{ margin: "64px" }}
      size="large"
      header={
        <div>
          <Title level={3}>Groups</Title>
        </div>
      }
      bordered
      dataSource={groups}
      renderItem={(item) => (
        <List.Item key={item.id}>
          {item.name}
          {!item.members.includes(localStorage.getItem("uid")) ? (
            <Button
              type="primary"
              style={{ margin: "0 8px" }}
              onClick={async (e) => {
                const d = { ...item };
                const index = item.members.indexOf(localStorage.getItem("uid"));
                let m = item.members;
                m.push(localStorage.getItem("uid"));

                d["members"] = m;
                console.log(d);
                await axios
                  .put(`${config.baseUrl}/groups/${item.id}`, d)
                  .then((vel) => {
                    window.location.reload();
                  });
              }}
            >
              Join
            </Button>
          ) : (
            <Button
              danger
              style={{ margin: "0 8px" }}
              onClick={async (e) => {
                const d = { ...item };
                const index = item.members.indexOf(localStorage.getItem("uid"));
                let m = [];
                if (index > -1) {
                  // only splice array when item is found
                  m = item.members.splice(index, 1); // 2nd parameter means remove one item only
                }
                d["members"] = m;
                console.log(d);
                await axios
                  .put(`${config.baseUrl}/groups/${item.id}`, d)
                  .then((vel) => {
                    window.location.reload();
                  });
              }}
            >
              Leave
            </Button>
          )}
        </List.Item>
      )}
    />
  );
};

export default GroupsListView;
