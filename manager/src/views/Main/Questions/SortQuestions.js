import React, {useState, useEffect,Component} from 'react';
import {connect} from 'dva';
import {Modal, Form, Input, Button,Layout,Table,} from 'antd';
import AddStyle from "./AddStyle.scss";
const { Content } = Layout;

// import React, { Component } from "react";
// import {
//   Layout,
//   Menu,
//   // Breadcrumb,
//   // Icon,
//   Table,
//   // Divider,
//   Modal,
//   Input,
//   Form,
//   Button
// } from "antd";
// import { Layout, Menu, Select, Spin ,Input,Form,Button} from "antd";
// import { connect } from "dva";

function SortQuestions(props){
  // 控制添加弹框
  let [showDialog, updateDialog] = useState(false);

  // 获取所有试题类型
  useEffect(()=>{
    props.getQuestionTypes();
  }, []);

  // 处理提交
  let handleSubmit = e=>{

  };

  const { getFieldDecorator } = props.form;
  const columns = [
          {
            title: "类型ID",
            dataIndex: "name"
          },
          {
            title: "类型名称",
            dataIndex: "age"
          },
          {
            title: "操作",
            dataIndex: "address"
          }
        ];
        const data = [
          {
            key: "1",
            name: "John Brown",
            age: "简答题",
            address: ""
          },
          {
            key: "2",
            name: "Jim Green",
            age: "代码补全",
            address: ""
          },
          {
            key: "3",
            name: "Joe Black",
            age: "简答题",
            address: ""
          }
        ];
  return <div  className='wrap'>
    <div  className='box'>
        <h2 style={{ padding: "20px 0px" }}>试题分类</h2>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280,
            borderRadius: 15
          }}
        >
          <div className="style_buttons__z2xtt">
    <Button onClick={()=>updateDialog(true)}>添加类型</Button>
    {/* <Modal visible={showDialog} onCancel={()=>updateDialog(false)}>
      <Form onSubmit={handleSubmit} >
        <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="请输入试题类型"
              />,
            )}
          </Form.Item>
      </Form>
    </Modal> */}


    <Table columns={columns} dataSource={data} size="middle" />

        </div>
        
        
        
        
        </Content></div>
  </div>;
}

const mapStateToProps = state=>{
  console.log('state..', state);
  return {
    loading: state.loading.global
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    getQuestionTypes(){
      dispatch({
        type: 'questions/getQuestionTypes'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SortQuestions));




// const { SubMenu } = Menu;
// let [showDialog,updateDialog]=useState(false)

// class addlist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       valus: ""
//     };
//   }
//   showModal = () => {
//     this.setState({
//       visible: true
//     });
//   };

  
//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false
//     });
//   };
//   addtype(e) {
//     this.setState({
//       values: e.target.value
//     });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };
//   handleOk = e => {
//     this.setState({
//       visible: false
//     });
//     console.log("1");
//     this.props.Question({
//       text:this.state.valus,
//       sort:this.rns()
//     })
//     console.log(this.props)
//   };
//   rns = () => {
//     return Math.floor(Math.random() * 100) + 1+'';
//   };
//   render() {
//     // const { getQuestion } = this.props;
//     // const { flag } = this.state;
//     {
//       console.log(this.rns());
//     }
//     const { getFieldDecorator } = this.props.form;
//     const columns = [
//       {
//         title: "类型ID",
//         dataIndex: "name"
//       },
//       {
//         title: "类型名称",
//         dataIndex: "age"
//       },
//       {
//         title: "操作",
//         dataIndex: "address"
//       }
//     ];
//     const data = [
//       {
//         key: "1",
//         name: "John Brown",
//         age: "简答题",
//         address: ""
//       },
//       {
//         key: "2",
//         name: "Jim Green",
//         age: "代码补全",
//         address: ""
//       },
//       {
//         key: "3",
//         name: "Joe Black",
//         age: "简答题",
//         address: ""
//       }
//     ];
//     return (
      
//           // <div className="style_buttons__z2xtt">
//           //   <Button
//           //     type="button"
//           //     className="ant-btn ant-btn-primary ant-btn-lg"
//           //     onClick={this.showModal}
//           //   >
//           //     <i aria-label="图标: plus" className="anticon anticon-plus">
//           //       <svg
//           //         viewBox="64 64 896 896"
//           //         className=""
//           //         data-icon="plus"
//           //         width="1em"
//           //         height="1em"
//           //         fill="currentColor"
//           //         aria-hidden="true"
//           //       >
//           //         <path d="M848 474H550V152h-76v322H176c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h298v322h76V550h298c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
//           //       </svg>
//           //     </i>
//           //     <span style={{ color: "#fff" }}>添加类型:</span>
//           //   </Button>
//           // </div>
//           // <div>
//           //   <Modal
//           //     visible={this.state.visible}
//           //     onOk={this.handleOk}
//           //     onCancel={this.handleCancel}
//           //   >
//           //     <Form onSubmit={this.handleSubmit} className="login-form">
//                 {/* <Form.Item>
//                   {getFieldDecorator("username", {
//                     rules: [
//                       { required: true, message: "Please input your username!" }
//                     ]
//                   })(
//                     <Input
//                       // value={this.state.valus}
//                       placeholder="请输入试题类型"
//                       onChange={e => {
//                         this.addtype(e);
//                       }}
//                     />
//                   )}
//                 </Form.Item> */}
//                 {/* <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//               </Form>
//             </Modal> */}
//           // </div>
//         // </Content>
      
//     );
//   }
//   // componentDidMount() {
//   //   this.rns()
//   // }
// }

// const mapStateToProps = state => {
//   // console.log("state:", state);
//   return {
//     ...state.Question,
//     loading: state.loading.global
//   };
// };

// const mapDisaptchToProps = dispatch => {
//   return {
//     Question(payload) {
//       // console.log(payload)
//       // dispatch({
//       //   type: "Question/insertQuestionsType",
//       //   payload
//       // });
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDisaptchToProps
// )(Form.create()(addlist));
