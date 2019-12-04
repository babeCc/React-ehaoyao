import {changeFlag,changeUsername,changePassword,regiserAction,loginAction} from "actions/home/homeActionCreator";

export  const mapStateToProps = (state)=>({
    flag:state.login.flag,
    username:state.login.username,
    password:state.login.password,
    data:state.login.data
})

export const mapDispatchToProp=(dispatch)=>({
   async handleLogin(username,password){
      let data = await  dispatch(loginAction(username,password))
      if(data == 1){
        
       
      }
    },
    handleRegiser(username,password){
        dispatch(regiserAction(username,password))
        
    },
     handleFlag(){
         dispatch(changeFlag())
     },
     handleChangeUsername(e){
         let val = e.target.value;
        
        dispatch(changeUsername(val))
     },
     handleChangePassword(e){
        let val = e.target.value;
        dispatch(changePassword(val))
     }
})