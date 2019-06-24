import {ExamTypes,getSubject} from "@/services";

export default {
    // 命名空间
    namespace: 'testQuestions',
  
    // 模块内部的状态
    state: {
        allqus:[]
    },
  
    subscriptions: {
      // setup({ dispatch, history }) {  // eslint-disable-line
      // },
    },
  
    // 异步操作
    effects: {
        //获取所有的考试类型
      *allQuestionsType({payload},{call,put}){
          let data = yield call(ExamTypes);
          console.log(data)
          yield put({
              type:'allQuestions',
              payload:data.data
          })
      }
    },
  
    // 同步操作
    reducers: {
        allQuestions(state, {payload}) {
        return { ...state, allqus:payload };
      },
    },
  
  };
  