import React, { useEffect } from "react";
import { connect } from "dva";
import { Layout, Button, Icon, Table, Divider, Tag, Modal, Input } from "antd";
const { Header, Content } = Layout;
var visible = false;
function ClassManage(props) {
  useEffect(() => {
    props.classr();
    console.log(props);
  }, []);

  const columns = [
    {
      title: "班级名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "课程名",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "教室号",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "操作",
      dataIndex: "dd",
      key: "ddd",
      render: (text, record) => (
        <span>
          <a
            href="javascript:;"
            onClick={e => {
              console.log(record);
            }}
          >
            修改
          </a>
          <Divider type="vertical" />
          <a
            href="javascript:;"
            onClick={e => {
              console.log(record);
            }}
          >
            删除
          </a>
        </span>
      )
    }
  ];

  const data =
    props.classdata.length > 0
      ? props.classdata.map((item, i) => {
          return {
            key: item.grade_id,
            name: item.grade_name,
            age: item.subject_text,
            address: item.room_text
          };
        })
      : null;
  return (
    <Layout>
      <Header>
        <h2>班级管理</h2>
      </Header>
      <Layout>
        <Content
          style={{
            margin: "24px",
            background: "#fff",
            borderRadius: "10px",
            padding: "24px"
          }}
        >
          <div
            className="add"
            style={{ width: "80px", height: "40px", padding: "20px 0" }}
          >
            <Button
              type="primary"
              style={{ height: "40px" }}
              onClick={() => (visible = true)}
            >
              <Icon type="plus" /> 添加班级
            </Button>
            <Modal
              title="创建新类型"
              visible={visible}
              onOk={() => (visible = false)}
              onCancel={() => (visible = false)}
            >
              <Input placeholder="请输入类型名称" />
            </Modal>
          </div>
          <div
            className="tabs"
            style={{ margin: "40px auto", Position: "relative", width: "100%" }}
          >
            <Table columns={columns} dataSource={data} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
const mapstateToProp = state => {
  return { ...state.Classmane };
};
const mapDispatchToProp = dispatch => {
  return {
    classr: () => {
      dispatch({
        type: "Classmane/Classs"
      });
    }
  };
};
export default connect(
  mapstateToProp,
  mapDispatchToProp
)(ClassManage);
