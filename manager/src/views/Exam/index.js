/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "./index.scss";
import Example from "@/components/Example";
import { Layout, Dropdown, Menu, Modal } from "antd";
import { connect } from "dva";
import { Route, Switch, Redirect } from "dva/router";

import Detailexam from "./Questions/detailExam";
import Marklist from "./Markmanagement/markList";
import Detailclass from "./Markmanagement/detailClass";
import Addevent from "./Exammanagement/addEvent";
import Viewdetail from "./Exammanagement/viewDetail";

import { removeToken } from "@/utils/user";
const { Header, Sider, Content } = Layout;
const confirm = Modal.confirm;

function SiderDemo(props) {
  const [count, setCount] = useState({});
  const [arr, setArr] = useState([]);
  useEffect(() => {
    // let obj = window.localStorage.userInfo
    // setCount(JSON.parse(obj))
    // console.log(count)
    let arr = [];
    props.myView.forEach(el => {
      console.log(el);
      el.children.forEach(item => {
        console.log(item.path);
        arr.push(item.path);
      });
    });
    arr.push("/questions");
    setArr(arr);
  }, [props]);

  if (!props.myView.length) {
    return null;
  }

  let onClick = ({ key }) => {
    if (key * 1 === 4) {
      let {
        history: { push }
      } = props;
      confirm({
        title: "你确定要退出当前的账号吗?",
        content: "Are you sure you want to log out of your current account?",
        okText: "Yes/我确定ε(┬┬＿┬┬)3",
        okType: "danger",
        cancelText: "No/考虑一下( ͡° ͜ʖ ͡°)✧",
        onOk() {
          removeToken();
          push("/login");
          window.localStorage.clear();
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }
  };

  let onclick = ({ key }) => {
    if (key * 1 === 1 * 1) {
      console.log(6666);
      props.changeLocal("zh");
    } else {
      props.changeLocal("en");
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">我的班级</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">设置</Menu.Item>
      <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
  );
  const zhes = (
    <Menu onClick={onclick}>
      <Menu.Item key="1">中文</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">英文</Menu.Item>
    </Menu>
  );

  function upload() { 
    let file = document.querySelector('input[type=file]').files[0] // 获取选择的文件，这里是图片类型 
    console.log('aaaaaaaaa')
    let reader = new FileReader() 
      reader.readAsDataURL(file) //读取文件并将文件以URL的形式保存在resulr属性中 base64格式 
      reader.onload = function(e) { // 文件读取完成时触发  
        let result = e.target.result // base64格式图片地址  
        var image = new Image() 
        image.src = result // 设置image的地址为base64的地址  
        image.onload = function(){  
          var canvas = document.querySelector("#canvas");  
          var context = canvas.getContext("2d");  
          canvas.width = image.width; // 设置canvas的画布宽度为图片宽度  
          canvas.height = image.height;  
          context.drawImage(image, 0, 0, image.width, image.height) // 在canvas上绘制图片  
          let dataUrl = canvas.toDataURL('image/jpeg', 0.92) // 0.92为压缩比，可根据需要设置，设置过小会影响图片质量  
          // dataUrl 为压缩后的图片资源，可将其上传到服务器  
        }  
      } 
   }

  return (
    <div>
      <Layout>
        <Header>
          <div>
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
              style={{ width: "150px", height: "auto" }}
              alt=""
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown overlay={zhes}>
              <span
                style={{
                  height: "100%",
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                国际化
              </span>
            </Dropdown>
            <Dropdown overlay={menu}>
              <span
                style={{
                  height: "100%",
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* <div>
                  <canvas
                    id="canvas"
                    style="width: 100px;height:100px;border: 1px solid #ccc"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    // type="file"
                    name="imageFile"
                    onchange={this.props.upload()}
                  />
                </div> */}
                <img
                  src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png"
                  style={{
                    width: "40px",
                    height: "40px",
                    verticalAlign: "middel",
                    borderRadius: "50%",
                    margin: "0 10px"
                  }}
                  alt=""
                />
                chenmanjie
              </span>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider>
            <Example />
          </Sider>
          <Content>
            <Switch>
              <Route path="/questions/detail" component={Detailexam} />
              <Route path="/questions/detailclass" component={Detailclass} />
              <Route path="/questions/addevent" component={Addevent} />
              <Route path="/questions/marklist" component={Marklist} />
              <Route path="/questions/viewDetail" component={Viewdetail} />
              {/* 渲染该用户拥有的路由 */}

              {props.myView.map(item => {
                if (item.children) {
                  return item.children.map((value, key) => {
                    return (
                      <Route
                        key={key}
                        path={value.path}
                        component={value.component}
                      />
                    );
                  });
                }
              })}
              {/* 403路由 */}
              {props.forbiddenView.map(item => {
                return <Redirect key={item} from={item} to="/403" />;
              })}
              {/* 剩余路由去404 */}
              {/* <Redirect to="/404"/> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    locale: state.global.locale,
    myView: state.user.myView,
    forbiddenView: state.user.forbiddenView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocal: payload => {
      dispatch({
        type: "global/changeLocale",
        payload
      });
    },
    userInfos: payload => {
      dispatch({
        type: "user/getUserInfo",
        payload
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderDemo);
