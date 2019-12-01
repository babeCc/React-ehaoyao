import {doctorAction} from "actions/doctor/doctorActionCreator";
export const mapStateToProps = (state)=>({
    doctors:JSON.parse(localStorage.getItem("doctors")) || state.doctor.doctors || []
})


export const mapDispatchToProps =  (dispatch) =>({
        handleDoctorData(){
            dispatch(doctorAction())
        }
})
