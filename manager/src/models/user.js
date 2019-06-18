import {
  login,
  type,
  view,
  showuser,
  authority_relation,
  identity,
  api_authority,
  view_authority,
  authorityView
} from "@/services";
import { setToken, getToken } from "@/utils/user";
import { routerRedux } from "dva/router";
export default {
  // 命名空间
  namespace: "user",
  // 模块内部的状态
  state: {
    isLogin: 0,
    exo: [],
    view: "",
    Suser: [],
    Suser2: [],
    Suser3: [],
    Suser4: [],
    Suser5: [],
    Suser6:[]
  },
  //订阅路由跳转
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      return history.listen(({ pathname }) => {
        console.log("pathname...", pathname);
        if (pathname.indexOf("/login") === -1) {
          //不去登录页面做token检测
          if (!getToken()) {
            //利用redux做路由跳转
            dispatch(
              routerRedux.replace({
                pathname: `/login`,
                search: `?redirect=${encodeURIComponent(pathname)}`
              })
            );
          }
        } else {
          //去登录页如果已登录调回首页
          if (getToken()) {
            dispatch(
              routerRedux.replace({
                pathname: `/`
              })
            );
          }
        }
      });
    }
  },

  // 异步操作
  effects: {
    *login({ payload }, { call, put }) {
      console.log("payload...", payload, login);
      let data = yield call(login, payload);
      console.log("data...", data);
      //设置登录态到cookie里面
      if (data.code === 1) {
        setToken(data.token);
      }
      yield put({
        type: "updateLogin",
        payload: data.code === 1 ? 1 : -1
      });
    },
    *type({ payload }, { call, put }) {
      let exo = yield call(type);
      yield put({
        type: "exo",
        payload: exo
      });
      console.log("exo...", exo);
    },
    *view({ payload }, { call, put }) {
      let vie = yield call(view);
      yield put({
        type: "view",
        payload: vie
      });
      console.log("view...", vie);
    },
    *Showuser({ payload }, { call, put }) {
      //展示用户数据
      let datas = yield call(showuser);
      //展示身份和api权限关系
      let datas2 = yield call(authority_relation);
      // 展示身份数据
      let datas3 = yield call(identity);
      //展示api接口权限数据
      let datas4 = yield call(api_authority);
      //展示身份和视图权限关系
      let datas5 = yield call(view_authority);
      //展示视图权限关系
      let datas6 = yield call(authorityView,payload)
      console.log("展示用户数据.......", datas);
      console.log("展示身份和api权限关系.......", datas2);
      console.log("展示身份数据.......", datas3);
      console.log("展示api接口权限数据.......", datas4);
      console.log("展示身份和视图权限关系.......", datas5);
      console.log("展示视图权限关系", datas6);
      yield put({
        type: "showuserA",
        payload: datas.data
      });
      yield put({
        type: "authority_relations",
        payload: datas2.data
      });
      yield put({
        type: "identity",
        payload: datas3.data
      });
      yield put({
        type: "api_authority",
        payload: datas4.data
      });
      yield put({
        type: "view_authority",
        payload: datas5.data
      });
      yield put({
        type: "authorityView",
        payload: datas6.data
      });
      // console.log('showuser...',showuser)
    },
    *addusers({ payload }, { call, put }){

    }
  },

  // 同步操作
  reducers: {
    updateLogin(state, { payload }) {
      return { ...state, isLogin: payload };
    },
    exo(state, { payload }) {
      return { ...state, exo: payload };
    },
    view(state, { payload }) {
      return { ...state, view: payload };
    },
    showuserA(state, { payload }) {
      return { ...state, Suser: payload };
    },
    authority_relations(state,{payload}){
      return { ...state, Suser2: payload };
    },
    identity(state,{payload}){
      return { ...state, Suser3: payload };
    },
    api_authority(state,{payload}){
      return { ...state, Suser4: payload };
    },
    view_authority(state,{payload}){
      return { ...state, Suser5: payload };
    },
    authorityView(state,{payload}){
      return { ...state, Suser6: payload };
    }
  }
};
