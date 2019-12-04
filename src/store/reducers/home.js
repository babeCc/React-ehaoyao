import {handleActions} from "redux-actions";
import {homeAsync} from "actions/home/homeActionType"
const defaultState = {
    home_goods:[],
    date:""
};

export default handleActions({
    [homeAsync]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify((state)))
        
            homeState.date = action.payload.data.purchaseEndTime;
           
            homeState.home_goods=action.payload.data.homepageActivityList;
           
            return  homeState;
    }
},defaultState)