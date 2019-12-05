
import{homeAsync,activityAsync,goodsKeysAsync,seacrhAsync,inputValueAction,ticketAsync,getAsync,getTicketListAsync,changeKeyWord,pushChooseKeyWord,modifyFlag} from "./homeActionType";

import {activityApi,activityListApi,searchApi,goodsKeysApi,ticketApi,getApi,ticketListApi,registerApi,loginApi} from "api/activityA";
import {changRegister,changeUsernameAction,changePasswordAction,regiserAsyncAction,loginAsyncAction} from "./homeActionType";

import {createAction} from "redux-actions";
import { Toast } from 'antd-mobile';

// 登录注册
export const loginAction = (username,password)=>{
    let loginAsync = createAction(loginAsyncAction,(data)=>data);
    return async (dispatch)=>{
        let data = await loginApi(username,password);
        // if(action.payload.data.code==1){
        //     Toast.success(action.payload.data.info)

        // }
        // if(action.payload.data.code==2){
        //     Toast.fail(action.payload.data.info)
        // }
        if(data.data.code == 1){
            Toast.success(data.data.info,1.5)
            sessionStorage.setItem("userInfo",JSON.stringify({name:data.data.data.name,urlPic:data.data.data.urlPic}))
            dispatch(loginAsync(data));
        
            return data.data.code;
        }else{
            Toast.fail(data.data.info)
        }
    }
}
export const regiserAction=(username,password)=>{
    let regiserAsync = createAction(regiserAsyncAction,(data)=>data);
        
    return async (dispatch)=>{
       
        let data = await registerApi(username,password);
        dispatch(regiserAsync(data))
    }
}
export const changeUsername= (value)=>({
    type:changeUsernameAction,
    value:value
})
export const changePassword= (value)=>({
    type:changePasswordAction,
    value:value
})
export const changeFlag=()=>({

        type:changRegister

})
//shouye
export const homeAsyncAction  = (connType,cityId)=>{
    let homeAction = createAction(homeAsync,(data)=>data)
            return async (dispatch)=>{
          
            let data = await activityApi();

            dispatch(homeAction(data));
           }
        }


// //传递关键字

// export const changeKeyWordActions = (val) =>({
//     type:changeKeyWord,
//     val:val
    
// })

//使用关键字

export const pushChooseActions=(val)=>({
    type:pushChooseKeyWord,
    val:val
})

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
       
        dispatch(ticketListAction(data))
    }
}

// activity flag
export const flagAction=()=>({
    type:modifyFlag,
})




