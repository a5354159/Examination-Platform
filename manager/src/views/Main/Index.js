import React from "react";
import { Layout, Spin } from "antd";
import { Route, Switch, Redirect } from "dva/router";
import Menu from "@/components/Menu";
// import Manag from "@/components/Manag";
import styles from "./Index.scss";
import { connect } from "dva";

// 引入路由
import SortQuestions from "@/views/Main/Questions/SortQuestions";
import ViewQuestions from "@/views/Main/Questions/ViewQuestions";
import InsertQustions from "@/views/Main/Questions/InsertQustions";
import AddUser from "@/views/Main/User_Management/AddUser";
import ShowUser from "@/views/Main/User_Management/ShowUser";
const { Header, Content, Sider } = Layout;

function IndexPage(props) {
  console.log(props);
  return (
    <Layout className="container">
      <Header>
        <div className="header_box">
          <div>
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
          <Menu />
        </Sider>
        <Content>
          <Switch>
            <Redirect exact from="/" to="/questions/add" />
            <Route path="/questions/add" component={InsertQustions} />
            <Route path="/questions/type" component={SortQuestions} />
            <Route path="/questions/view" component={ViewQuestions} />
            <Route path="/questions/addUser" component={AddUser} />
            <Route path="/questions/showUser" component={ShowUser} />
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
    loading: state.loading.global
  };
};
export default connect(mapStateToProps)(IndexPage);
