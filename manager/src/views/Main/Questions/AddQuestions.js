import React, { Component } from "react";
import { connect } from "dva";
import { Layout, Button, Icon, Select, Spin, Modal } from "antd";
import AddStyle from "./AddStyle.scss";
import Editor from "for-editor";
const confirm = Modal.confirm;
const { Content } = Layout;
const { Option } = Select;
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      value1: "",
      detail1: [],
      subject: [],
      getQuestionsType: [],
      visible: false
    };
  }
  select1 = value => {
    console.log(`selected ${value}`);
  };
  handleChange(value) {
    this.setState({
      value
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    let { value, value1, detail1, subject, getQuestionsType } = this.state;
    // let {remote_subjectType}=this.props
    // console.log(this.props.remote_subjectType)
    return (
      <div className='wrap'>

      <div className='box'>
        <h2 style={{ padding: "20px 0px" }}>添加试题</h2>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,  
            minHeight: 280,
            borderRadius: 15,
            overflow: 'auto',
          }}
        >
          {this.props.loading ? (
            <div className="loading">
              <Spin />
            </div>
          ) : null}
          <div>
            <h3>题目信息</h3>
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题干">
                  题干
                </label>
              </div>
              <div className="ant-form-item-control-wrapper">
                <input
                  className="ant-input ant-input-lg EditQuestions_titleInput__2Pvep"
                  placeholder="请输入题目标题，不超过20个字"
                  type="text"
                  style={{ width: "400px" }}
                  onChange={e => {
                    this.setState({
                      value1: e.target.value
                    });
                  }}
                />
              </div>
            </div>

            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  题目主题
                </label>
              </div>
              <div className="for-container">
                <Editor value={value} onChange={this.handleChange.bind(this)} />

                {/* <textarea
                  placeholder="请输入内容..."
                  style={{ width: "100%", height: "150px" }}
                /> */}
              </div>
            </div>

            <div>
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择考试类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "周考1" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.select1.bind(this);
                        }}
                      >
                        {/* {detail1 &&
                          detail1.map((el, i) => {
                            return (
                              <Option key={i} value={el.exam_name}>
                                {el.exam_name}
                              </Option>
                            );
                          })} */}
                      </Select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择课程类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.select1.bind(this);
                        }}
                      >
                        {/* {subject &&
                          subject.map((el, i) => {
                            return (
                              <Option key={i} value={el.subject_text}>
                                {el.subject_text}
                              </Option>
                            );
                          })} */}
                      </Select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择题目类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.select1.bind(this);
                        }}
                      >
                        {/* {getQuestionsType &&
                          getQuestionsType.map((el, i) => {
                            return (
                              <Option key={i} value={el.questions_type_text}>
                                {el.questions_type_text}
                              </Option>
                            );
                          })} */}
                      </Select>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  答案信息
                </label>
              </div>
              <div className="for-container">
                <Editor value={value} onChange={this.handleChange.bind(this)} />
                {/* <textarea
                  placeholder="请输入内容..."
                  style={{ width: "100%", height: "150px" }}
                /> */}
              </div>
            </div>
            <div className="EditQuestions_footBtn__3cky1">
              <Button type="primary" onClick={this.showModal}>
                <span style={{ color: "#fff" }} onClick={this.btn.bind(this)}>
                  提 交
                </span>
              </Button>
            </div>
            <div>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>确定添加吗</p>
              </Modal>
            </div>
          </div>
        </Content>
      </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.subjectType();
  }

  componentWillReceiveProps(newProps) {
    // this.setState({
    //   detail1: newProps.remote_subjectType,
    //   subject: newProps.subject,
    //   getQuestionsType: newProps.getQuestionsType_data
    // });
  }

  btn = () => {
    confirm({
      title: "你确定要添加这道试题吗?",
      content: "真的要添加吗？",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };
}
let mapStateToProp = state => {
  return { ...state.questions };
};
let mapDispatchToProp = dispatch => {
  return {
    subjectType() {
    //   dispatch({
    //     type: "questions/question"
    //   });
    }
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Add);
