import request from "../utils/request";
import { getToken } from "../utils/user";
//code码
let str = getToken("key");
console.log(str);

//登录
export function login(params) {
  return request({
    url: "/user/login",
    method: "POST",
    data: params
  });
}
// 获取用户信息
export function getUserInfo() {
  return request({
    url: "/user/userInfo"
  });
}

// 获取用户权限
export function getViewAuthority(user_id) {
  return request({
    url: "/user/new?user_id=" + user_id
  });
}
export function exam(params) {
  return request({
    data: params,
    url: "/exam/getQuestionsType",
    method: "GET"
  });
}
export function Examadds(params) {
  console.log(params)
  return request({
    url: `/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`,
    method: "GET"
    // data: {
    //   'text': params.text,
    //   'sort': params.sort
    // }
  });
}
// 获取用户信息
export function userInfo() {
  return request({
    url: "/user/userInfo",
    method: "GET"
  });
}

export function getQuestions() {
  return request({
    url: "/exam/questions/new",
    method: "GET"
  });
}

export function getDetailData(params) {
  return request({
    params: {
      questions_id: params
    },
    url: "/exam/questions/condition",
    method: "GET"
  });
}

export function getUserId() {
  return request({
    url: "/user/identity",
    method: "GET"
  });
}

export function getData() {
  return request({
    url: "/user/user",
    method: "GET"
  });
}

export function userAdd(params) {
  return request({
    data: {
      user_name: params.userName,
      user_pwd: params.userPwd,
      identity_id: params.userId
    },
    url: "/user",
    method: "POST"
  });
}

export function editAdd(params) {
  return request({
    params: {
      identity_text: params.identityName
    },
    url: "/user/identity/edit",
    method: "GET"
  });
}

export function apiAdd(params) {
  console.log(params);
  return request({
    params: {
      api_authority_text: params.apiIdentity,
      api_authority_url: params.apiIdentityUr,
      api_authority_method: params.apiIdentityFunc
    },
    url: "/user/authorityApi/edit",
    method: "GET"
  });
}

export function getAddViews() {
  return request({
    url: "/user/view_authority",
    method: "GET"
  });
}

export function setAddViews(params) {
  return request({
    params: {
      view_authority_text: params.addView,
      view_id: params.addView
    },
    url: "/user/authorityView/edit",
    method: "GET"
  });
}

export function getApiData() {
  return request({
    url: "/user/identity_api_authority_relation",
    method: "GET"
  });
}

export function getApiView(params) {
  console.log(params);
  return request({
    params: {
      api_authority_text: params.setPower,
      api_authority_url: params.setID,
      api_authority_method: params.setPower
    },
    url: "/user/authorityApi/edit",
    method: "GET"
  });
}

export function getApiViewStatus(params) {
  console.log(params);
  return request({
    params: {
      identity_id: params.statusId,
      view_authority_id: params.viewId
    },
    url: "/user/setIdentityView",
    method: "GET"
  });
}

export function upDateUserId(params) {
  console.log(params);
  return request({
    params: {
      user_id: params.userId,
      user_name: params.userName,
      user_pwd: params.userPwd,
      identity_id: params.upData
    },
    url: "/user/setIdentityView",
    method: "GET"
  });
}

//试题分类
export function type() {
  return request({
    url: "/exam/getQuestionsType",
    method: "GET"
  });
}

//查看试题
export function view() {
  return request({
    url: "/exam/exam",
    method: "GET"
  });
}

//获取试题类型
export function examType() {
  return request({
    url: "/exam/examType",
    method: "GET"
  });
}

//获取考试类型
export function subject() {
  return request({
    url: "/exam/subject",
    method: "GET"
  });
}

//获取考试类型
export function getQuestionsType() {
  return request({
    url: "/exam/getQuestionsType",
    method: "GET"
  });
}
//获取所有的试题
export function questions() {
  return request({
    url: "/exam/questions/new",
    method: "GET"
  });
}
//展示用户数据
export function showuser() {
  return request({
    url: "/user/user",
    method: "GET"
  });
}
//展示身份和api权限关系
export function authority_relation() {
  return request({
    url: "/user/identity_api_authority_relation",
    method: "GET"
  });
}
//展示身份数据
export function identity() {
  return request({
    url: "/user/identity",
    method: "GET"
  });
}
//展示api接口权限数据

export function api_authority() {
  return request({
    url: "/user/api_authority",
    method: "GET"
  });
}
//展示身份和视图权限关系
export function view_authority() {
  return request({
    url: "/user/identity_view_authority_relation",
    method: "GET"
  });
}
//展示视图权限关系
export function authorityView() {
  return request({
    url: `/user/view_authority`,
    method: "GET"
  });
}
//添加用户
export function adduser(params) {
  return request({
    url: `/user`,
    method: "PSOT",
    data: params
  });
}
//更新用户
export function updataUser(params) {
  return request({
    url: `/user/user`,
    method: "PUT",
    data: params
  });
}
//添加身份
export function edit(params) {
  return request({
    url: `/user/identity/edit${params}`,
    method: "GET"
  });
}
//添加api接口权限
export function authorityApiEdit(params) {
  return request({
    url: `/user/authorityApi/edit${params}`,
    method: "GET"
  });
}
//添加视图权限
export function authorityViewEdit(params) {
  return request({
    url: `/user/authorityView/edit${params}`,
    method: "GET"
  });
}
//给身份设定api接口权限
export function setIdentityApi(params) {
  return request({
    url: `/user/setIdentityApi`,
    method: "POST",
    data: params
  });
}
