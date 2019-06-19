import React, { useEffect, useState } from "react";
import style from "./index.css";
import { connect } from "dva";
import { Link } from "dva/router"
import { Layout, Breadcrumb, Select, Row, Col, Button, Icon, Tag, Table, Form, Empty } from 'antd';
import AddStyle from "./AddStyle.scss";
const { Content } = Layout;
const { Option } = Select;
const columns = [
  {
    dataIndex: '',
    key: '',
    render: text => (
      <Link to={{ pathname: "/questions/detail", search: `id=${text.questions_id}` }}>
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
    ),
  },
  {
    key: 'action',
    render: (text, record) => (
      <span style={{ position: "absolute", right: 20 }}>
        <Link to={{ pathname: "/edit/questions", search: `id=${text.questions_id}` }}>编辑</Link>
      </span>
    ),
  },
];
function Look(props) {
  const { getFieldDecorator } = props.form
  const {getExamClass} =props
  const { examType, questions_type, subjectType, allQuestion } = props;
  let [ind, updataInd] = useState(-1)
  useEffect(() => {
    examType();
    props.getAllCourse(); //课程类型  getsubject 返回名subjectType
    props.getAllExam();
    props.getCourseClass()
  }, [])
// console.log(props)
// console.log(questions_type)
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        let payload = {
          questions_type_id: values.questions_type_id,
          exam_id: values.exam_id
        }
        if (ind !== -1) {
          payload.subject_id = subjectType[ind].subject_id
        }
        props.getClassData(payload)
        console.log(props)
      }
    });
  };
  return (
    <div className='wrap'>
      <div className='box'>
    {/* <Layout style={{ padding: '0 24px 24px' }}> */}
      {/* <Breadcrumb style={{ margin: '16px 0' }}> */}
        {/* <Breadcrumb.Item> */}
        <h2 style={{ padding: '20px 0px', marginTop: "10px" }}>试题分类</h2>
        {/* </Breadcrumb.Item> */}
      {/* </Breadcrumb> */}
      <Content
        style={{
          background: '#fff',
          padding: 24,
          // margin: 0,
          // minHeight: 180,
          border:'none',
          borderRadius:'15px'
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row className={style.row}>
            <Col span={3}>课程类型:</Col>
            <Col span={21}>
              <div>
                <Tag color={ind === -1 ? "blue" : null} onClick={() => updataInd(-1)}>All</Tag>
                {
                  subjectType.map((item, index) => (
                    <Tag onClick={() => updataInd(index)} color={ind === index ? "blue" : null} className={style.tag} key={item.subject_id}>{item.subject_text}</Tag>
                  ))
                }
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item>
                考试类型:
                {getFieldDecorator('exam_id', {})(
                  <Select
                    style={{ width: 120 }}
                    dropdownRender={menu => (
                      <div>
                        {menu}
                      </div>
                    )}
                  >
                    {/* {
                      examType&&examType.map(item => (
                        <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                      ))
                    } */}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>题目类型:
                {getFieldDecorator('questions_type_id', {})(
                <Select
                  style={{ width: 120 }}
                  dropdownRender={menu => (
                    <div>
                      {menu}
                    </div>
                  )}
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
                <Icon type="search" />查询
              </Button>
            </Col>
          </Row>
        </Form>
        {allQuestion.length === 0 ? <Empty /> : <Table rowKey={"questions_id"} className={style.table} columns={columns} dataSource={allQuestion} />}
      </Content>
    {/* </Layout> */}
    </div>
    </div>
  )
}
const MapState = state => {
  console.log(state)
  return {
    ...state.question
  }
}
const MapDispatch = dispatch => ({
  //获取所有考试类型
  examType() {
    // console.log('222')
    // dispatch({
    //   type: "user/getSubject",
    // })
  },
  //获取所有课程类型
  getAllCourse() {
    // dispatch({
    //   type: "question/getSubject",
    // })
  },
  // //所有题目
  getAllExam() {
    // dispatch({
    //   type: "question/getAllquestion"
    // })
  },
  // //所有题目类型
  getCourseClass() {
    // dispatch({
    //   type: "question/getQuestionsType",
    // })
  },
  // //按条件查询
  getClassData(payload) {
    // dispatch({
    //   type: "questions/getClassData",
    //   payload,
    // })
  }
})
export default connect(MapState, MapDispatch)(Form.create({ name: "search_question" })(Look))


// import React, {useEffect,Component} from 'react';
// import {connect} from 'dva';

// // import "./remoteList.scss";
// // import Relist from "./Relist";
// import {
//   Layout,
//   Menu,
//   Breadcrumb,
//   Icon,
//   Spin,
//   Tag,
//   Select,
//   Button,
//   List,
//   Avatar,
//   Skeleton,
//   Form,
//    Input, 
//    Checkbox
// } from "antd";
// const { SubMenu } = Menu;
// const { Option } = Select;
// const { Header, Content, Sider } = Layout;
// const CheckableTag = Tag.CheckableTag;
// const tagsFromServer = [
//   "所有",
//   "javaScipt中下",
//   "模块化开发",
//   "移动端开发",
//   "基础节点",
//   "组件开发（VUE）",
//   "组件式开发（反应）",
//   "项目实战",
//   "javaScript的高级",
//   "节点高级"
// ];

// function IndexPage(props){
//   useEffect(()=>{
//     props.getQuestions();
//     // state.selectedTags: []
    
//   }, []);
//   const { getQuestions } = props;
//   // const { getFieldDecorator } = this.props.form;
// //     const {arr}=this.props
    
// //     const { selectedTags } = this.state;
// //     console.log(this.props)
// console.log(props)
//   return null;
// }

// const mapStateToProps = state=>{
//   // console.log('state..', state);
//   return {
//   ...state.getQuestions
//   }
// }
// const mapDispatchToProps = dispatch=>{
//   return {
//     getQuestions(){
//       dispatch({
//         type: 'questions/getQuestions'
//       })
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);



// // let arrs=['周考一','简答题']
// // class remoteList extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedTags: [],
// //       arrs:['周考一','简答题']
// //     };
// //     // console.log(props.loading);
// //   }
// //   componentDidMount() {
// //     this.props.query();
// //   }
// //   handleChange(tag, checked) {
// //     const { selectedTags } = this.state;
// //     const nextSelectedTags = checked
// //       ? [...selectedTags, tag]
// //       : selectedTags.filter(t => t !== tag);
// //     // console.log("You are interested in: ", nextSelectedTags);
// //     this.setState({ selectedTags: nextSelectedTags });
// //   }
// //   conten(val){
// //     console.log(val)
// //   }
// //   handleChanges(value) {
// //     // if(!value){
// //     //   console.log('kong');
// //     // }else{
// //     //   // arrs.push(value.key)
// //     //   console.log(this.state.arrs)
// //     //   var a=this.state.arrs.findIndex(item=>{return item==value.key})
// //     //   console.log(a)
// //     //   if(a==-1){
// //     //     if(value.key=='简答题'){
// //     //       this.state.arrs.splice(1,1,value.key)
// //     //     }else{
// //     //       this.state.arrs.splice(0,1,value.key)
          
// //     //     }
// //     //     console.log(this.state.arrs)
// //     //   }
// //     // }
// //     // this.props.condition({questions_id:this.state.arr.questions_id,subject_text:this.state.arr.subject_text});
// //   }

// //   handleSubmit = e => {
// //     e.preventDefault();
// //     this.props.form.validateFields((err, values) => {
// //       if (!err) {
// //         // console.log('Received values of form: ', values);
// //         console.log(values)
// //       }
// //     });
// //   };

// //   render() {
// //     const { getFieldDecorator } = this.props.form;
// //     const {arr}=this.props
    
// //     const { selectedTags } = this.state;
// //     console.log(this.props)
// //     return (
// //       <>
// //         <h2 style={{ padding: "20px 0px" }}>查看试题</h2>
// //         <Content
// //           style={{
// //             background: "#fff",
// //             padding: 24,
// //             margin:' 0 0 20px 0',
// //             height: 240,
// //             borderRadius:'15px'
// //           }}
// //           className='top_main'
// //         >
// //           {this.props.loading.global ? (
// //             <div>
// //               <Spin />
// //             </div>
// //           ) : (
// //             <div className="contnts">
// //               <div className="contnts_wrap">
// //                 <h6 style={{ marginRight: 8, display: "inline" }}>课程类型:</h6>
// //                 <div  className="contnts_list">
// //                   {tagsFromServer.map(tag => (
// //                   <CheckableTag
// //                     key={tag}
// //                     checked={selectedTags.indexOf(tag) > -1}
// //                     onChange={checked => this.handleChange(tag, checked)}
// //                   >
// //                     {tag}
// //                   </CheckableTag>
// //                 ))}
// //                 </div>
                
// //               </div>
// //               <div>
// //                 <div>
// //                   <span>考试类型:</span>
// //                   <Select
// //                     labelInValue
// //                     defaultValue={{ key: "周考一" }}
// //                     style={{ width: 120 }}
// //                     onChange={(e) => {
// //                       this.handleChanges(e);
// //                     }}
// //                   >
// //                     <Option value="周考一">周考一</Option>
// //                     <Option value="周考二">周考二</Option>
// //                     <Option value="周考三">周考三</Option>
// //                     <Option value="月考">月考</Option>
// //                   </Select>
// //                   ,
// //                 </div>
// //                 <div>
// //                   <span>考试类型:</span>
// //                   <Select
// //                     labelInValue
// //                     defaultValue={{ key: "手写代码" }}
// //                     style={{ width: 120 }}
// //                     onChange={(e) => {
// //                       this.handleChanges(e);
// //                     }}
// //                   >
// //                     <Option value="简答题">简答题</Option>
// //                     <Option value="代码阅读题">代码阅读题</Option>
// //                     <Option value="代码补全">代码补全</Option>
// //                     <Option value="修改错误">修改错误</Option>
// //                     <Option value="手写代码">手写代码</Option>
// //                   </Select>
// //                   ,
// //                 </div>
// //                 <div>
// //                   <Button
// //                     type="primary"
// //                     icon="search"
// //                     style={{ color: "#fff" }}
// //                     onClick={() => {
// //                       this.handleChanges();
// //                     }}
// //                   >
// //                     Search
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //           <div>
// //           </div>
// //         </Content>
// //         <Content
// //         style={{
// //             background: "#fff",
// //             padding: 24,
// //             margin: 0,
// //             minHeight: 280,
// //             borderRadius:'15px'
// //           }}
// //         >
// // {/* <Form onSubmit={this.handleSubmit} className="login-form">
// //         <Form.Item>
// //           {getFieldDecorator('username', {
// //             rules: [{ required: true, message: 'Please input your username!' }],
// //           })(
// //             <Input
// //               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
// //               placeholder="Username"
// //             />,
// //           )}
// //         </Form.Item>
// //         <Form.Item>
// //           {getFieldDecorator('password', {
// //             rules: [{ required: true, message: 'Please input your Password!' }],
// //           })(
// //             <Input
// //               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
// //               type="password"
// //               placeholder="Password"
// //             />,
// //           )}
// //         </Form.Item>
// //         <Form.Item>
        
// //           <Button type="primary" htmlType="submit" className="login-form-button">
// //             Log in
// //           </Button>
// //         </Form.Item>
// //       </Form> */}
// //           <Relist data={this.props.arr} 
// //           // onClick={(e)=>{
// //           //     this.conten(e)
// //           // }}
// //           />
          
// //         </Content>
// //       </>
// //     );
// //   }
// // }
// // const mapStateToProps = state => {
// //   return {
// //     ...state.list,
// //     loading: state.loading
// //   };
// // };

// // const mapDisaptchToProps = dispatch => {
// //   return {
// //     query(payload) {
// //       dispatch({
// //         type: "list/query",
// //         payload
// //       });
// //     },
// //     condition(payload){
// //       dispatch({
// //         type: "list/query",
// //         payload
// //       });
// //     }
// //   };
// // };
// // export default connect(
// //   mapStateToProps,
// //   mapDisaptchToProps
// // )(Form.create({})(remoteList));





