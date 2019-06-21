import dynamic from "dva/dynamic";
// 引入路由
const SortQuestions = dynamic({
  component: () => import("@/views/Main/Questions/SortQuestions")
});
const ViewQuestions = dynamic({
  component: () => import("@/views/Main/Questions/ViewQuestions")
});
const AddQuestions = dynamic({
  component: () => import("@/views/Main/Questions/AddQuestions")
});
const Adduser = dynamic({
  component: () => import("@/views/Main/user/Adduser")
});
const ShowUser = dynamic({
  component: () => import("@/views/Main/User_Management/ShowUser")
});
const ExamList = dynamic({
  component: () => import("@/views/Main/Exam/ExamList/index")
});
const AddExam = dynamic({
  component: () => import("@/views/Main/Exam/AddExam/index")
});
const ClassManage = dynamic({
  component: () => import("@/views/Main/Class_Manage")
});
const ClassroomManage = dynamic({
  component: () => import("@/views/Main/Class_Manage/ClassroomManage.js")
});
const StudentsManage = dynamic({
  component: () => import("@/views/Main/Class_Manage/StudentsManage.js")
});
const MarkingManage = dynamic({
  component: () => import("@/views/Main/MarkingManage/index")
});
export default {
  routes: [
    {
      name: "router.questions",
      children: [
        {
          name: "router.questions.add",
          id: "main-addQuestions",
          path: "/questions/add",
          component: AddQuestions
        },
        {
          name: "router.questions.view",
          id: "main-watchQuestions",
          path: "/questions/view",
          component: ViewQuestions
        },
        {
          name: "router.questions.type",
          id: "main-questionsType",
          path: "/questions/type",
          component: SortQuestions
        }
      ]
    },
    {
      name: "router.user",
      children: [
        {
          name: "router.user.addUser",
          id: "main-addUser",
          path: "/user/addUser",
          component: Adduser
        },
        {
          name: "router.user.show",
          id: "main-showUser",
          path: "/user/showUser",
          component: ShowUser
        }
      ]
    },
    {
      name: "router.exam",
      children: [
        {
          name: "router.exam.add",
          id: "main-addExam",
          path: "/exam/addExam",
          component: AddExam
        },
        {
          name: "router.exam.list",
          id: "main-questionsDetail",
          path: "/exam/examList",
          component: ExamList
        }
      ]
    },
    {
      name: "router.class",
      children: [
        {
          name: "router.class.grade",
          id: "	main-grade",
          path: "/questions/ClassManage",
          component: ClassManage
        },
        {
          name: "router.class.room",
          id: "main-room",
          path: "/questions/ClassroomManage",
          component: ClassroomManage
        },
        {
          name: "router.class.student",
          id: "main-student",
          path: "/questions/StudentsManage",
          component: StudentsManage
        }
      ]
    },
    {
      name: "router.mark",
      children: [
        {
          name: "router.mark.classlist",
          id: "main-examinationPapers",
          path: "/questions/MarkingManage",
          component: MarkingManage
        }
      ]
    }
  ]
};
