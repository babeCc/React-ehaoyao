import {handleActions} from "redux-actions";
import {activityAsync} from "actions/home/homeActionType";

const defaultState = {

}

export default handleActions({
    [activityAsync]:(state,action)=>{
        let activityState = JSON.parse(JSON.stringify(state));
         activityState.goods = action.payload.data.homepageActivityList;
         return activityState;
    }
},defaultState)