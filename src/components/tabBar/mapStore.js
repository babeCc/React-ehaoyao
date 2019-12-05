export const mapStateToProps = (state)=>({
    num:state.cart.num || JSON.parse(localStorage.getItem("num"))
    
})
export const mapDispatchToProps = (dispatch)=>({

})