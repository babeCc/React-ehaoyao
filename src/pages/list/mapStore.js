import {linkAsyncAction} from "actions/sort/sortActionCreator"
import {AddProAction} from "actions/cart/cartActionCreator"
export const mapStateToProps = (state)=>({
    totalPage:state.sort.totalPage,
    goods:state.sort.goods
})

export const mapDispatchToProps = (dispatch)=>({
    handleListAdd(obj){
        dispatch(AddProAction(obj))
       
    },

    handleGetLink(link,page){
       
        dispatch(linkAsyncAction(link,page))
    }
    
})