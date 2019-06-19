import React, { useEffect, useState } from "react";
import { Layout, Spin, Dropdown } from "antd";
import { Route, Switch, Redirect, Menu } from "dva/router";
import Menus from "@/components/Menu";
import styles from "./Index.scss";
import { connect } from "dva";

// 引入路由
import SortQuestions from "@/views/Main/Questions/SortQuestions";
import ViewQuestions from "@/views/Main/Questions/ViewQuestions";
import AddQuestions from "@/views/Main/Questions/AddQuestions";
import Detail from "./Questions/detal/index";
import Edit from "./Questions/Edit";

//用户管理
import Adduser from "./user/Adduser/index";

//考试列表
import AddExam from "./Exam/AddExam/index";
import ExamList from "./Exam/ExamList/index";
import Alise from "./Exam/AddExam/Alise/index";
// const { SubMenu } = Menu;
import InsertQustions from "@/views/Main/Questions/InsertQustions";
import AddUser from "@/views/Main/User_Management/AddUser";
import ShowUser from "@/views/Main/User_Management/ShowUser";
import ClassManage from '@/views/Main/Class_Manage'
import ClassroomManage from '@/views/Main/Class_Manage/ClassroomManage.js'
import StudentsManage from '@/views/Main/Class_Manage/StudentsManage.js'
const { Header, Content, Sider } = Layout;
var visible = false;
const menu = e => (
  <Menu>
    <Menu.Item key="1">个人中心</Menu.Item>
    <Menu.Item key="2">我的班级</Menu.Item>
    <Menu.Item key="3">设置</Menu.Item>
    <Menu.Item key="4">退出</Menu.Item>
  </Menu>
);
let handleMenuClick = e => {
  // if (e.key === '4') {
  // this.setState({
  visible = false;
  //  });
  console.log("asdf");
  // }
};
function IndexPage(props) {
  console.log(props);
  return (
    <Layout className="container">
      <Header>
        <div className="header_box">
          <div>
            <span>
              {/* <button
                onClick={() =>
                  props.changeLocal(props.locale === "zh" ? "en" : "zh")
                }
              >
                {props.locale === "zh" ? "中文" : "英文"}
              </button> */}
            </span>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
              alt=""
            />
          </div>

          <div>
            <span>
              <img
                src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png"
                alt=""
              />
              <b>chenmanjie</b>
            </span>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menus />
        </Sider>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/questions/add" />
            <Route path="/questions/add" component={InsertQustions} />
            <Route path="/questions/type" component={SortQuestions} />
            {/* <Route path="/questions/add" component={AddQuestions} />
            <Route path="/questions/type" component={SortQuestions} /> */}
            <Route path="/questions/view" component={ViewQuestions} />
            <Route path="/questions/detail" component={Detail} />
            <Route path="/edit/questions" component={Edit} />
            {/* 用户管理 */}
            <Route path="/user/adduser" component={Adduser} />
            <Route path="/user/showUser" component={ShowUser} />
            <Route path="/exam/examList/detal" component={Alise} />
            {/* 考试管理 */}
            <Route path="/exam/addExam" component={AddExam} />
            <Route path="/exam/examList" component={ExamList} />
            {/* 班级管理 */}
            <Route path="/questions/ClassManage" component={ClassManage} />
            <Route path="/questions/ClassroomManage" component={ClassroomManage} />
            <Route path="/questions/StudentsManage" component={StudentsManage} />
          </Switch>
          {props.loading ? (
            <div className="loading">
              <Spin />
            </div>
          ) : null}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  console.log("state..", state);
  return {
    loading: state.loading.global,
    locale: state.global.locale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocal: payload => {
      dispatch({
        type: "global/changeLocale",
        payload
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
