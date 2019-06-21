import React, { useEffect, useState } from "react";
import { connect } from "dva";
import {  Table, Tabs } from "antd";
// import Updata from "../../../components/User/Updata";
// function onChange(e) {
//   console.log(`radio checked:${e.target.value}`);
// }
function ShowUser(props) {
  let {showUsers} = props
  function callback(key) {
    updataKey(key);
  }
  useEffect(()=>{
    showUsers()
  },[])
  console.log(props)
  const [key, updataKey] = useState("tab1");
  const { TabPane } = Tabs;

  const tabList = [
    {
      key: "tab1",
      tab: "用户数据"
    },
    {
      key: "tab2",
      tab: "身份数据"
    },
    {
      key: "tab3",
      tab: "api接口权限"
    },
    {
      key: "tab4",
      tab: "身份和api接口关系"
    },
    {
      key: "tab5",
      tab: "视图接口权限"
    },
    {
      key: "tab6",
      tab: "身份和视图权限关系"
    }
  ];
  const contentList = {
    tab1: (
      <div>
        <h2>用户数据</h2>
        <Table
          columns={[
            {
              title: "用户名",
              key:"name",
              render: text => <>{text.user_name}</>
            },
            {
              title: "密码",
              key:"pwd",
              render: text => <>{text.user_pwd}</>
            },
            {
              title: "身份",
              key:"text",
              render: text => <>{text.identity_text}</>
            }
          ]}
          dataSource = {props.Suser}
          rowKey={record => `${record.user_id}`}
        />
      </div>
    ),
    tab2: (
      <div>
        <h2>身份数据</h2>
        <Table
          columns={[
            {
              title: "身份名称",
              key:"identTexts",
              render: text => <>{text.identity_text}</>
            }
          ]}
          dataSource = {props.Suser3}
          rowKey={record => `${record.identity_id}`}
        />
      </div>
    ),
    tab3: (
      <div>
        <h2>api接口权限</h2>
        <Table
          columns={[
            {
              title: "api权限名称",
              key:"apiText",
              render: text => <>{text.api_authority_text}</>
            },
            {
              title: "api权限url",
              key:"apiUrl",
              render: text => <>{text.api_authority_url}</>
            },{
              title: "api权限方法",
              key:"apiMrthod",
              render: text => <>{text.api_authority_method}</>
            }
          ]}
          dataSource = {props.Suser4}
          rowKey={record => `${record.api_authority_id}`}
        />
      </div>
    ),
    tab4:(
      <div>
        <h2>身份和api接口关系</h2>
        <Table
          columns={[
            {
              title: "身份名称",
              key:"textIdent",
              render: text => <>{text.identity_text}</>
            },{
              title: "api权限名称",
              key:"textAuth",
              render: text => <>{text.api_authority_text}</>
            },{
              title: "api权限url",
              key:"textUrl",
              render: text => <>{text.api_authority_url}</>
            },{
              title: "api权限方法",
              key:"textMethod",
              render: text => <>{text.api_authority_method}</>
            }
          ]}
          dataSource = {props.Suser2}
          rowKey={record => `${record.identity_api_authority_relation_id}`}
        />
      </div>
    ),
    tab5:(
      <div>
        <h2>视图接口权限</h2>
        <Table
          columns={[
            {
              title: "视图权限名称",
              key:"viewText",
              render: text => <>{text.view_authority_text}</>
            },
            {
              title: "视图id",
              key:"viewId",
              render: text => <>{text.view_id}</>
            }
          ]}
          dataSource = {props.Suser6}
          rowKey={record => `${record.view_authority_id}`}
        />
      </div>
    ),
    tab6: (
      <div>
        <h2>身份和视图权限关系</h2>
        <Table
          columns={[
            {
              title: "身份",
              key:"identText",
              render: text => <>{text.identity_text}</>
            },
            {
              title: "视图名称",
              key:"viewAuther",
              render: text => <>{text.view_authority_text}</>
            },
            {
              title: "视图id",
              key:"textView",
              render: text => <>{text.view_id}</>
            }
          ]}
          dataSource = {props.Suser5}
          rowKey={record => `${record.identity_view_authority_relation_id}`}
        />
      </div>
    )
  };
  return (
    <div className="content">
      <h2>用户展示</h2>
      <div className="content_box">
        <div className="content_box_header">
          <Tabs defaultActiveKey="tab1" onChange={callback} className="tab_box">
            {tabList.map(item => (
              <TabPane tab={item.tab} key={item.key}>
              {contentList[key]}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
let mapStateToProps = state => {
  console.log(state);
  return { ...state.user };
};
let mapDispatchToProps = dispatch => {
  return {
    showUsers() {
      dispatch({
        type: "user/Showuser"
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUser);
