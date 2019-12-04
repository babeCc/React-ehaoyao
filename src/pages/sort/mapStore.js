import {listAsyncAction} from "actions/list/listActionCreator";
export const mapStateToProps = (state)=>({
    list:JSON.parse(localStorage.getItem("list")) || state.list.list || [],
    
})


export const mapDispatchToProps = (dispatch)=>({
    handleGetList(){
        dispatch(listAsyncAction())
    }
})