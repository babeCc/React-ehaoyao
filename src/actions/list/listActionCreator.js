import {listApi} from "api/activityA"
import {listAsync} from "./listActionType";
import {createAction} from "redux-actions";
export const listAsyncAction = ()=>{
    let listAction = createAction(listAsync,(data)=>data)
    return async (dispatch) =>{
        
            let data = await listApi();
            dispatch(listAction(data))
        
      
    }
}