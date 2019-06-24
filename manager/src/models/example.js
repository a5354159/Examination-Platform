import { getQuestionsTypesss, Examadds } from "@/services";
export default {
  // 命名空间
  namespace: "example",

  // 模块内部的状态
  state: {
    Datas: ""
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  // 异步操作
  effects: {
    // *fetch({ payload }, { call, put }) {
    //   // eslint-disable-line
    //   yield put({ type: "save" });
    // },
    *getQuestionsTypesss({ payload }, { call, put }) {
      let data = yield call(getQuestionsTypesss);
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            getQuestionsTypesss: data.data
          }
        });
      }
    },
    *insertTypes({ payload }, { call, put }) {
      console.log(payload);
      let Datasuccess = yield call(Examadds, payload);
      console.log("添加成功.....", Datasuccess);
      yield put({
        type: "insertType",
        payload:Datasuccess
      });
    }
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    insertType(state, {playload} ) {
      console.log(state, playload);
      return { ...state, Datas:playload };
    }
  }
};
