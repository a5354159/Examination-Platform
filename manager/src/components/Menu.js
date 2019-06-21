import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";

//国际化
import { injectIntl } from "react-intl";

const { SubMenu } = Menu;

function MenuComp(props) {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["questions"]}
      style={{ height: "100%", borderRight: 0 ,overflowY:'auto'}}
    >
      <SubMenu
        key="questions"
        title={
          <span>
            <Icon type="user" />
            {props.intl.formatMessage({ id: "router.questions" })}
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/questions/add">
            {props.intl.formatMessage({ id: "router.questions.add" })}
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/questions/type">
            {props.intl.formatMessage({ id: "router.questions.type" })}
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/questions/view">
            {props.intl.formatMessage({ id: "router.questions.view" })}
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="user"
        title={
          <span>
            <Icon type="user" />
            用户管理
          </span>
        }
      >
        <Menu.Item key="4">
          <Link to="/user/adduser">添加用户</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/user/showuser">用户展示</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="exam"
        title={
          <span>
            <Icon type="user" />
            考试管理
          </span>
        }
      >
        <Menu.Item key="6">
          <Link to="/exam/addExam">添加考试</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/exam/examList">试卷列表</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="class"
        title={
          <span>
            <Icon type="solution" />
            班级管理
          </span>
        }
      >
        <Menu.Item key="8">
          <Link to="/questions/ClassManage">班级管理</Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link to="/questions/ClassroomManage">教室管理</Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/questions/StudentsManage">学生管理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );

  // function MenuComp(props) {
  //   return (
  //     <Menu
  //       theme="dark"
  //       mode="inline"
  //       defaultSelectedKeys={["1"]}
  //       defaultOpenKeys={["questions"]}
  //       style={{ height: "100%", borderRight: 0 }}
  //     >
  //       <SubMenu
  //         key="questions"
  //         title={
  //           <span>
  //             <Icon type="menu" />
  //             {props.intl.formatMessage({ id: "router.questions" })}
  //           </span>
  //         }
  //       >
  //         <Menu.Item key="1">
  //           <Link to="/questions/add">
  //             {props.intl.formatMessage({ id: "router.questions.add" })}
  //           </Link>
  //         </Menu.Item>
  //         <Menu.Item key="2">
  //           <Link to="/questions/type">
  //             {props.intl.formatMessage({ id: "router.questions.type" })}
  //           </Link>
  //         </Menu.Item>
  //         <Menu.Item key="3">
  //           <Link to="/questions/view">
  //             {props.intl.formatMessage({ id: "router.questions.view" })}
  //           </Link>
  //         </Menu.Item>
  //       </SubMenu>
  //       <SubMenu
  //         key="user"
  //         title={
  //           <span>
  //             <Icon type="user" />
  //             用户管理
  //           </span>
  //         }
  //       >
  //         <Menu.Item key="5">
  //           <Link to="/questions/addUser">添加用户</Link>
  //         </Menu.Item>
  //         <Menu.Item key="6">
  //           <Link to="/questions/showUser">用户展示</Link>
  //         </Menu.Item>
  //       </SubMenu>

  //     </Menu>
  //   );
}

export default injectIntl(MenuComp);
