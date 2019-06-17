import {getexamlist} from "@/services";
export default {
  // 命名空间
  namespace: 'example',

  // 模块内部的状态
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getexamlist({ payload }, { call, put }){
      console.log('aaa')
      let data = yield call(getexamlist);

      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            getexamlist: data.data
          }
        });
      }
    }
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
