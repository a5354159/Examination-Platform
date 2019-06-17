import React,{useEffect} from "react";
import { connect } from "dva";

function AddExam(props){
console.log(props)
const {getexamlist}=props
    useEffect(()=>{
        getexamlist()
    })
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
    getexamlist(){
        // console.log('a')
        dispatch({
            type:'question/getexamlist'
        })
    }
})

export default connect(MapState,MapDispatch)(AddExam)