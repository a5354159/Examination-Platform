import React, { useEffect, Component } from "react";
import { connect } from "dva";
import style from "./index.css";
import { Link } from "dva/router";
import {
  Layout,
  Button,
  Icon,
  Select,
  Tag,
  Modal,
  Form,
  Row,
  Col,
  Input,
  Table
} from "antd";
import Editor from "for-editor";
import Alise from "../AddExam/Alise/index.js";

const { Content } = Layout;
const { Option } = Select;

class ExamList extends Component {
  state = {};
  columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Address",
      dataIndex: "address"
    }
  ];

  handleSubmit = e => {
    e.preventDefault();
    console.log("查询");
    this.props.form.validateFields((err, values) => {
      console.log(values);
      //   if (!err) {
      //     let payload = {
      //       // questions_type_id: values.questions_type_id,
      //       exam_id: values.exam_id
      //     }
      //     // if (ind !== -1) {
      //     //   payload.subject_id = subjectType[ind].subject_id
      //     // }
      //     // props.getClassData(payload)
      //     console.log(props)
      //   }
    });
  };
  getLocalTime(nS) {
    console.log(
      new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/, " ")
    );
    return new Date(parseInt(nS) * 1000)
      .toLocaleString()
      .replace(/:\d{1,2}$/, " ")
      .replace("下午", "")
      .replace("上午", "");
  }
  handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }
  render() {
    const { getexam, sexam, examtypes, getAllSubject } = this.props;
    const { getFieldDecorator } = this.props.form;
    console.log(this.props);
    const column = [
      {
        render: text => (
          <div className={style.tabs}>
            <h4>{text.title}</h4>
            <h4>考试班级
            <p>{text.grade_name}</p>

            </h4>
            <p>{text.user_name}</p>
            <>{this.getLocalTime(text.start_time)}</>
            <>{this.getLocalTime(text.end_time)}</>
            <span >
            <Link
              to={{
                pathname: "/exam/examList/detal",
                search: `id=${text.exam_id}`
              }}
            >
              编辑
            </Link>
          </span>
          </div>
        )
      }
    ];
    return (
      <div className="wrap">
        <div className="box">
          <h2 style={{ padding: "20px 0px" }}>试卷列表</h2>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 80,
              borderRadius: 15,
              overflow: "auto"
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col span={8}>
                  <Form.Item>
                    考试类型:
                    {getFieldDecorator("exam_id", {})(
                      <Select
                        style={{ width: 120 }}
                        dropdownRender={menu => <div>{menu}</div>}
                      >
                        {examtypes.map(item => (
                          <Option key={item.exam_id} value={item.exam_id}>
                            {item.exam_name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item>
                    题目类型:
                    {getFieldDecorator("subject_id", {})(
                      <Select
                        style={{ width: 120 }}
                        dropdownRender={menu => <div>{menu}</div>}
                      >
                        {getAllSubject &&
                          getAllSubject.map(item => (
                            <Option
                              key={item.subject_id}
                              value={item.subject_id}
                            >
                              {item.subject_text}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Button
                    className={style.btn}
                    htmlType="submit"
                    type="primary"
                  >
                    <Icon type="search" />
                    查询
                  </Button>
                </Col>
              </Row>
            </Form>
          </Content>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: "10px 0 0 0",
              minHeight: 280,
              borderRadius: 15,
              overflow: "auto"
            }}
          >
            <div>
              <div>
                <h4>试卷列表</h4>
                <Table columns={column} dataSource={sexam} size="middle" />
              </div>
            </div>
          </Content>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getexam();
    this.props.ExamType();
    this.props.AllSubject();
  }
}

const MapState = state => {
  console.log(state);
  return {
    ...state.examlist,
    ...state.examtypes,
    ...state.getAllSubject
  };
};

const MapDispatch = dispatch => ({
  //试卷列表
  getexam() {
    console.log("a");
    dispatch({
      type: "examlist/getexamlists"
    });
  },

  //考试类型
  ExamType() {
    console.log("222");
    dispatch({
      type: "examlist/ExamType"
    });
  },

  // //all课程类型
  AllSubject() {
    dispatch({
      type: "examlist/AllSubject"
    });
  }
});

export default connect(
  MapState,
  MapDispatch
)(Form.create({})(ExamList));
