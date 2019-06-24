import React from 'react';
import { Menu, Icon } from 'antd';
import {connect} from 'dva';
import { Link } from 'dva/router';
import {injectIntl} from 'react-intl'
const { SubMenu } = Menu;
function MenuComp(props){
  console.log(props.intl);
  return <Menu
    theme="dark"
    mode="inline"
    // defaultSelectedKeys={[0]}
    defaultSelectedKeys={['0']}
    defaultOpenKeys={['router.questions']}
    style={{ height: '100%', borderRight: 0 }}
  >
    {props.myView.map((item, index)=>{
      return <SubMenu key={item.name} title={
        <span>
           <Icon type="user" />
            {props.intl.formatMessage({id: item.name})}
        </span>
      }>{
        item.children.map((value, key)=>{
          console.log(value)
          return <Menu.Item key={value.key}>
            <Link to={value.path}>{props.intl.formatMessage({id: value.name})}</Link>
          </Menu.Item>
        })  
      }
      </SubMenu>
    })}
  </Menu>
}
const mapStateToProps = state=>{
  return {
    myView: state.users.myView
  }
}
// export default connect(mapStateToProps)(injectIntl(MenuComp));
export default injectIntl(connect(mapStateToProps)(MenuComp));
