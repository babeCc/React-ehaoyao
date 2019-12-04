import {flagAction} from "actions/home/homeActionCreator";

export const mapStateToProps = (state)=>({})
    


export const mapDispatchToProps=(dispatch)=>({
    handleFlag(){
        dispatch(flagAction()) 
     }
})
  
