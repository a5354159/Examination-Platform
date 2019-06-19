import {getRequest,request} from '../utils/request';


// // login, userInfo, getUserId, getData, userAdd,editAdd,apiAdd,getAddViews,setAddViews,getApiData,getApiView,getApiViewStatus,upDateUserId
// import request from '@/utils/request'
// // 获取所有试题
// export function getAllquestion(){
//   return request({
//     url: '/exam/questions/new'
//   })
// }

// // 获取所有的类型试题
// export function getQuestionsType(){
//   return request({
//     url: '/exam/getQuestionsType'
//   })
// }

// //考试类型 v
export function ExamTypes(){
	return request({
		url:'exam/examType',
		method:'GET',
	})
}

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