import {ticketListAsyncAction} from "actions/home/homeActionCreator";

export const mapStateToProps = (state)=>({
         data:state.ticketlist.data ||{},
         flag:state.ticketlist.flag
})

export const mapDispatchToProps = (dispatch) =>({
        handleGetData(id){
            dispatch(ticketListAsyncAction(id))
        }
})