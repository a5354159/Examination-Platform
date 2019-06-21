import request from "../utils/request";

//获取已经分配教室的班级
export function mangerGrade() {
  return request({
    url: `/manger/grade`
  });
}
//获取已经分配教室
export function mangerRoom() {
  return request({
    url: `/manger/room`
  });
}
//获取所有没有分班的学生接口
export function mangerStudentNew() {
  return request({
    url: `/manger/student/new`
  });
}
//获取所有已经分班的学生的接口
export function mangerStudent() {
  return request({
    url: `/manger/student`
  });
}