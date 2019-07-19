import request from '@/utils/request';

// 添加面试
export let addSign = params=>{
  return request.post('/sign', params);
}

// 获取面试列表
export let getSignList = params=>{
  return request.get('/sign', params);
}

// 获取面试详情
export let getSignDetail = id=>{
  return request.get('/sign/'+id);
}

// 更新面试状态
export let updateSignDetail = (id, params)=>{
  return request.put('/sign/'+id, params);
}

// 解密数据
export let decrypt = params=>{
  return request.post('/user/decrypt', params)
}

// 登陆接口
export let login = code=>{
  return request.post('/user/code2session', {
    code
  })
}

export let register = parmas=>{
  return request.post('/user/updatePhone',parmas)
}

// export let submitInterview = parmas=>{
//   return request.post('/user/updatePhone',parmas)
// }