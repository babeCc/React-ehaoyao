
import {detailAsyncAction} from "actions/detail/detailActionCreator";
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
   info:state.detail.info|| []
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetDetailData(groupId){
        dispatch(detailAsyncAction(groupId))
    },
    handleListAdd(obj){
        dispatch(AddProAction(obj))
    },
    
})