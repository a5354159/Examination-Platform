import React from 'react';
import {Layout, Spin} from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import Menu from '@/components/Menu'
import styles from './Index.scss'
import {connect} from 'dva';

// 引入路由
import SortQuestions from '@/views/Main/Questions/SortQuestions';
import ViewQuestions from '@/views/Main/Questions/ViewQuestions';

const { Header, Content, Sider } = Layout;

function IndexPage(props){
  return <Layout className={styles.container}>
    <Header>
      <p>顶部信息</p>
    </Header>
    <Layout>
      <Sider>
        <Menu/>
      </Sider>
      <Content>
        <Switch>
          <Redirect exact from="/" to="/questions/add"/>
          <Route path="/questions/add" component={null}></Route>
          <Route path="/questions/type" component={SortQuestions}></Route>
          <Route path="/questions/view" component={ViewQuestions}></Route>
        </Switch>
        {props.loading?<div className={styles.loading}>
          <Spin/>
        </div>:null}
      </Content>
    </Layout>
  </Layout>
}

const mapStateToProps = state=>{
  console.log('state..', state);
  return {
    loading: state.loading.global
  }
}
export default connect(mapStateToProps)(IndexPage);
