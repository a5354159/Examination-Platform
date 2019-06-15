import {getQuestions, getQuestionTypes} from '@/services'

export default {
  // 命名空间
  namespace: 'questions',

  // 模块内部的状态
  state: {
    isLogin: 0
  },

  // 异步操作
  effects: {
    // 获取所有试题
    *getQuestions({payload}, {call, put}){
      let data = yield call(getQuestions);
      console.log('data...', data);
    },
    // 获取所有试题类型
    *getQuestionTypes({}, {call, put}){
      let data = yield call(getQuestionTypes);
      console.log('data...', data);
    }
  },

  // 同步操作
  reducers: {

  }
};
