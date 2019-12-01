
import {handleActions} from "redux-actions";
import {doctorType} from "actions/doctor/doctorActionType";

const defaultState = {

}

export default handleActions({
    [doctorType]:(state,action)=>{
        let doctorState = JSON.parse(JSON.stringify(state));
       
        doctorState.doctors = action.payload.datas[0].datas;
        localStorage.setItem("doctors",JSON.stringify(action.payload.datas[0].datas))
        return doctorState
    }
},defaultState)