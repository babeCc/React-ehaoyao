import {detailAsync} from "actions/detail/detailActionType";
import {handleActions} from "redux-actions";
let defaultState = {
    info:[]
}

export default handleActions({
    [detailAsync]:(state,action)=>{
        let detailState = JSON.parse(JSON.stringify(state));
        detailState.info = action.payload.data;
        return detailState;
    }
},defaultState)

