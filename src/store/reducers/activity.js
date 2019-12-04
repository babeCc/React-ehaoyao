import {handleActions} from "redux-actions";
import {activityAsync,modifyFlag} from "actions/home/homeActionType";

const defaultState = {
    flag:false
}

export default handleActions({
    [activityAsync]:(state,action)=>{
        var  activityState = JSON.parse(JSON.stringify(state));
         activityState.goods = action.payload.data.homepageActivityList;
         return activityState;
    },
    [modifyFlag]:(state,action)=>{
        var  activityState = JSON.parse(JSON.stringify(state));
        activityState.flag = !activityState.flag;
        return activityState;
    }
},defaultState)