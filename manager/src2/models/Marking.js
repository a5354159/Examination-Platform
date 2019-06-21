import {
  mangerGrade,
  Markingchange,
  MarkingStudent,
  StudentClass
} from "@/services";

export default {
  // 命名空间
  namespace: "Markings",

  // 模块内部的状态
  state: {
    classdata: []
  },

  // 异步操作
  effects: {
    // 获取班级
    *Classs({ payload }, { call, put }) {
      const data = yield call(mangerGrade);
      console.log("班级数据....", data);
      yield put({
        type: "class",
        payload: data.data
      });
    }
    // 获取所有试题类型
  },

  // 同步操作
  reducers: {
    class(state, { payload }) {
      console.log(state, payload);
      return { ...state, classdata: payload };
    }
  }
};
