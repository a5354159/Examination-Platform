import request from "../utils/request";

// 批改试卷

export function Markingchange(params) {
  return request({
    url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
    method: "PUT",
    data: params
  });
}

//获取学生试卷列表接口

export function MarkingStudent(params) {
  return request({
    url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
    method: "PUT",
    data: params
  });
}

//获取学生试卷详情

export function StudentClass() {
  return request({
    url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m"
  });
}
