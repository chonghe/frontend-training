import React, { Component } from "react";

import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //console.log(store.getState());
    store.subscribe(this.handleStoreChange);
  }
  render() {
    const { list, inputValue } = this.state;
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            value={inputValue}
            placeholder="input your todo info"
            style={{ width: "300px", marginRight: "10px" }}
            // 2-1 add onChange
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            Submit
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  // 2-2 define onChange
  handleInputChange = (e) => {
    // 2-3 create action
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    console.log(e.target.value);
    // 2-4 send this action to store
    store.dispatch(action);
    //console.log(e.target.value);
  };
  handleStoreChange = () => {
    this.setState(store.getState());
  };
  handleBtnClick = () => {
    const action = {
      type: "add_todo_item",
    };
    store.dispatch(action);
  };
  handleItemDelete = (index) => {
    const action = {
      type: "delete_todo_item",
      index,
    };
    store.dispatch(action);
  };
}
