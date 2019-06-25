import React, { useEffect } from "react";
import { Layout, Button, Icon, Table, Divider, Tag, Modal, Input } from "antd";
import { connect } from "dva";
const { Header, Content } = Layout;

function ClassroomManage(props) {
  useEffect(() => {
    props.classr();
    console.log(props);
  }, []);
  const columns = [
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
            删除
          </a>
        </span>
      )
    }
  ];

  const data =
    props.classRoomdata.length > 0
      ? props.classRoomdata.map((item, i) => {
          return {
            key: item.grade_id,
            address: item.room_text
          };
        })
      : null;
  return (
    <Layout>
      <Header>
        <h2>教室管理</h2>
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
            >
              <Icon type="plus" /> 添加教室
            </Button>
           
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
)(ClassroomManage);
