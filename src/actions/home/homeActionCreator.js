import{homeAsync,activityAsync,goodsKeysAsync,seacrhAsync,inputValueAction,ticketAsync,getAsync,getTicketListAsync} from "./homeActionType";

import {activityApi,activityListApi,searchApi,goodsKeysApi,ticketApi,getApi,ticketListApi} from "api/activityA";

import {createAction} from "redux-actions";
export const homeAsyncAction  = (connType,cityId)=>{
    let homeAction = createAction(homeAsync,(data)=>data)
            return async (dispatch)=>{
           if(!localStorage.getItem("activity")){
            let data = await activityApi();
           
            dispatch(homeAction(data));
           }
         
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
        if(!localStorage.getItem("goodsKey")){
            let data = await goodsKeysApi();
            dispatch(goodsKey(data))
        }
      
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
// 领券
export const ticketAsyncAction = ()=>{
    let ticketAction = createAction(ticketAsync,(data)=>data);
    return async (dispatch)=>{
       if(!localStorage.getItem("ticket")){
            let data =  await ticketApi();
            dispatch(ticketAction(data))
       }
        
    }
} 
export const getAsynAction =(Id)=>{
    let getAction = createAction(getAsync,(data)=>data);
    return async (dispatch )=>{
        let data = await getApi(Id);
        
        dispatch(getAction(data))
    }
}
//券商品

export const ticketListAsyncAction = (id) =>{
    let ticketListAction = createAction (getTicketListAsync,(data)=>data);
    return async (dispatch)=>{
        let data = await ticketListApi(id);
        console.log(data)
        dispatch(ticketListAction(data))
    }
}