import {linkAsyncAction} from "actions/sort/sortActionCreator"
export const mapStateToProps = (state)=>({
    data:state.sort.data || [],
    goods:state.sort.goods
})

export const mapDispatchToProps = (dispatch)=>({
   
    handleGetLink(link,page){
       
        dispatch(linkAsyncAction(link,page))
    }
})