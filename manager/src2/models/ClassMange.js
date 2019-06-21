import {
  mangerGrade,
  mangerRoom,
  mangerStudentNew,
  mangerStudent
} from "@/services";
export default {
  // 命名空间
  namespace: "Classmane",

  // 模块内部的状态
  state: {
    classdata: [],
    classRoomdata: [],
    Studentdata:[],
    StudentNew:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  // 异步操作
  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    //班级管理
    *Classs({ payload }, { call, put }) {
      const data = yield call(mangerGrade);
      console.log("班级数据....", data);
      yield put({
        type: "class",
        payload: data.data
      });
      //教室管理
      const data2 = yield call(mangerRoom);
      console.log("教室数据....", data2);
      yield put({
        type: "classRoom",
        payload: data2.data
      });
      //学生管理
      const data3 = yield call(mangerStudent);
      console.log("获取所有已经分班学生....", data3);
      yield put({
        type: "Student",
        payload: data3.data
      });
       //学生管理2
      const data4 = yield call(mangerStudentNew);
      console.log("获取所有未分班的学生....", data4);
      yield put({
        type: "StudentNew",
        payload: data4.data
      });
    }
  },

  // 同步操作
  reducers: {
    //班级
    class(state, { payload }) {
      console.log(state, payload);
      return { ...state, classdata: payload };
    },
    //教室
    classRoom(state, { payload }) {
      console.log(state, payload);
      return { ...state, classRoomdata: payload };
    },
    //学生
    Student(state, { payload }) {
      console.log(state, payload);
      return { ...state, Studentdata: payload };
    },
    StudentNew(state, { payload }) {
      console.log(state, payload);
      return { ...state, StudentNewdata: payload };
    }
  }
};
