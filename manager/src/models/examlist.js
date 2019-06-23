import {getexamlist,ExamType,getaExamType,getAllSubject} from "@/services";
export default {
  // 命名空间
  namespace: 'examlist',

  // 模块内部的状态
  state: {
    sexam:[],
    examtypes:[]
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
      //试卷列表
      // console.log('aaa')
      let data = yield call(getexamlist);
      console.log('aaaa',data)
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: data.exam
        });
      }
    },
    // *ExamTypes({ payload }, { call, put }){
    //   let data = yield call(ExamType);
    //   // console.log(data)
    //   if (data.code === 1) {
    //     yield put({
    //       type: "save",
    //       payload: data.exam
    //     });
    //   }
    // },
    *ExamType({ payload }, { call, put }){
      let data = yield call(getaExamType);
      console.log(data)
      if (data.code === 1) {
        yield put({
          type: "examtypes",
          payload: data.data
        });
      }

    },

    //all考试类型
    *AllSubject({ payload }, { call, put }) {
      let data = yield call(getAllSubject);
      // console.log("subject:", data);
      if (data.code === 1) {
        yield put({
          type: "getAllSubject",
          payload:  data.data
        });
      }
    }
  },

  // 同步操作
  reducers: {
    save(state, action) {
      return { ...state, sexam:action.payload };
    },
    examtypes(state, action){
      return { ...state, examtypes:action.payload };
    },
    getAllSubject(state, action){
      return { ...state, getAllSubject:action.payload };
    }
  }

};
