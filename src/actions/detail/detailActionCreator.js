import {detailAsync} from "./detailActionType";
import {detailApi} from "api/activityA";
import {createAction} from "redux-actions";
export const detailAsyncAction = (groupId)=>{
    let detailAction = createAction(detailAsync,(data)=>data);
    return async (dispatch)=>{
        let data = await detailApi(groupId);
        dispatch(detailAction(data))
    }    
}