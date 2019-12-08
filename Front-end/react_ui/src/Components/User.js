import React from "react";
import { List } from "antd";

const User = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      // pagination={{
      //   onChange: page => {
      //     console.log(page);
      //   },
      //   pageSize: 10
      // }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.pk}
        >{console.log(item)}
          <List.Item.Meta
            title={<a href={`/watchlist/${item.id}`}> {item.name} </a>}
            description={item.last_login}
          />
          
          <p>userid : {item.email}, <br></br> watchlist id :{item.pk} , <br></br>  </p>
        </List.Item>
      )}
    />
  );
};

export default User;