
import {changRegister,changeUsernameAction,changePasswordAction,regiserAsyncAction,loginAsyncAction} from "actions/home/homeActionType";


import {handleActions} from "redux-actions";
import { Toast } from 'antd-mobile';
let defaultState = {
    flag:false,
    username:"",
    password:"",
    data:{}
}

export default handleActions({
    [changRegister]:(state,action)=>{
            var  loginState = JSON.parse(JSON.stringify(state));
            loginState.flag = !loginState.flag;
            return loginState;
    },
    [changeUsernameAction]:(state,action)=>{
        var  loginState = JSON.parse(JSON.stringify(state));
        loginState.username=action.value;
        
        return loginState;
    },
    [changePasswordAction]:(state,action)=>{
        var  loginState = JSON.parse(JSON.stringify(state));
        loginState.password=action.value;
        return loginState;
    },
    [regiserAsyncAction]:(state,action)=>{
        var  loginState = JSON.parse(JSON.stringify(state));
        loginState.data = action.payload;
        
        if(action.payload.data.status==1){
            Toast.success(action.payload.data.info)

        }
        if(action.payload.data.status==2){
            Toast.fail(action.payload.data.info)
        }
        loginState.username="";
        loginState.password="";
        return loginState;
    },
    [loginAsyncAction]:(state,action)=>{
        var  loginState = JSON.parse(JSON.stringify(state));
        loginState.data = action.payload;
        setTimeout(()=>{
            window.location.href="http://localhost:3000/#/mine";
        },500)
        
       
        return loginState;
    }
},defaultState)






