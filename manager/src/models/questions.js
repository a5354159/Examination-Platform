import { ExamTypes, getSubject, getQuestionsType ,addQuestions,getAllquestion,getClassQuery,updateQuestion,
  addQuestionsType} from "@/services";
export default {
  //命名空间
  namespace: "question",
  //模块内部状态
  state: {
    examType: [],//考试类型
    subjectType: [],//课程类型
    questions_type: [],//试题类型
    allQuestion:[],//所有试题
    EditQuestion:[],
    editCode:-1,
    code:-1,
    typeCode:-1
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },
  //异步操作
  /**
 * 
	获取所有的考试类型 exam/examType GET
	获取所有的课程类型 /exam/subject GET
  获取所有的试题类型 /exam/getQuestionsType
//获取所有试题   
 */
  effects: {

    // *getQuestions({payload}, {call, put}){
      //       let data = yield call(getQuestions);
      //       console.log('data...', data);
      //       if (data.code === 1) {
      //         yield put({
      //           type: "save",
      //           payload: {
      //             getQuestions: data.data
      //           }
      //         });
      //       }
      //     },
      //     // 获取所有试题类型
      //     *getQuestionTypes({}, {call, put}){
      //       let data = yield call(getQuestionTypes);
      //       console.log('data...', data);
      //     }
    *getExamTypes({ payload }, { call, put }) {
      console.log('111')
      let data = yield call(ExamTypes);
      // console.log(data)
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            examType: data.data
          }
        });
      }
    },
    //点击编辑获取数据
    *EditQuestion({payload},{call,put}){
      yield put({
        type:"getAllType"
      })
      let data=yield call(getClassQuery,payload)
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            EditQuestion: data.data
          }
        });
      }
    },
    //更新试题
    *updateQuestion({ payload }, { call, put }){
      let data = yield call(updateQuestion,payload);
        yield put({
          type: "save",
          payload: {
            editCode: data.code
          }
        });
        yield put({
          type: "save",
          payload: {
            editCode: -1
          }
        });
    },
    //获取所有的课程类型
    *getSubject({ payload }, { call, put }) {
      let data = yield call(getSubject);
      // console.log("subject:", data);
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            subjectType: data.data
          }
        });
      }
    },
    //获取所有的试题类型
    *getQuestionsType({ payload }, { call, put }) {
      let data = yield call(getQuestionsType);
      // console.log("getQuestionsType:", data);
      console.log("11111111111111111111",data);
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            questions_type: data.data
          }
        });
      }
    },
    *getClassData({payload},{call,put}){
      // console.log(payload)
      let data=yield call(getClassQuery,payload)
      if(data.code===1){
        yield put({
          type:"save",
          payload:{
            allQuestion: data.data
          }
        })
      }
    },

    //获取所有的试题
    *getAllquestion({ payload }, { call, put }) {
      let data = yield call(getAllquestion);
      if (data.code === 1) {
        yield put({
          type: "save",
          payload: {
            allQuestion: data.data
          }
        });
      }
    },
    *getAllType({ payload }, { call, put }) {
      // console.log("models-getAddPage");
      yield put({ type: "getExamType" });
      yield put({ type: "getSubject" });
      yield put({ type: "getQuestionsType" });
    },
    *addQuestions({payload},{call,put}){
      // console.log('model-question-addQuestions.payload',payload);
      let data=yield call(addQuestions,payload);
      // console.log('addQuestions.data',data);
      yield put({
        type:'save',
        payload:data
      })
    },
    //添加试题类型
    *addQuestionsType({ payload }, { call, put }) {
      // console.log('model-question-addQuestionsType.payload',payload);
      try {
        let data = yield call(addQuestionsType, payload);
        yield put({ type: "getQuestionsType" });
        yield put({ type: "callTypeCode", payload: data.code === 1 ? 1 : 0 });
      } catch (err) {
        yield put({ type: "callTypeCode", payload: 0 });
      }
    },
    *callTypeCode({ payload }, { call, put }) {
      yield put({ type: "setTypeCode", payload });
      yield put({
        type: "resetTypeCode"
      });
    }
  },
  //同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setTypeCode(state, action) {
      return { ...state, typeCode: action.payload };
    },
    resetTypeCode(state) {
      return { ...state, typeCode: -1 };
    }
  }
};



// import {getQuestions, getQuestionTypes} from '@/services'

// export default {
//   // 命名空间
//   namespace: 'questions',

//   // 模块内部的状态
//   state: {
//     isLogin: 0
//   },

//   // 异步操作
//   effects: {
//     // 获取所有试题
//     *getQuestions({payload}, {call, put}){
//       let data = yield call(getQuestions);
//       console.log('data...', data);
//       if (data.code === 1) {
//         yield put({
//           type: "save",
//           payload: {
//             getQuestions: data.data
//           }
//         });
//       }
//     },
//     // 获取所有试题类型
//     *getQuestionTypes({}, {call, put}){
//       let data = yield call(getQuestionTypes);
//       console.log('data...', data);
//     }
//   },

//   // 同步操作
//   reducers: {
//     save(state, action) {
//       console.log(action)
//       return { ...state,...action.payload };
//     }
//   }
// };
