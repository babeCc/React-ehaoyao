import {cartCommandApi} from "api/activityA"
import {commandAsync} from "./commandActionType";
import {createAction} from "redux-actions";
export const commandAsyncAction = (page_no)=>{
    let commandAction = createAction(commandAsync,(data)=>data)
    return async (dispatch) =>{
        
            let data = await cartCommandApi(page_no);
            dispatch(commandAction(data))
        
      
    }
}