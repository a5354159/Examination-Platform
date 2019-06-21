import React, { Component } from "react";
import { Modal, Button, Input, Table, message } from "antd";
import "./AddStyle.scss";
import { connect } from "dva";
const columns = [
  {
    title: "类型ID",
    dataIndex: "questions_type_id",
    // render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "类型名称",
    dataIndex: "questions_type_text"
  },
  {
    title: "操作",
    dataIndex: "questions_type_sort",
    render: text => <a href="javascript:;">删除</a>
  }
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};
class Type extends Component {
  state = { visible: false, val: "" };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  random = () => {
    return Math.floor(Math.random() * 100 - 1);
  };
  handleOk = e => {
    let obj = {};
    obj.text = this.state.val;
    obj.sort = this.random() + "";
    this.props.addtype({
      text: obj.text,
      sort: obj.sort
    });
    message.success("添加成功");
    this.setState({
      visible: false
    });
    window.location.reload();
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    this.props.type();
  }
  render() {
    const { exo } = this.props;
    return (
      // <div className="content">
      <div className="wrap">
        <div className="box">
          <h2 style={{ padding: "20px 0px", marginTop: "10px" }}>考试分类</h2>
          <div className="el_conent">
            <Button type="primary" onClick={this.showModal}>
              + 添加类型
            </Button>
            <Modal
              title="创建新类型"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input
                placeholder="请输入类型名称"
                value={this.state.val}
                onChange={e => {
                  console.log(this.setState({ val: e.target.value }));
                }}
              />
            </Modal>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={exo}
            />
          </div>
        </div>
      </div>
    );
  }
}

// props的类型检查
Type.propTypes = {};
// props的默认值
Type.defaultProps = {};

const mapStateToProps = state => {
  console.log("state...", state);
  return {
    ...state.user,
    ...state.example
  };
};

const mapDisaptchToProps = dispatch => {
  return {
    type() {
      dispatch({
        type: "user/type"
      });
    },
    addtype(data) {
      dispatch({
        type: "example/insertTypes",
        payload: data
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(Type);
