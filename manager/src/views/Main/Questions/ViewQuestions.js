import React, { useEffect, useState } from "react";
import style from "./index.css";
import { connect } from "dva";
import { Link } from "dva/router";
import {
  Layout,
  Breadcrumb,
  Select,
  Row,
  Col,
  Button,
  Icon,
  Tag,
  Table,
  Form,
  Empty
} from "antd";
import AddStyle from "./AddStyle.scss";
const { Content } = Layout;
const { Option } = Select;
const columns = [
  {
    dataIndex: "",
    key: "",
    render: text => (
      <Link
        to={{
          pathname: "/questions/detail",
          search: `id=${text.questions_id}`
        }}
      >
        <>
          <h4>{text.title}</h4>
          <h4>
            <Tag color="blue">{text.questions_type_text}</Tag>
            <Tag color="geekblue">{text.subject_text}</Tag>
            <Tag color="gold">{text.exam_name}</Tag>
          </h4>
          <span>{text.user_name}</span>
          <span>发布</span>
        </>
      </Link>
    )
  },
  {
    key: "action",
    render: (text, record) => (
      <span style={{ position: "absolute", right: 20 }}>
        <Link
          to={{
            pathname: "/edit/questions",
            search: `id=${text.questions_id}`
          }}
        >
          编辑
        </Link>
      </span>
    )
  }
];
function Look(props) {
  const { getFieldDecorator } = props.form;
  // const {
  //   getExamClass,
  //   getAllCourse,
  //   getAllExam,
  //   getCourseClass,
  //   getExam
  // } = props;
  // const { examType, questions_type, subjectType, allQuestion ,getAllSubject,examtypes} = props;
  let [ind, updataInd] = useState(-1);
  useEffect(() => {
    // examType();
    // getAllCourse(); //课程类型  getsubject 返回名subjectType
    // getAllExam();
    // getExam();
    // getCourseClass();
  }, []);
  console.log(props);
  // console.log(questions_type)
  let handleSubmit = e => {
    e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       let payload = {
  //         questions_type_id: values.questions_type_id,
  //         exam_id: values.exam_id
  //       };
  //       if (ind !== -1) {
  //         // payload.subject_id = subjectType[ind].subject_id;
  //       }
  //       props.getClassData(payload);
  //       // console.log(props)
  //     }
  //   });
  };
  return (
    <div className="wrap">
      <div className="box">
        {/* <Layout style={{ padding: '0 24px 24px' }}> */}
        {/* <Breadcrumb style={{ margin: '16px 0' }}> */}
        {/* <Breadcrumb.Item> */}
        <h2 style={{ padding: "20px 0px", marginTop: "10px" }}>试题分类</h2>
        {/* </Breadcrumb.Item> */}
        {/* </Breadcrumb> */}
        <Content
          style={{
            background: "#fff",
            padding: 24,
            // margin: 0,
            // minHeight: 180,
            border: "none",
            borderRadius: "15px"
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Row className={style.row}>
              <Col span={3}>课程类型:</Col>
              <Col span={21}>
                <div>
                  <Tag
                    color={ind === -1 ? "blue" : null}
                    onClick={() => updataInd(-1)}
                  >
                    All
                  </Tag>
                  {/* {// getAllSubject subjectType
                  getAllSubject &&
                    getAllSubject.map((item, index) => (
                      <Tag
                        onClick={() => updataInd(index)}
                        color={ind === index ? "blue" : null}
                        className={style.tag}
                        key={item.subject_id}
                      >
                        {item.subject_text}
                      </Tag>
                    ))} */}
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item>
                  考试类型:
                  {getFieldDecorator("exam_id", {})(
                    <Select
                      style={{ width: 120 }}
                      dropdownRender={menu => <div>{menu}</div>}
                    >
                      {/* {examtypes &&
                        examtypes.map(item => (
                          <Option key={item.exam_id} value={item.exam_id}>
                            {item.exam_name}
                          </Option>
                        ))} */}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item>
                  题目类型:
                  {getFieldDecorator("questions_type_id", {})(
                    <Select
                      style={{ width: 120 }}
                      dropdownRender={menu => <div>{menu}</div>}
                    >
                      {/* {
                    questions_type.map(item => (
                      <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                    ))
                  } */}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button className={style.btn} htmlType="submit" type="primary">
                  <Icon type="search" />
                  查询
                </Button>
              </Col>
            </Row>
          </Form>
          {/* {allQuestion.length === 0 ? (
            <Empty />
          ) : (
            <Table
              rowKey={"questions_id"}
              className={style.table}
              columns={columns}
              dataSource={allQuestion}
            />
          )} */}
        </Content>
        {/* </Layout> */}
      </div>
    </div>
  );
}
const MapState = state => {
  console.log(state);
  return {
    ...state.question,
    ...state.examlist
    // ...state.user
  };
};
const MapDispatch = dispatch => ({
 
  // //获取所有课程类型
  // examType() {
  //   // console.log('222')
  //   dispatch({
  //     type: "question/getSubject"
  //   });
  // },
  //  //获取所有考试类型
  // getAllCourse() {
  //   dispatch({
  //     type: "user/type"
  //   });
  // },
  // // //下面所有试题题目
  // getExam() {
  //   dispatch({
  //     type: "question/getQuestionsType"
  //   });
  // }, //1
  // getAllExam() {
  //   dispatch({
  //     // type: "examlist/AllSubject"
  //     type: "question/ExamType"
  //   });
  // },

  // // //所有题目类型
  // getCourseClass() {
  //   // dispatch({
  //   //   type: "question/getSubject",
  //   // })
  // },
  // // //按条件查询
  // getClassData(payload) {
  //   dispatch({
  //     type: "questions/getClassData",
  //     payload
  //   });
  // }
});
export default connect(
  MapState,
  MapDispatch
)(Form.create({ name: "search_question" })(Look));
