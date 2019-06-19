// // import {getRequest,request} from '../utils/request';
import request from '../utils/request'
// console.log(request)

// 获取所有考试试卷列表
export function getexamlist(){
  return request({
    url: '/exam/exam'
  })
}

//考试类型
export function getaExamType(){
	return request({
		url:'/exam/examType',
		method:'GET',
	})
}

//all考试类型
export function getAllSubject(){
	return request({
		url:'/exam/subject',
		method:'GET',
	})
}
// // 获取所有的类型试题
// export function getQuestionsType(){
//   return request({
//     url: '/exam/getQuestionsType'
//   })
// }

// //考试类型 v
// export function getExamType(){
// 	return request({
// 		url:'exam/examType',
// 		method:'GET',
// 	})
// }

// //获取所有的课程v
// export function getSubject(){
// 	return request({
// 		url:'/exam/subject',
// 		method:'GET',
// 	})
// }


// //添加试题接口	/exam/questions POST
// export function addQuestions(params){
// 	return request({
// 		url:'/exam/questions',
// 		method:'POST',
// 		data:params
// 	})
// }
// //添加试题类型接口 /exam/insertQuestionsType GET
// // export function addQuestionsType(params){
// // 	// console.log('service-addQuestionsType.params',params)
// // 	return getRequest({
// // 		url:'/exam/insertQuestionsType',
// // 		params
// // 	})
// // }
// // //查询接口
// export function getClassQuery(params){
// 	return request({
// 		url:"/exam/questions/condition",
// 		method:"GET",
// 		params,
// 	})
// }
// // //更新试题接口
// export function updateQuestion(data){
// 	return request({
// 		url:"/exam/questions/update",
// 		method:"PUT",
// 		data
// 	})
// }