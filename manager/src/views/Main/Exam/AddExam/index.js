import React,{useEffect,Component} from "react";
import { connect } from "dva";
import { Layout, Button, Icon, Select, Spin, Modal, Form, Row, Col, Input } from "antd";
import Editor from "for-editor";
const { Content } = Layout;
const { Option } = Select;

// function AddExam(props){
class AddExam extends Component {
    state = {expand: false }
    
    
// console.log(props)
// const {getexam}=props
    // useEffect(()=>{
    //     getexam()
    // },[])
    changes=e=>{
        console.log('a')
    };

     getFields() {
        const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 10; i++) {
          children.push(
            <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
              <Form.Item label={`Field ${i}`}>
                {getFieldDecorator(`field-${i}`, {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                })(<Input placeholder="placeholder" />)}
              </Form.Item>
            </Col>,
          );
        }
        return children;
      };
      handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        });
      };
    
      handleReset = () => {
        this.props.form.resetFields();
      };
    
      toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
      };
      render() {
          return (
        <div className='wrap'>
            <div className='box'>
                <h2 style={{ padding: "20px 0px" }}>添加考试</h2>
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

                <div>

                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
            </a>
          </Col>
        </Row>
      </Form>
                    {/* <div className="ant-row ant-form-item">
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
                            this.changes(e.target.value)
                            // this.setState({
                            // value1: e.target.value
                            // });
                        }}
                        />
                    </div>
                    </div> */}
                </div>
                </Content>
            </div>
        </div>
    )
      }
    
}

const MapState = state => {
    // console.log(state)
    return {
      ...state
    }
  }

const MapDispatch = dispatch => ({
    getexam(){
        // console.log('a')
        // dispatch({
        //     type:'examlist/getexamlists'
        // })
    }
})

export default connect(MapState,MapDispatch)(Form.create({})(AddExam))