import styled from "styled-components";

export const DoctorContainer =  styled.div`
        padding-top:.35rem;
    .doctor_content{
        p{
            height: .34rem;
            line-height: .34rem;
            text-align: center;
            background-color: #fff0f2;
            font-size: .15rem;
            color: #ff344d;
        }
        ul{
            li{ 
                height:89px;
                display: flex;
                padding-top: .1rem;
                padding-left: .1rem;
                border-bottom: 1px solid #e5e5e5;
                overflow: hidden;
                .content_img{
                    display: block;
                    width: 60px;
                    height: 60px;
                    border: 1px solid #e5e5e5;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width:60px;
                        
                    }
                }
                .content_info{
                    font-size: 12px;
                    flex: 1;
                    padding-left: 10px;
                    .content_named{
                        height:19px;
                        font-size:14px;
                        span{
                            color: #898989;
                            padding-left:6px;
                            font-size:12px;
                        }
                    }
                    .aptitudesNo{
                        height: 20px;
                        line-height: 20px;;
                        font-size: 10px;;
                        color: #4e4e4e;
                        background:none;
                        text-align:left;
                    }
                    .labels{
                        display: flex;
                        height: 22px;;
                        align-items: center;
                        span{
                            display: inline-block;
                            margin-right: 4px;
                            padding: 0 3px;
                            height: 12px;
                            line-height:12px;
                            font-size: 10px;
                            color: #6282ac;
                            background-color: #f4f8ff;
                        }
                    }
                   
                }
                .opt{   font-size: 10px;
                        padding-top:20px;
                        width:56px;
                        div{
                          display:flex;
                          justify-content:center;
                          align-items:center;
                            img{
                                width:26px;
                                margin:0 auto;
                            }
                        }
                        .btn_askNow{
                            display: block;
                            padding-top:5px;
                            height: 35px;
                          
                            font-size: 10px;
                            text-align: center;
                            color: #ff344d;
                        }
                    }
            }
        }
    }
`