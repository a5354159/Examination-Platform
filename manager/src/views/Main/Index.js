import React from "react";
import { Layout, Spin } from "antd";
import { Route, Switch, Redirect } from "dva/router";
import Menu from "@/components/Menu";
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

const { Header, Content, Sider } = Layout;

function IndexPage(props) {
  return (
    <Layout className={styles.container}>
      <Header>
        <p>顶部信息</p>
      </Header>
      <Layout>
        <Sider>
          <Menu />
        </Sider>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/questions/add" />
            <Route path="/questions/add" component={AddQuestions} />
            <Route path="/questions/type" component={SortQuestions} />
            <Route path="/questions/view" component={ViewQuestions} />
            <Route path="/questions/detail" component={Detail} />{" "}
            <Route path="/edit/questions" component={Edit} />

{/* 用户管理 */}
            <Route path="/user/adduser" component={Adduser} />

            {/* 考试管理 */}
            <Route path="/exam/addExam" component={AddExam} />
            <Route path="/exam/examList" component={ExamList} />
          </Switch>
          {props.loading ? (
            <div className={styles.loading}>
              <Spin />
            </div>
          ) : null}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  // console.log('state..', state);
  return {
    loading: state.loading.global
  };
};
export default connect(mapStateToProps)(IndexPage);
