import React, {useEffect} from 'react';
import {connect} from 'dva';


function IndexPage(props){
  useEffect(()=>{
    props.getQuestions();
  }, []);
  return null;
}

const mapStateToProps = state=>{
  console.log('state..', state);
  return {
    loading: state.loading.global
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    getQuestions(){
      dispatch({
        type: 'questions/getQuestions'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
