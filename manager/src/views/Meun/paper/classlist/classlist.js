import React, { Component } from "react";
import style from "./index.scss";
import { connect } from "dva";
import { Layout, Form, Input, Button, Modal, message } from "antd";
import { Table, Divider, Tag } from "antd";
let columns = [
  {
    title: "班级名",
    dataIndex: "class",
    key: "class",
    render: text => <span></span>
  },
  {
    title: "课程名称",
    dataIndex: "age",
    key: "age",
    render: (text, record) => <span />
  },
  {
    title: "阅卷状态",
    dataIndex: "address",
    key: "address",
    render: (text, record) => <span />
  },
  {
    title: "课程名称",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {/* {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })} */}
      </span>
    )
  },
  {
    title: "成材率",
    key: "action",
    render: (text, record) => (
      <span>
        {/* <a href="javascript:;">Invite {record.class}</a> */}
        {/* <Divider type="vertical" /> */}
        {/* <a href="javascript:;">Delete</a> */}
      </span>
    )
  },
  {
    title: "操作",
    dataIndex: "",
    key: "address",
    render: (text, record) => <span />
  }
];

let data = [
  {
    key: "1",
    class: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  }
];

class Classlist extends Component {
  state = {};

  render() {
    return (
      <div className={style.wrap}>
        <h4 className={style.mainTitle}>特批班级</h4>
        <div className={style.content}>
          {/* <Content className={style.content}>aaa</Content> */}
          <Table columns={columns} dataSource={data} />
          {/* {console.log(this.data)} */}
        </div>
      </div>
    );
  }
}

export default Classlist;
