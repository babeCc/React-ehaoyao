import {ticketListAsyncAction} from "actions/home/homeActionCreator";

export const mapStateToProps = (state)=>({
         data:state.ticketlist.data ||{}
})

export const mapDispatchToProps = (dispatch) =>({
        handleGetData(id){
            dispatch(ticketListAsyncAction(id))
        }
})