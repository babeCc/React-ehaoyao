import{homeAsync,activityAsync,goodsKeysAsync,seacrhAsync,inputValueAction} from "./homeActionType";

import {activityApi,activityListApi,searchApi,goodsKeysApi} from "api/activityA";

import {createAction} from "redux-actions";
export const homeAsyncAction  = (connType,cityId)=>{
    let homeAction = createAction(homeAsync,(data)=>data)
            return async (dispatch)=>{
            
            let data = await activityApi();
           
            dispatch(homeAction(data));
        }
       
     
    
}

export const activityAsyncAction = (goodsId) =>{
    let activityAction = createAction(activityAsync,(data)=>data)

    return async (dispatch)=>{
        let data = await activityListApi(goodsId);
        dispatch(activityAction(data))
    }
}


//模糊查询

export const goodsKeyActions = ()=>{
    let goodsKey = createAction(goodsKeysAsync,(data)=>data)

    return async (dispatch)=>{
        let data = await goodsKeysApi();
        dispatch(goodsKey(data))
    }
}

export const searchAsyncActions = (name)=>{
        let seacrhAction = createAction(seacrhAsync,(data)=>data)
        
        return async (dispatch) =>{
            let data = await searchApi(name);
             dispatch(seacrhAction(data))
        }
}

export const inputValueChange = (value)=>{
    let inputChange = createAction(inputValueAction,(data)=>data);

    return (dispatch)=>{
        
        dispatch(inputChange(value));
    }
}