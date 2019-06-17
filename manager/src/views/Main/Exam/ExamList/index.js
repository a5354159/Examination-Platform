import React,{useEffect} from "react";
import { connect } from "dva";

function ExamList(props){
console.log(props)
const {getexam}=props
    useEffect(()=>{
        getexam()
    },[])
    return (
        'a'
    )
}

const MapState = state => {
    console.log(state)
    return {
      ...state
    }
  }

const MapDispatch = dispatch => ({
    getexam(){
        // console.log('a')
        dispatch({
            type:'examlist/getexamlists'
        })
    }
})

export default connect(MapState,MapDispatch)(ExamList)