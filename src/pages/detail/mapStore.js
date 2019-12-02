
import {detailAsyncAction} from "actions/detail/detailActionCreator";
export const mapStateToProps = (state)=>({
   info:state.detail.info|| []
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetDetailData(groupId){
        dispatch(detailAsyncAction(groupId))
    }
})