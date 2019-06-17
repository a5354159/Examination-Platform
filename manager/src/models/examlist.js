import {getexamlist} from "@/services";
export default {
  // 命名空间
  namespace: 'examlist',

  // 模块内部的状态
  state: {
    sexam:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    // *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ type: 'save' });
    // },
    *getexamlists({ payload }, { call, put }){
      console.log('aaa')
      let data = yield call(getexamlist);
      console.log(data)
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: data.exam
        });
      }
    }
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, sexam:action.payload };
    },
  },

};
