import {activityAsyncAction} from "actions/home/homeActionCreator";

export const mapStateToProps = (state)=>({
    goods:state.activity.goods || []
})


export const mapDispatchToProps = (dispatch)=>({
    handleActivityAsyncData(){
        dispatch(activityAsyncAction())
    }
})