import {
  login,
  userInfo,
  getUserId,
  getData,
  userAdd,
  editAdd,
  apiAdd,
  getAddViews,
  setAddViews,
  getApiData,
  getApiView,
  getApiViewStatus,
  upDateUserId,
  getQuestions
} from "@/services/index";
import { setToken, getToken } from "@/utils/user";
import { routerRedux } from "dva/router";
import { message } from "antd";

import {
  type,
  view,
  showuser,
  authority_relation,
  identity,
  api_authority,
  view_authority,
  authorityView
} from "@/services";

export default {
  // 命名空间
  namespace: "user",
  // 模块内部的状态
  state: {
    isLogin: 0,
    userInfoData: {},
    getUserIDs: [],
    getUserDatas: [],
    addUserCode: 0,
    viewData: [],
    getApiViewData: [],
    exo: [],
    view: "",
    Suser: [],
    Suser2: [],
    Suser3: [],
    Suser4: [],
    Suser5: [],
    Suser6: []
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
    *question({ payload }, { call, put }){
      let data = yield call(getQuestions);
      console.log(data)
    },
    *userInfo({ payload }, { call, put }) {
      let data = yield call(userInfo);
      console.log(data);
      yield put({
        type: "getUserInfo",
        action: data.data
      });
    },
    *userID({ payload }, { call, put }) {
      let data = yield call(getUserId);
      yield put({
        type: "getUserID",
        action: data.data
      });
    },
    *userData({ payload }, { call, put }) {
      let data = yield call(getData);
      console.log(data.data);
      yield put({
        type: "getUserData",
        action: data.data
      });
    },
    *addUsers({ payload }, { call, put }) {
      let data = yield call(userAdd, payload);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *editData({ payload }, { call, put }) {
      let data = yield call(editAdd, payload);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *ApiData({ payload }, { call, put }) {
      let data = yield call(apiAdd, payload);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *getView({ payload }, { call, put }) {
      let data = yield call(getAddViews);
      yield put({
        type: "getViews",
        action: data.data
      });
    },
    *addViews({ payload }, { call, put }) {
      let data = yield call(setAddViews, payload);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *getApiViews({ payload }, { call, put }) {
      let data = yield call(getApiData);
      console.log(data);
      yield put({
        type: "getApiViewS",
        action: data.data
      });
    },
    *getApiViewData({ payload }, { call, put }) {
      let data = yield call(getApiView, payload);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *getApiStatus({ payload }, { call, put }) {
      let data = yield call(getApiViewStatus, payload);
      console.log(data);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    *upDataUser({ payload }, { call, put }) {
      let data = yield call(upDateUserId, payload);
      console.log(data);
      data.code === 1 ? message.success(data.msg) : message.error(data.msg);
    },
    //     type: "updateLogin",
    //     payload: data.code === 1 ? 1 : -1
    //   });
    // },
    *type({ payload }, { call, put }) {
      let exo = yield call(type);
      console.log(type);
      yield put({
        type: "exo",
        payload: exo.data
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
      let datas6 = yield call(authorityView, payload);
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
    *addusers({ payload }, { call, put }) {}
  },

  // 同步操作
  reducers: {
    updateLogin(state, { payload }) {
      return { ...state, isLogin: payload };
    },

    save(state, { action }) {
      return {
        ...state,
        isLogin: action
      };
    },
    getUserInfo(state, { action }) {
      return {
        ...state,
        userInfoData: action
      };
    },
    getUserID(state, { action }) {
      return {
        ...state,
        getUserIDs: action
      };
    },
    getUserData(state, { action }) {
      return {
        ...state,
        getUserDatas: action
      };
    },
    getViews(state, { action }) {
      return {
        ...state,
        viewData: action
      };
    },
    getApiViewS(state, { action }) {
      return {
        ...state,
        getApiViewData: action
      };
    },
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
    authority_relations(state, { payload }) {
      return { ...state, Suser2: payload };
    },
    identity(state, { payload }) {
      return { ...state, Suser3: payload };
    },
    api_authority(state, { payload }) {
      return { ...state, Suser4: payload };
    },
    view_authority(state, { payload }) {
      return { ...state, Suser5: payload };
    },
    authorityView(state, { payload }) {
      return { ...state, Suser6: payload };
    }
  }
};
