import {commandAsync} from "actions/cartCommand/commandActionType";
import {handleActions} from "redux-actions";
let defaultState = {
    info:[]
}

export default handleActions({
    [commandAsync]:(state,action)=>{
        let detailState = JSON.parse(JSON.stringify(state));
        // detailState.info = action.payload.data;
        console.log(action.payload)
        return detailState;
    }
},defaultState)