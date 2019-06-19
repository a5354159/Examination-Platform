import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { SubMenu } = Menu;

function MenuComp(props){

  return <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['questions']}
    style={{ height: '100%', borderRight: 0 }}
  >
    <SubMenu
      key="questions"
      title={
        <span>
          <Icon type="questions" />
          试题管理
        </span>
      }
    >
      <Menu.Item key="1">
        <Link to="/questions/add">添加试题</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/questions/type">试题分类</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/questions/view">查看试题</Link>
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
      <Menu.Item key="5">
        <Link to="/questions/addUser">添加用户</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/questions/showUser">用户展示</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="class"
      title={
        <span>
          <Icon type="class" />
          班级管理
        </span>
      }
    >
      <Menu.Item key="8">
        <Link to="/questions/addUser">班级管理</Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link to="/questions/showUser">教室管理</Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link to="/questions/showUser">学生管理</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
}

export default MenuComp;
