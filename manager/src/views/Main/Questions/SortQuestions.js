import React, {useState, useEffect} from 'react';
import {connect} from 'dva';
import {Modal, Form, Input, Button} from 'antd';


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
  return <div>
    <Button onClick={()=>updateDialog(true)}>添加类型</Button>
    <Modal visible={showDialog} onCancel={()=>updateDialog(false)}>
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
    </Modal>
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
