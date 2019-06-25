import React, { useEffect, Component } from "react";
import { connect } from "dva";
import {
  Layout,
  Button,
  Icon,
  Select,
  Spin,
  Modal,
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  TimePicker
} from "antd";
import Editor from "for-editor";
const { Content } = Layout;
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;
// function AddExam(props){
class AddExam extends Component {
  state = { expand: false };
  changes = e => {
    console.log("a");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const values = {
        ...fieldsValue,
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ]
      };
      console.log("Received values of form: ", values);
    });
  };

  // handleSearch = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     console.log('Received values of form: ', values);
  //   });
  // };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { examtypes, getAllSubject } = this.props;

    const formItemLayout = {
      // labelCol: {
      //   xs: { span: 24 },
      //   sm: { span: 8 },
      // },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    // const config = {
    //   rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    // };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "Please select time!" }]
    };
    const count = this.state.expand ? 4 : 4;
    console.log(this.props);
    // const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrap">
        <div className="box">
          <h2 style={{ padding: "20px 0px" }}>添加考试</h2>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderRadius: 15,
              overflow: "auto"
            }}
          >
            <div>
              <Form
                className="ant-advanced-search-form"
                onSubmit={this.handleSearch}
              >
                <Row gutter={24}>
                  {/* {this.getFields()} */}
                  <div
                    className="box-wrap"
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Col span={8} key={0}>
                      <Form.Item label={`试卷名称`}>
                        {getFieldDecorator(`field-${0}`, {
                          rules: [
                            {
                              required: true,
                              message: "请输入!"
                            }
                          ]
                        })(<Input placeholder=" " />)}
                      </Form.Item>
                    </Col>
                    <Col span={8} key={1}>
                      <Form.Item label={`考试类型`}>
                        {getFieldDecorator(`exam_id`, {})(
                          <Select
                            style={{ width: 120 }}
                            dropdownRender={menu => <div>{menu}</div>}
                          >
                            {examtypes &&
                              examtypes.map(item => (
                                <Option key={item.exam_id} value={item.exam_id}>
                                  {item.exam_name}
                                </Option>
                              ))}
                          </Select>
                        )}
                      </Form.Item>
                    </Col>
                    <Col span={8} key={2}>
                      <Form.Item label={`选择课程`}>
                        {getFieldDecorator(`subject_id`, {})(
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
                    <Col span={8} key={3}>
                      <Form.Item label={`设置题量 `}>
                        {getFieldDecorator(`field-${3}`, {
                          rules: [
                            {
                              required: true,
                              message: "请输入!"
                            }
                          ]
                        })(<Input placeholder=" " />)}
                      </Form.Item>
                    </Col>
                  </div>
                </Row>
                <div />
              </Form>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="">
                  {getFieldDecorator("range-picker", rangeConfig)(
                    <RangePicker />
                  )}
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 16, offset: 1 }
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    添加
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.ExamType();
    this.props.AllSubject();
  }
}
const MapState = state => {
  return {
    ...state.examlist
  };
};
const MapDispatch = dispatch => ({
  getexam() {
    // console.log('a')
    // dispatch({
    //     type:'examlist/getexamlists'
    // })
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
)(Form.create({})(AddExam));
