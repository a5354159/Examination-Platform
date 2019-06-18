import React,{useEffect,Component} from "react";
import { connect } from "dva";
import style from './index.css'
import { Link } from "dva/router"
import { Layout, Button, Icon, Select, Tag, Modal, Form, Row, Col, Input,Table} from "antd";
import Editor from "for-editor";
import Alise from "./Alise/index.js";


const { Content } = Layout;
const { Option } = Select;
function ExamList(props){
// const { getFieldDecorator } = props.form

const {sexam,
  // examtypes
}=props
// console.log(sexam)
console.log(props)
console.log(sexam)
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const column = [
    {
      render: text => (
          <>
            <h4>{text.title}</h4>
          </>
      ),
    },
    {
      render: text => (
          <>
            <h4>考试班级</h4>
            <p>{text.grade_name}</p>
          </>
      ),
    },
    {
      render: text => (
          <>
            {
              <p>{text.user_name}</p>
            }
          </>
      ),
    },
    {
      render: text => (
          <>
            {
              getLocalTime(text.start_time)
            }
          </>
      ),
    },
    {
      render: text => (
          <>
            {
              getLocalTime(text.end_time)
            }
          </>
      ),
    },
    {
      key: 'action',
      render: (text, record) => (
        <span style={{ position: "absolute", right: 20 }}>
          <Link to={{ pathname: "/exam/examList", search: `id=${text.questions_id}` }}>编辑</Link>
        </span>
      ),
    },
  ];

const {getexam}=props
    useEffect(()=>{
        getexam() //试卷列表
        // props.getExamClass();//考试类型
    // props.CourseClass()//课程
    // props.getAllCourse(); //课程类型  getsubject 返回名subjectType

    },[])
    let handleSubmit = e => {
        e.preventDefault();
        console.log('查询')
        // props.form.validateFields((err, values) => {
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
        // });
      };
    return (
        <div className='wrap'>
            <div className='box'>
                <h2 style={{ padding: "20px 0px" }}>添加考试</h2>
                <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,  
                    minHeight: 80,
                    borderRadius: 15,
                    overflow: 'auto',
                }}
                >
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Col span={8}>
                        <Form.Item>
                            考试类型:
                            {/* {getFieldDecorator('exam_id', {})(
                            <Select
                                style={{ width: 120 }}
                                dropdownRender={menu => (
                                <div>
                                    {menu}
                                </div>
                                )}
                            >
                                 {
                                examtypes.map(item => (
                                    <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                ))
                                } 
                            </Select>
                            )} */}
                        </Form.Item>
                    </Col>
                        <Col span={8}>
                            <Form.Item>题目类型:
                                {/* {getFieldDecorator('questions_type_id', {})(
                                <Select
                                style={{ width: 120 }}
                                dropdownRender={menu => (
                                    <div>
                                    {menu}
                                    </div>
                                )}
                                >
                                 {
                                    questions_type.map(item => (
                                    <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                    ))
                                }
                                </Select>
                            )} */}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Button className={style.btn} htmlType="submit" type="primary">
                            <Icon type="search" />查询
                        </Button>
                        </Col>
                    </Row>
                
                </Form>                
                
                </Content>
                <Content
                style={{
                    background: "#fff",
                    padding: 24,
                    margin:'10px 0 0 0',  
                    minHeight: 280,
                    borderRadius: 15,
                    overflow: 'auto',
                }}
                >
                    <div>
                    {/* {sexam.map(item=>(
                        <ul>
                            <li>
                            <span>{item.title}</span>
                            <span>考试班级</span>
                            </li>
                            <li>
                            <span>{item.title}</span>
                            </li>
                        </ul>
                    ))} */}
<div>
    <h4>试卷列表</h4>
    {/* <Table columns={columns} size="middle" /> */}
    <Table columns={column} dataSource={sexam} size="middle" />
  </div>
                    </div>
                </Content>
            </div>
        </div>
    )

    function getLocalTime(nS) {    
      console.log(new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')) 
      return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ').replace('下午','').replace('上午','');     
   }
   
}

const MapState = state => {
    console.log(state)
    return {
      ...state.examlist
    }
  }

const MapDispatch = dispatch => ({
    //试卷列表
    getexam(){
        console.log('a')
        dispatch({
            type:'examlist/getexamlists'
        })
    },

    // //考试类型
    // getExamClass() {
    //     console.log('222')
    //     dispatch({
    //       type: "examlist/getaExamTypes",
    //     })
    // },

    // //all课程类型
    // getAllCourse() {
    //   dispatch({
    //     type: "examlist/getSubject",
    //   })
    // }
})

export default connect(MapState,MapDispatch)(ExamList)