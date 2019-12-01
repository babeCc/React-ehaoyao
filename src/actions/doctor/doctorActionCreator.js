import {doctorType} from "./doctorActionType";
import {createAction} from "redux-actions"
import {doctorApi} from "api/activityA";
export const doctorAction = (coonType,cityId)=>{
    let doctorAsyncAction = createAction(doctorType,(data)=>data);
   
    return async (dispatch)=>{
        let data = await doctorApi(coonType,cityId);
        
        dispatch(doctorAsyncAction(data))
    }
}

