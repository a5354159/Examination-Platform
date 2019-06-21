import React, { useEffect } from "react";
import { Layout, Table, Divider, Tag, Modal, Input } from "antd";
import { connect } from "dva";
const { Header, Content } = Layout;
function MarkingManage(props) {
  useEffect(() => {
    props.Markingsclass();
    console.log(props);
  }, []);
  const columns = [
    {
      title: "班级名",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "课程名称",
      dataIndex: "className",
      key: "className"
    },
    {
      title: "阅卷状态",
      dataIndex: "MarkingState",
      key: "MarkingState"
    },
    {
      title: "课程名称",
      dataIndex: "classAddr",
      key: "classAddr"
    },
    {
        title: "成材率",
        dataIndex: "Success",
        key: "Success"
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
            批卷
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
            address: item.grade_name,
            className:item.subject_text,
            classAddr:item.subject_text,
            Success:item.room_text
          };
        })
      : null;
  return (
    <Layout>
      <Header>
        <h2>待批班级</h2>
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
  return { ...state.Markings };
};
const mapDispatchToProp = dispatch => {
  return {
    Markingsclass: () => {
      dispatch({
        type: "Markings/Classs"
      });
    }
  };
};
export default connect(
  mapstateToProp,
  mapDispatchToProp
)(MarkingManage);
