// import React, { useEffect } from "react";
// import { Table, Divider, Tag } from "antd";
// import { connect } from "dva";
// function Updata(props) {
  // let { showUsers, Suser } = props;
  // useEffect(() => {
  //   showUsers();
  // }, []);
  // console.log(props.Suser)
  // const columns = [
  //   {
  //     title: "用户名",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "密码",
  //     dataIndex: "age",
  //     key: "age"
  //   },
  //   {
  //     title: "身份",
  //     dataIndex: "address",
  //     key: "address"
  //   }
  // ];
  // const data = props.Suser.map((item, key) => {
  //   return {
  //     key: key + 1,
  //     name: item.user_name,
  //     age: item.user_pwd,
  //     address: item.identity_text
  //   };
  // });
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     render:props=>{
  //       return <div>33333</div>
  //     }
  //   }

  // ];
//   console.log(props);
//   return (
//     <div>
//       <h1>身份和视图权限关系</h1>
//       <div className="content_box_footer">
//         <Table columns={columns} dataSource={data} />
//       </div>
//     </div>
//   );
// }
// let mapStateToProps = state => {
//   console.log(state);
//   return { ...state.user };
// };
// let mapDispatchToProps = dispatch => {
//   return {
//     showUsers() {
//       dispatch({
//         type: "user/Showuser"
//       });
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Updata);
