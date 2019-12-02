import {homeAsyncAction} from "actions/home/homeActionCreator";
export const mapStateToProps = (state)=>({
        home_goods:JSON.parse(localStorage.getItem("activity"))||state.home.home_goods || []
})

export const mapDispatchToProps = (dispatch)=>({
        handleHomeAsyncData(){
            dispatch(homeAsyncAction());
        }
})