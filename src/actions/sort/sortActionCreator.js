import {sortAsync,linkAsync} from "./sortActionType";
import {createAction} from "redux-actions";
import {sortApi,linkApi} from "api/activityA";
export const sortAsyncAction = (id)=>{
    let sortAction = createAction(sortAsync,(data)=>data)

        return async (dispatch)=>{
            let data = await sortApi(id);
           
            dispatch(sortAction(data))
        }

}
export const linkAsyncAction = (link)=>{
    let linkAction = createAction(linkAsync,(data)=>data)

        return async (dispatch)=>{
            let data = await linkApi(link);
               
            dispatch(sortAsyncAction(data.thirdNew))
        }

}