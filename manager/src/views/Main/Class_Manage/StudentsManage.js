import React, { useEffect } from "react";
import {
  Layout,
  Button,
  Icon,
  Table,
  Divider,
  Tag,
  Modal,
  Input,
  Form,
  Select
} from "antd";
import { connect } from "dva";
const { Option } = Select;
const { Header, Content } = Layout;

function StudentsManage(props) {
  useEffect(() => {
    props.classr();
    console.log(props);
  }, []);
  const { getFieldDecorator, getFieldsValue } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    getFieldsValue(() => {});
  };
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "学号",
      dataIndex: "Student_ID",
      key: "Student_ID"
    },
    {
      title: "班级",
      dataIndex: "class",
      key: "class"
    },
    {
      title: "教室号",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "密码",
      dataIndex: "pwd",
      key: "pwd"
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
    props.Studentdata.length > 0
      ? props.Studentdata.map((item, i) => {
          return {
            key: item.student_id,
            name: item.student_name,
            Student_ID: item.student_id,
            class: item.grade_name,
            address: item.room_text,
            pwd: item.student_pwd
          };
        })
      : null;
  return (
    <Layout>
      <Header>
        <h2>学生管理</h2>
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
            style={{
              width: "100%",
              height: "40px",
              padding: "40px 0",
              display: "flex"
            }}
          >
            <Form
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
              onSubmit={handleSubmit}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Form.Item>
                {getFieldDecorator("seach", {
                  rules: [{ required: true, message: "请输入姓名" }]
                })(<Input style={{ width: 120, }} />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("classRoom", {
                  rules: [{ required: true, message: "请选择教室后操作" }]
                })(
                  <Select
                    placeholder="请选择教室"
                    style={{ width: 120, margin: "0 24px" }}
                  >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("class", {
                  rules: [{ required: true, message: "请选择班级后操作" }]
                })(
                  <Select placeholder="请选择班级" style={{ width: 120 }}>
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                  </Select>
                )}
              </Form.Item>
            </Form>
            <Button type="primary" style={{ height: "40px", margin: "" }}>
              搜索
            </Button>
            <Button type="primary" style={{ height: "40px" }}>
              重置
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
)(Form.create({ name: "coordinated" })(StudentsManage));
