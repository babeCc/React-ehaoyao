import {sortAsync,linkAsync} from "./sortActionType";
import {createAction} from "redux-actions";
import {sortApi,linkApi} from "api/activityA";
export const sortAsyncAction = (id,page)=>{
    let sortAction = createAction(sortAsync,(data)=>data)

        return async (dispatch)=>{
            let data = await sortApi(id,page);
           
            dispatch(sortAction(data))
        }

}
export const linkAsyncAction = (link,page)=>{
   

        return async (dispatch)=>{
            let data = await linkApi(link);
           
            dispatch(sortAsyncAction(data.data.thirdNew?data.data.thirdNew:"",page))
        }

}