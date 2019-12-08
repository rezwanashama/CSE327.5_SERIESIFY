import React from "react";
import { List } from "antd";

const Watchlist = props => {
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
          key={item.id}
        >
          <List.Item.Meta
            title={<a href={`/watchlist/${item.id}`}> {item.name} </a>}
          />
        </List.Item>
        
      )}
    />
  );
};

export default Watchlist;