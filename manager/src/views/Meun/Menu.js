import React from 'react';
import styles from './Meun.css';
import { Menu, Dropdown, Layout  } from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import { connect } from 'dva'
import MenuView from '@/components/Menu.js'
import QuestionsAdd from './questionsManagement/questionsAdd/questionsAdd'
import QuestionsType from './questionsManagement/QuestionsType/QuestionsType'
import QuestionsSee from './questionsManagement/QuestionsSee/QuestionsSee'
import QuestionDetail from './questionsManagement/questionDetail/questionDetail';
import QuestionsEdit from './questionsManagement/questionsEdit/questionsEdit';
import UserSee from './userManagement/userSee';
import userAdd from './userManagement/userAdd';
import ExamAdd from './examManagement/examAdd';
import ExamList from './examManagement/examList';
import ClassManagement from './classManagement/classManagement/classManagement'
import ClassRoom from './classManagement/classRoom/classromm'
import ClassStudent from './classManagement/classStudent/classStudent'
import Classlist from './paper/classlist/classlist'

function ExaminationMenu(props){
    let menu = (
        <Menu>
            <Menu.Item key="1">个人中心</Menu.Item>
            <Menu.Item key="2">我的班级</Menu.Item>
            <Menu.Item key="3">设置</Menu.Item>
            <Menu.Item key="4">退出登录</Menu.Item>
        </Menu>
    );
    const { Header, Content } = Layout;
    return (
        <Layout className={styles.wrap} style={{flexDirection:"column"}}>
            <Header className={styles.header} >
                <div className={styles.headerTop}>
                    <img className={styles.headerImg} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
                    <div className={styles.headerBottom}>
                        {
                            <Dropdown overlay={menu}>
                                <a className={["ant-dropdown-link",styles.headerBottomList]}>
                                  <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
                                  <span>chenmanjie</span>
                                </a>
                            </Dropdown>
                        }
                        <p onClick={()=>{props.changeLocal(props.locale==='zh'?'en':'zh')}} className={styles.english}>{props.locale==='zh'?'英文':'中文'}</p>
                    </div>
                </div>
                
            </Header>
            <div className={styles.section}>
                <MenuView />
                <Content style={{ overflow: 'auto' }} className={styles.main}>
                    <Switch>
                        {/* 试题管理 */}
                        <Redirect from="/" to="/questions/add" exact></Redirect>
                        <Route path="/questions/add" component={QuestionsAdd}></Route>
                        <Route path="/questions/type" component={QuestionsType}></Route>
                        <Route path="/questions/See" component={QuestionsSee}></Route>                      
                        <Route path="/questions/edit/:id" component={QuestionsEdit}></Route>                      
                        <Route path="/questions/detail/:id" component={QuestionDetail}></Route> 
                        {/* 用户管理 */}
                        <Route path="/user/see" component={UserSee}></Route>                                              
                        <Route path="/user/add" component={userAdd}></Route>            
                        {/* 考试管理 */}
                        <Route path="/exam/add" component={ExamAdd}></Route>                                              
                        <Route path="/exam/list" component={ExamList}></Route>
                        {/* 班级管理 */}
                        <Route path="/class/management" component={ClassManagement}></Route>                                              
                        <Route path="/class/classroom" component={ClassRoom}></Route>
                        <Route path="/class/student" component={ClassStudent}></Route>
                        {/* 阅卷管理 */}
                        <Route path="/class/special" component={Classlist}></Route>

                    </Switch>
                </Content>
            </div>
        </Layout>
    )
}
const mapStateToProps=state=>{
    return {
        locale:state.global.locale
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        changeLocal(payload){
            dispatch({type:'global/changeLocale',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExaminationMenu)