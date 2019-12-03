import {getTicketListAsync} from "actions/home/homeActionType";

import {handleActions} from "redux-actions";
let  defaultState = {
    data:{}
}

export default handleActions({
    [getTicketListAsync]:(state,action)=>{
        let ticketState = JSON.parse(JSON.stringify(state));
        ticketState.data = action.payload.data;
        return  ticketState;
    }
},defaultState)