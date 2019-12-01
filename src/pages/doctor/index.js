import React from "react";
import{DoctorContainer} from "./styled";
import Header from "../../components/header";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
@connect(mapStateToProps,mapDispatchToProps)
class Doctor extends React.Component{
    constructor(){
        super()
    }
    render(){
        let {doctors} = this.props;
       
        return(
           <DoctorContainer>
              <Header/>
               <div className="doctor_content">
                   <p className="tips">
                   药师承诺：不推荐无关价格昂贵的药品
                   </p>
                   <ul>
                       {
                           doctors.map((item)=>(
                               <li key={item.id}>
                                   <div className="content_img">
                               <img src={item.imgPath} alt=""/>
                           </div>
                           <div className="content_info">
                               <div className="content_named">{item.doctorName} <span>{item.title}</span></div>
                               <p className="aptitudesNo">资质编号 {item.code}</p>
                               <div className="labels">
                                   <span>{item.specialty}</span>
                                 
                               </div>
                           </div>
                           <div className="opt">
                               <a href="https://ehaoyao.qiyukf.com/client?k=54a3f1e9144f5fceee378923f235fd7d&amp;wp=1&amp;robotShuntSwitch=0">
                               <div>
                                   <img src="img/zi.png" alt=""/>
                               </div>
                               <span className="btn_askNow">立即咨询</span>
                               </a>
                           </div>
                               </li>
                           ))
                       }
                      
                   </ul>
               </div>
           </DoctorContainer> 
        )
    }
    componentDidMount(){
        this.props.handleDoctorData()
    }
}

export default Doctor;